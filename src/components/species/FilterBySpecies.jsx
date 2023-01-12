import React from 'react'
import { useRickAndMortyContext } from '../../context/RickAndMortyContext'

const FilterBySpecies = () => {
    const {handleCheckbox}= useRickAndMortyContext()
    return (
        <>

            <div>
                <input type="checkbox" name='human' onChange={handleCheckbox}/>
                <label htmlFor="human">Human</label>

            </div>
            <div>
                <input type="checkbox" name='alien' onChange={handleCheckbox} />
                <label htmlFor="alien">Alien</label>
            </div>
            <div>
                <input type="checkbox" name='humanoid' onChange={handleCheckbox}/>
                <label htmlFor="humanoid">Humanoid</label>
            </div>
            <div>
                <input type="checkbox" name='poopybutthole' onChange={handleCheckbox} />
                <label htmlFor="poopybutthole">Poopybutthole</label>
            </div>
            <div>
                <input type="checkbox" name='robot' onChange={handleCheckbox} />
                <label htmlFor="robot">Robot</label>
            </div>

        </>
    )
}

export default FilterBySpecies