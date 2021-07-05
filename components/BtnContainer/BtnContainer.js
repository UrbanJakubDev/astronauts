import Link from "next/link";

const BtnContainer = ({routeParam}) => {
  return (
    <div className="btn-container">
      <Link href="/[id]/edit" as={`/${routeParam._id}/edit`}>
        <button className="btn edit">Edit</button>
      </Link>
      <Link href="/[id]" as={`/${routeParam._id}`}>
        <button className="btn view">View</button>
      </Link>
    </div>
  );
};

export default BtnContainer;
