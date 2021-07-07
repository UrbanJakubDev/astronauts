import React from 'react'

const Index = () => {
  return (
    <div className="main-content">
      <h3>TechFides úkol</h3>
      <p>Vytvořeno podle zadání pro TechFides.</p>
      <p>Zdrojový kód : <a href="https://github.com/UrbanJakubDev/astronauts">Github</a></p>
      <h3>Použité tehchnologie</h3>
      <p>Pro web jsem použil framework Next.js, který umožnuje vytvořit jak Frontendovou část aplikace tak API pro komunikaci s databází.
        Data jsou uložená v MondoDB na plataformě Mongo Atlas (úložistě DB lze změnit v soubrou <b>.env.local</b>)
      </p>
      <p>Aplikace je nasazená na hostignu Vercel, který mimo jiné vytváří framework Next.js, tudíž je možné jednoduché nasazení aplikace přímo z Gitu.</p>
      
    </div>
  )
}

export default Index
