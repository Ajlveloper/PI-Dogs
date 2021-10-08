import React from 'react'

function FilterBreed({ handleChangeBreed, dogsSeconds }) {
    return (
        <>
            <label>Filter by Breed: </label>
            <select onChange={handleChangeBreed}>
                <option>filter by race</option>
                {
                    dogsSeconds.map(d => (
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
