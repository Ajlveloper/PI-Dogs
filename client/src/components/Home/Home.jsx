import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import Dog from '../Dog/Dog';
import Loading from '../Loading/Loading';
import Paginado from '../Paginado/Paginado';
import NotResults from '../NotResults/NotResults';
import Navbar from '../Navbar/Navbar';
import Menu from '../../assets/img/svg.jsx'
import SideBar from '../SideBar/SideBar';
import './Home.css'


const Home = () => {
    /* Estados Locales_____________ */
    // const [inputTemp, setinputTemp] = useState();
    const [dogsCurrent, setdogsCurrent] = useState(1);
    const [dogsPage] = useState(8);
    const [order, setOrder] = useState('')
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [showNav, setShowNav] = useState(false)

    /* Estados Redux_______________*/
    const dogsAll = useSelector(state => state.dogs);
    const temperaments = useSelector(state => state.temperamentAll);
    const dogsSeconds = useSelector(state => state.dogsSecond);

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
        const dogs = async () => {
            await dispatch(getDogs());
        }
        dogs()
    }, [dispatch]);

    useEffect(() => {
        setLoading(true)
        const temp = async () => {
            await dispatch(getTemperaments());
        }
        temp()
    }, [dispatch]);


    /* Handlers________________ */

    const handleChangeTemp = ({ target }) => {
        setLoading(true)
        console.log(target.value);
        const dog = async () => {
            await dispatch(getTemperamentFilter(target.value));
        }
        dog();
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
        const dog = async () => {
            if (search) {
                setLoading(true)
                await dispatch(getBreedSearch(search));
            } else alert('Se requieren datos')
        }
        dog();
        setSearch('')
    }

    const handkerShowAllRaces = (t) => {
        setLoading(true)
        dispatch(getDogs())
    }


    const handleShowNav = () => setShowNav(!showNav);
    console.log(showNav)

    /* Loading______________________________ */
    if (loading) {
        setTimeout(() => {
            setLoading(false)
        }, 5000);
        return (
            <Loading />
        )
    } else {
        return (
            /* modularizar todo lo necesario y hacer la lógica y pasarlo por props a los componentes ideales */
            <>
                {/* <Loading loading={loading} /> */}
                <Navbar />

                <main className='Flex_home'>
                    <div className='Flex_basis_sideBar Flex_basis '>

                        <div className={showNav ? 'svg active' : 'svg'} >
                            <button onClick={handleShowNav}>
                                <Menu />
                            </button>
                        </div>

                        <div>
                            <SideBar
                                handleSearchBreed={handleSearchBreed}
                                handleSearch={handleSearch}
                                search={search}
                                handleChangeTemp={handleChangeTemp}
                                temperaments={temperaments}
                                dogsSeconds={dogsSeconds}
                                handleChangeBreed={handleChangeBreed}
                                handlerFilterCreate={handlerFilterCreate}
                                handleAscendent={handleAscendent}
                                handleWeight={handleWeight}
                                handkerShowAllRaces={handkerShowAllRaces}
                                showNav={showNav}
                                handleShowNav={handleShowNav}
                            />
                        </div>





                    </div>

                    {/* Renderizacion____________________ */}
                    <div className='Flex_Dogs'>
                        {
                            dogsRender.length !== 0 ? dogsRender.length && dogsRender?.map(d => (
                                <div className='Flex_Dog' key={d.id}>
                                    <Dog
                                        img={d.image}
                                        name={d.name}
                                        temperament={Array.isArray(d.temperaments) ? d.temperaments.map(t => t.name).join(', ') : d.temperaments}
                                        weight_min={d.weight_min}
                                        weight_max={d.weight_max}
                                        id={d.id}
                                    />
                                </div>
                            )) :
                                // setTimeout(() => {
                                <>
                                    <NotResults />
                                </>
                            // }, 1000)


                        }
                    </div>
                </main>

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

export default Home;