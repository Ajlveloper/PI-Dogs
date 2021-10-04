import React from 'react'

const FilterTemperament = ({ handleChangeTemp, temperaments }) => {

    return (
        <>
            <label>Filter by temperament: </label>
            <select onChange={handleChangeTemp}>
                <option value='allTemperaments'>All Temperaments</option>
                {
                    temperaments.map(t => (
                        <option
                            key={t.id}
                            value={t.name}
                        >
                            {t.name}
                        </option>
                    ))
                }
            </select>
        </>
    )
}

export default FilterTemperament;
