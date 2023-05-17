import React from 'react'
import Monster from './Monster'
// import { monstersState } from '../atoms'
import { filteredMonsters } from '../atoms'
import { useRecoilValue } from 'recoil'

export default function MonsterBrowser() {

  const monsters = useRecoilValue(filteredMonsters) // use this Recoil hook to read values that result from async processes 
  console.log("🚀 ~ file: MonsterBrowser.jsx:8 ~ MonsterBrowser ~ monsters:", monsters)

//   const monsterCards = monsters.map((m, idx)=> <Monster key={m.name + idx} {...m}/>) // this key prop was how I created a unique value in the absence of an id
//  I'm also using the spread operator {...m} to break apart each monster object and pass all of it's properties as individual props to the <Monster /> component
  const monsterCards = monsters.map((m)=> <Monster key={m.id} {...m}/>) // with db2.json refactored to add ids to our data, I can refactor here for a better key prop
  
  return (
    <div>
        <h2>Monsters</h2>
        <div className="ui cards">
          {monsterCards}
        </div>
    </div>
  )
}
