import { useState } from "react";
import { useRouter } from "next/router";
import { mutate } from "swr";

const Form = ({ formId, astronautForm, forNewAstronaut = true }) => {
  const router = useRouter();
  const contentType = "application/json";
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: astronautForm.name,
    surname: astronautForm.surname,
    superpowers: astronautForm.superpowers,
    birth_date: astronautForm.birth_date,
    rank: astronautForm.rank,
    image_url: astronautForm.image_url,
    strongness: astronautForm.strongness,
    weakness: astronautForm.weakness,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/astronauts/${id}`, {
        method: "PUT",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/astronauts/${id}`, data, false); // Update the local data without a revalidation
      router.push("/");
    } catch (error) {
      setMessage("Failed to update astronaut");
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch("/api/astronauts", {
        method: "POST",
        headers: {
          Accept: contentType,
          "Content-Type": contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push("/");
    } catch (error) {
      setMessage("Failed to add astronaut");
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value =
      target.name === "poddy_trained" ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewAstronaut ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  /* Makes sure astronaut info is filled for astronaut name, owner name, species, and image url*/
  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = "Name is required";
    if (!form.surname) err.surname = "Owner is required";
    if (!form.superpowers) err.superpowers = "Species is required";
    if (!form.image_url) err.image_url = "Image URL is required";
    return err;
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          maxLength="20"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          maxLength="20"
          name="surname"
          value={form.surname}
          onChange={handleChange}
          required
        />

        <label htmlFor="superpowers">Superpowers</label>
        <input
          type="text"
          maxLength="30"
          name="superpowers"
          value={form.superpowers}
          onChange={handleChange}
          required
        />

        <label htmlFor="rank">rank</label>
        <input
          type="text"
          maxLength="30"
          name="rank"
          value={form.rank}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />

        <label htmlFor="image_url">Image URL</label>
        <input
          type="url"
          name="image_url"
          value={form.image_url}
          onChange={handleChange}
          required
        />

        <label htmlFor="strongness">Likes</label>
        <textarea
          name="strongness"
          maxLength="60"
          value={form.strongness}
          onChange={handleChange}
        />

        <label htmlFor="weakness">Dislikes</label>
        <textarea
          name="weakness"
          maxLength="60"
          value={form.weakness}
          onChange={handleChange}
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
