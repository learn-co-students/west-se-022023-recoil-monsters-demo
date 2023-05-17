import React from 'react'
import { monsterFilterState } from '../atoms'
import { useRecoilState } from 'recoil'

export default function Filters() {

  const [filter, setFilter] = useRecoilState(monsterFilterState)
  console.log("🚀 ~ file: Filters.jsx:8 ~ Filters ~ filter:", filter)

  const handleChange = ({target: {value}}) => setFilter(value) // we use nested destructuring here to pull the target object out of the event, and then to pull the value property out of the target object

  return (
    <div className="ui form">
        <h3>Monster Type</h3>
        <div className="field" style={{width: '30vw', margin: '0 auto', padding: '20 20'}}>
        <select value={filter} name="type" id="type" aria-label="type" onChange={handleChange}>
          <option value="">All</option>
          <option value="beast">Beast</option>
          <option value="humanoid">Humanoid</option>
          <option value="dragon">Dragon</option>
          <option value="undead">Undead</option>
        </select>
      </div>
    </div>
  )
}
