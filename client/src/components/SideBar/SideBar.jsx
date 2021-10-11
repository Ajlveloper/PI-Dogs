import React from 'react'
import SearchBreed from '../SearchBreed/SearchBreed';
import FilterBreed from '../FilterBreed/FilterBreed';
import FilterCreate from '../FilterCreate/FilterCreate';
import FilterTemperament from '../FilterTemperament/FilterTemperament';
import Order from '../Order/Order';
import OrderWeight from '../OrderWeight/OrderWeight';
import { NavLink } from 'react-router-dom';
import './SideBar.css'

const SideBar = ({ handleSearchBreed, handleSearch, search, handleChangeTemp, temperaments, dogsSeconds, handleChangeBreed, handlerFilterCreate, handleAscendent, handleWeight, handkerShowAllRaces, showNav, handleShowNav }) => {
    return (
        <>
            <div className={showNav ? 'SideBar active' : 'SideBar'}>

                <div className='Container_Lateral'>
                    <div className='Lateral'>
                        <NavLink className='create_dog_link' to='/createDog'>
                            <p className='FontWeight'>Create dog</p>
                        </NavLink>

                        <button className='buttom_showAllRaces' onClick={handkerShowAllRaces}>
                            Show all races
                        </button>

                        {/* <button className='buttom_showAllTemperaments' onClick={handkerShowAllRaces}>
                            Show all Temperaments
                        </button> */}
                        
                        <SearchBreed
                            handleSearchBreed={handleSearchBreed}
                            handleSearch={handleSearch}
                            search={search}
                        />

                        {/* Filtrados_____________________ */}



                        <div>
                            <FilterBreed
                                dogsSeconds={dogsSeconds}
                                handleChangeBreed={handleChangeBreed}
                            />
                        </div>

                        <div>
                            <FilterTemperament
                                handleChangeTemp={handleChangeTemp}
                                temperaments={temperaments}
                            />
                        </div>

                        <div>
                            <FilterCreate
                                handlerFilterCreate={handlerFilterCreate}
                            />
                        </div>


                        {/* Ordenamientos_____________________ */}

                        <div className='Box_Order'>
                            <label className='FontWeight Title_order'>Ordering:</label>
                            <div className='Flex_order'>
                                <div>
                                    <Order
                                        handleAscendent={handleAscendent}
                                    />
                                </div>

                                <div>
                                    <OrderWeight
                                        handleWeight={handleWeight}
                                    />
                                </div>
                            </div>
                        </div>
                        <button onClick={handleShowNav} className='Label_X'>X</button>
                    </div>
                </div>



            </div>
        </>
    )
}

export default SideBar;
