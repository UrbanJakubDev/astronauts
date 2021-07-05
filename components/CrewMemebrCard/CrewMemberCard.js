import BtnContainer from "../BtnContainer/BtnContainer";

const CrewMemberCard = ({ astronaut }) => {
  return (
    <div className="card">
      <h1 className="astronautName">{astronaut.name}</h1>
      <h2 className="astronautSurname">{astronaut.surname}</h2>
      <span>Was born in: {astronaut.birth_date}</span>
      <div className="mainContent">
        <p className="rank">Rank: {astronaut.rank}</p>
        <p className="superpowers">Superpowers: {astronaut.superpowers}</p>

        {/* Extra astronaut Info: Likes and Dislikes */}
        Strongness and Weakness
        <div className="properties">
          <div className="info strongness">
            <p className="label">Strongness</p>
            <ul>
              {astronaut.strongness.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>
          <div className="info weakness">
            <p className="label">Weakness</p>
            <ul>
              {astronaut.weakness.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>
        </div>

              <BtnContainer routeParam={astronaut} />
      </div>
    </div>
  );
};

export default CrewMemberCard;
