import React from 'react'

function FilterBreed({ handleChangeBreed, dogsSeconds }) {
    return (
        <>
            <label className='FontWeight'>Filter by Breed: </label>
            <div className='select'>
                <select onChange={handleChangeBreed}>
                    <option value='allBreed'>All race</option>
                    {
                     dogsSeconds.length && dogsSeconds?.map(d => (
                            <option
                                value={d.name}
                                key={d.id}
                            >
                                {d.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default FilterBreed;
