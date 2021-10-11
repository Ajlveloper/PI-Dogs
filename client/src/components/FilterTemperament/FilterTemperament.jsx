import React from 'react'

const FilterTemperament = ({ handleChangeTemp, temperaments }) => {

    return (
        <>
            <label className='FontWeight'>Filter by temperament: </label>
            <div className='select'>
                <select onChange={handleChangeTemp}>
                    <option value='alltemperaments'>Filter only by temperament</option>
                    {
                        temperaments.length && temperaments?.map(t => (
                            <option
                                key={t.id}
                                value={t.name}
                            >
                                {t.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </>
    )
}

export default FilterTemperament;
