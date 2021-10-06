import React from 'react'

const SearchBreed = ({ handleSearchBreed, handleSearch, search }) => {
    // const [search, setSearch] = useState('');
    
    return (
        <>
            <form onSubmit={handleSearchBreed}>
                <label>Busqueda por raza</label>
                <input
                    type="text"
                    placeholder='Busqueda de Raza'
                    value={search}
                    onChange={handleSearch}
                />
                <button type='submit'>Buscar</button>
            </form>
        </>
    )
}

export default SearchBreed
