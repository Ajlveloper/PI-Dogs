import React from 'react'

const SearchBreed = ({ handleSearchBreed, handleSearch, search }) => {
    // const [search, setSearch] = useState('');

    return (
        <>
            <form onSubmit={handleSearchBreed}>
                <label className='FontWeight'>Search by race:</label>
                <div className='text_box'>
                    <input
                        type="text"
                        placeholder='Race search'
                        value={search}
                        onChange={handleSearch}
                    />
                </div>
                <button className='button_search' type='submit'>Search for</button>
            </form>
        </>
    )
}

export default SearchBreed
