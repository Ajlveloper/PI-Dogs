import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  getTemperamentFilter,
  getOrder,
  getOrderWeight,
  getBreedSearch,
} from "../../redux/actions";
import Dog from "../Dog/Dog";
import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado";
import NotResults from "../NotResults/NotResults";
import Navbar from "../Navbar/Navbar";
import Menu from "../../assets/img/svg.jsx";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
import { LoadingContext } from "../../context/LoadingContext";

const Home = () => {
  /* Estados Locales_____________ */
  const [dogsCurrent, setdogsCurrent] = useState(1);
  const [dogsPage] = useState(8);
  const [order, setOrder] = useState("");
//   const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [showNav, setShowNav] = useState(false);

  /* Estados Redux_______________*/
  const dogsAll = useSelector((state) => state.dogs);

  const dogsSeconds = useSelector((state) => state.dogsSecond);
//   const loadingRedux = useSelector((state) => state.loading);

const { loading, setLoading } = useContext(LoadingContext)

  /* filtro por temperamento adaptado a la query */
  // var t = dogsSeconds.map(t => t.temperaments).join().split(',');

  /* Dispatch______________ */
  const dispatch = useDispatch();

  /* Paginado__________________ */
  const lastIndex = dogsCurrent * dogsPage;
  const firstIndex = lastIndex - dogsPage;
  const dogsRender = dogsAll.slice(firstIndex, lastIndex);

  const paged = (num) => {
    setLoading(true);
    setdogsCurrent(num);
  };

  /* Efectos Secundarios____________ */
  useEffect(() => {
    const dogs = async () => {
      try {
        await dispatch(getDogs());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    setLoading(true);
    dogs();
  }, [dispatch, setLoading]);

  useEffect(() => {
    setLoading(true);
    const temp = async () => {
      await dispatch(getTemperaments());
    };
    temp();
  }, [dispatch, setLoading]);

  /* Handlers________________ */

  const handleChangeTemp = ({ target }) => {
    setLoading(true);
    const dog = async () => {
      await dispatch(getTemperamentFilter(target.value));
    };
    dog();
  };

  const handleAscendent = ({ target }) => {
    dispatch(getOrder(target.value));
    setdogsCurrent(1);
    setOrder(`${order} Ordenado ${target.value}`);
  };

  const handleWeight = ({ target }) => {
    dispatch(getOrderWeight(target.value));
    setdogsCurrent(1);
    setOrder(`${order} Ordernado por peso ${target.value}`);
  };

  const handleSearch = ({ target }) => {
    setSearch(target.value);
  };

  const handleSearchBreed = (e) => {
    e.preventDefault();
    const dog = async () => {
      if (search) {
        setLoading(true);
        await dispatch(getBreedSearch(search));
      } else alert("Se requieren datos");
    };
    dog();
    setSearch("");
  };

  const handkerShowAllRaces = (t) => {
    const dogs = async () => {
        try {
          await dispatch(getDogs());
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      setLoading(true);
      dogs();
  };

  const handleShowNav = () => setShowNav(!showNav);

  /* Loading______________________________ */

  return (
    /* modularizar todo lo necesario y hacer la lógica y pasarlo por props a los componentes ideales */
    loading ? (
      <Loading />
    ) : (
      <>
        {/* <Loading loading={loading} /> */}
        <Navbar />

        <main className="Flex_home">
          <div className="Flex_basis_sideBar Flex_basis ">
            <div className={showNav ? "svg active" : "svg"}>
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
                dogsSeconds={dogsSeconds}
                handleAscendent={handleAscendent}
                handleWeight={handleWeight}
                handkerShowAllRaces={handkerShowAllRaces}
                showNav={showNav}
                handleShowNav={handleShowNav}
                setdogsCurrent={setdogsCurrent}
                /* t={t} */
              />
            </div>
          </div>

          {/* Renderizacion____________________ */}
          <div className="Flex_Dogs">
            {
              dogsRender.length !== 0 ? (
                dogsRender.length &&
                dogsRender?.map((d) => (
                  <div className="Flex_Dog" key={d.id}>
                    <Dog
                      img={d.image}
                      name={d.name}
                      temperament={
                        Array.isArray(d.temperaments)
                          ? d.temperaments.map((t) => t.name).join(", ")
                          : d.temperaments
                      }
                      weight_min={d.weight_min}
                      weight_max={d.weight_max}
                      id={d.id}
                    />
                  </div>
                ))
              ) : (
                // setTimeout(() => {
                <>
                  <NotResults />
                </>
              )
              // }, 1000)
            }
          </div>
        </main>

        {/* Paginacion____________________ */}
        <Paginado
          dogsAll={dogsAll.length}
          paged={paged}
          dogsPage={dogsPage}
          dogsCurrent={dogsCurrent}
        />
      </>
    )
  );

  // if (loading) {
  //     setTimeout(() => {
  //         setLoading(false)
  //     }, 3000);
  //     return (
  //         <Loading />
  //     )
  // } else {
  //     return (
  //         /* modularizar todo lo necesario y hacer la lógica y pasarlo por props a los componentes ideales */
  //         <>
  //             {/* <Loading loading={loading} /> */}
  //             <Navbar />

  //             <main className='Flex_home'>
  //                 <div className='Flex_basis_sideBar Flex_basis '>

  //                     <div className={showNav ? 'svg active' : 'svg'} >
  //                         <button onClick={handleShowNav}>
  //                             <Menu />
  //                         </button>
  //                     </div>

  //                     <div>
  //                         <SideBar
  //                             handleSearchBreed={handleSearchBreed}
  //                             handleSearch={handleSearch}
  //                             search={search}
  //                             handleChangeTemp={handleChangeTemp}
  //                             dogsSeconds={dogsSeconds}
  //                             handleAscendent={handleAscendent}
  //                             handleWeight={handleWeight}
  //                             handkerShowAllRaces={handkerShowAllRaces}
  //                             showNav={showNav}
  //                             handleShowNav={handleShowNav}
  //                             setdogsCurrent={setdogsCurrent}
  //                             /* t={t} */
  //                         />
  //                     </div>

  //                 </div>

  //                 {/* Renderizacion____________________ */}
  //                 <div className='Flex_Dogs'>
  //                     {
  //                         dogsRender.length !== 0 ? dogsRender.length && dogsRender?.map(d => (
  //                             <div className='Flex_Dog' key={d.id}>
  //                                 <Dog
  //                                     img={d.image}
  //                                     name={d.name}
  //                                     temperament={Array.isArray(d.temperaments) ? d.temperaments.map(t => t.name).join(', ') : d.temperaments}
  //                                     weight_min={d.weight_min}
  //                                     weight_max={d.weight_max}
  //                                     id={d.id}
  //                                 />
  //                             </div>
  //                         )) :
  //                             // setTimeout(() => {
  //                             <>
  //                                 <NotResults />
  //                             </>
  //                         // }, 1000)

  //                     }
  //                 </div>
  //             </main>

  //             {/* Paginacion____________________ */}
  //             <Paginado
  //                 dogsAll={dogsAll.length}
  //                 paged={paged}
  //                 dogsPage={dogsPage}
  //                 dogsCurrent={dogsCurrent}
  //             />

  //         </>
  //     )
  // }
};

export default Home;
