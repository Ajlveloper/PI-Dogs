import React from "react";
import "./Paginado.css";
import { generateId } from "../../utils";

const Paginado = ({ dogsAll, paged, dogsPage, dogsCurrent }) => {
  const getNum = [];

  for (let i = 1; i <= Math.ceil(dogsAll / dogsPage); i++) {
    getNum.push({ number: i, id: generateId() });
  }
  return (
    <footer className="footer">
      <nav>
        <ul className="flexPaged ul">
          {getNum?.map((n) => {
            return (
              <li>
                <button
                  className={dogsCurrent === n?.number ? "li active" : "li"}
                  key={n.id}
                  onClick={() => paged(n?.number)}
                >
                  {n.number}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Paginado;
