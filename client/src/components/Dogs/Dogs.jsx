import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
    getDogs,
    getTemperaments,
    getTemperamentFilter,
    getBreedFilter,
    getFilterCreated,
    getOrder,
    getOrderWeight,
    getBreedSearch
} from '../../redux/actions';
import SearchBreed from '../../SearchBreed/SearchBreed';
import Dog from '../Dog/Dog';
import FilterBreed from '../FilterBreed/FilterBreed';
import FilterCreate from '../FilterCreate/FilterCreate';
import FilterTemperament from '../FilterTemperament/FilterTemperament';
import Loading from '../Loading/Loading';
import Order from '../Order/Order';
import OrderWeight from '../OrderWeight/OrderWeight';
import Paginado from '../Paginado/Paginado';


const Dogs = () => {
    /* Estados Locales_____________ */
    // const [inputTemp, setinputTemp] = useState();
    const [dogsCurrent, setdogsCurrent] = useState(1);
    const [dogsPage] = useState(8);
    const [order, setOrder] = useState('')
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');

    /* Estados Redux_______________*/
    const dogsAll = useSelector(state => state.dogs);
    const temperaments = useSelector(state => state.temperamentAll);

    /* Dispatch______________ */
    const dispatch = useDispatch();


    /* Paginado__________________ */
    const lastIndex = dogsCurrent * dogsPage;//8
    const firstIndex = lastIndex - dogsPage;// 0
    const dogsRender = dogsAll.slice(firstIndex, lastIndex);

    const paged = (num) => {
        setLoading(true)
        setdogsCurrent(num)
    }



    /* Efectos Secundarios____________ */
    useEffect(() => {
        setLoading(true)
        dispatch(getDogs());
    }, [dispatch]);
    // console.log(dogsAll)

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);


    /* Handlers________________ */

    const handleChangeTemp = ({ target }) => {
        // setinputTemp(target.value)
        dispatch(getTemperamentFilter(target.value));
    }

    const handleChangeBreed = ({ target }) => {
        dispatch(getBreedFilter(target.value))
    }

    const handlerFilterCreate = ({ target }) => {
        dispatch(getFilterCreated(target.value))
    }

    const handleAscendent = ({ target }) => {
        dispatch(getOrder(target.value))
        setdogsCurrent(1)
        setOrder(`${order} Ordenado ${target.value}`)

        console.log(target.value);
    }

    const handleWeight = ({ target }) => {
        dispatch(getOrderWeight(target.value));
        setdogsCurrent(1);
        setOrder(`${order} Ordernado por peso ${target.value}`);
    }

    const handleSearch = ({ target }) => {
        setSearch(target.value);
    }

    const handleSearchBreed = (e) => {
        e.preventDefault();
        dispatch(getBreedSearch(search));
        setSearch('')
    }

    /* Loading______________________________ */
    if (loading) {
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        return (
            <Loading />
        )
    }
    else {
        return (
            /* modularizar todo lo necesario y hacer la lógica y pasarlo por props a los componentes ideales */
            <>
                {/* <Loading loading={loading} /> */}

                <h1>Titulo del Sitio</h1>
                <NavLink to='/createDog'>
                    <p>Crear Perro</p>
                </NavLink>


                <div>

                    <div>

                        <SearchBreed
                            handleSearchBreed={handleSearchBreed}
                            handleSearch={handleSearch}
                            search={search}
                        />
                    </div>

                    {/* Filtrados_____________________ */}

                    <div>
                        <FilterTemperament
                            handleChangeTemp={handleChangeTemp}
                            temperaments={temperaments}
                        />
                    </div>

                    <div>
                        <FilterBreed
                            dogsAll={dogsAll}
                            handleChangeBreed={handleChangeBreed}
                        />
                    </div>

                    <div>
                        <FilterCreate
                            handlerFilterCreate={handlerFilterCreate}
                        />
                    </div>


                    {/* Ordenamientos_____________________ */}

                    <div>
                        <label>Ordenamiento</label>
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

                {/* Renderizacion____________________ */}
                <ul>
                    {
                        dogsRender.map(d => (
                            <div key={d.id}>
                                <Dog
                                    img={d.image}
                                    name={d.name}
                                    temperament={d.temperaments[0].name || d.temperaments}
                                    weight_min={d.weight_min}
                                    weight_max={d.weight_max}
                                    id={d.id}
                                />
                            </div>
                        ))
                    }
                </ul>

                {/* Paginacion____________________ */}

                <Paginado
                    dogsAll={dogsAll.length}
                    paged={paged}
                    dogsPage={dogsPage}
                />



            </>
        )
    }

}

export default Dogs;