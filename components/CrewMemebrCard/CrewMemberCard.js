import BtnContainer from '../BtnContainer/BtnContainer'

const CrewMemberCard = ({ astronaut, preview }) => {
  return (
    <div className="card">
      <h1 className="astronautName">{astronaut.name}</h1>
      <h2 className="astronautSurname">{astronaut.surname}</h2>
      <span>Was born in: {astronaut.birth_date}</span>
      <div className="mainContent">
        <p className="rank">Rank: {astronaut.rank}</p>
        <p className="superpowers">Superpowers: {astronaut.superpowers}</p>

        <BtnContainer routeParam={astronaut} preview={preview} />
      </div>
    </div>
  )
}

export default CrewMemberCard
