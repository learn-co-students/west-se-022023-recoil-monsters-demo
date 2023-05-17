import React from 'react'
import { monstersState } from '../atoms'
import { useSetRecoilState } from 'recoil'

export default function Monster({id, name, meta, isInParty, "Armor Class": ac, "Hit Points": hp, img_url}) { // destructuring values from props

  const setMonsters = useSetRecoilState(monstersState)

  const handleJoinParty = async () => {
    const config = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isInParty: true }) // NB: isInParty is not in the original data, so querying the property on unmodified monster objects will return undefined; this patch will actually add isInParty as a new key/value pair
    }
    const response = await fetch(`http://localhost:3000/monsters/${id}`, config) // I added unique IDs to each monster obj in a new db2.json file, so can complete a PATCH request with usual syntax
    const updatedMonster = await response.json()
    setMonsters(prevMonsters => prevMonsters.map(m => m.id === id ? updatedMonster : m)) // can also use ids here to update our monsters array in the appropriate atom
  }

  return (
    <div className="card">
        <div className="content">
            <span className="header">
                {name}
            </span>
            <div className="meta">
                <span className="date">{meta}</span>
            </div>
            <div className="description">
                <p>Armor Class: {ac}</p>
                <p>HP: {hp}</p>
            </div>
        </div>
        <div className="ui image">
            <img className="content" src={img_url} />
        </div>
        <div className="extra content">
            {!!isInParty ? (
                <button className="ui disabled button">Already in party</button>
                ) : (
                <button className="ui primary button" onClick={handleJoinParty}>
                    Add to party
                </button>
            )}
        </div>
    </div>
  )
}
