import React from 'react'

function FilterBreed({ handleChangeBreed, dogsAll }) {
    return (
        <>
            <label>Filter by Breed: </label>
            <select onChange={handleChangeBreed}>
                <option value='allDogs'>All Dogs</option>
                {
                    dogsAll.map(d => (
                        <option
                            value={d.name}
                            key={d.id}
                        >
                            {d.name}
                        </option>
                    ))
                }
            </select>
        </>
    )
}

export default FilterBreed;
