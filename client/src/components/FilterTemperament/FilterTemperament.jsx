import React from 'react';
import { useSelector } from 'react-redux';

const FilterTemperament = ({ handleChangeTemp }) => {

    const temperaments = useSelector(state => state.temperamentAll);

    return (
        <>
            <label className='FontWeight'>Filter by temperament: </label>
            <div className='select'>
                <select onChange={handleChangeTemp}>
                    <option value='alltemperaments'>Filter only by temperament</option>
                    <option value='alltemperaments'>All Temperaments</option>
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
