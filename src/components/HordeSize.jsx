import React from 'react'
import { hordeState } from '../atoms'
import { useRecoilState } from 'recoil'

export default function HordeSize() {

  const [horde, setHorde] = useRecoilState(hordeState)

  const handleAddTwo = () => setHorde(prevHorde => prevHorde + 2)
  const handleMinusOne = () => setHorde(prevHorde => prevHorde - 1)

  return (
    <div>
        <h2>Horde Size</h2>
        <h2>Party size: {horde}</h2>
        <div>
            <button className="ui button" onClick={handleAddTwo}>Add 2 monsters</button>
            <button className="ui button" onClick={handleMinusOne}>Subtract 1 monster</button>
        </div>
    </div>
  )
}
