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

                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="align-left" className="svg-inline--fa fa-align-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M12.83 352h262.34A12.82 12.82 0 0 0 288 339.17v-38.34A12.82 12.82 0 0 0 275.17 288H12.83A12.82 12.82 0 0 0 0 300.83v38.34A12.82 12.82 0 0 0 12.83 352zm0-256h262.34A12.82 12.82 0 0 0 288 83.17V44.83A12.82 12.82 0 0 0 275.17 32H12.83A12.82 12.82 0 0 0 0 44.83v38.34A12.82 12.82 0 0 0 12.83 96zM432 160H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg> */}

                <div className='Container_Lateral'>
                    <div className='Lateral'>
                        <NavLink className='create_dog_link' to='/createDog'>
                            <p className='FontWeight'>Create dog</p>
                        </NavLink>

                        <button className='buttom_showAllRaces' onClick={handkerShowAllRaces}>
                            Show all races
                        </button>
                        
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
