import React, { useState } from 'react';

const ListaDeTareas = ({ lista }) => {
    //const [lista, setLista] = useState([]);

    // setLista([...lista, tarea]);

    return (
        <div>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDeTareas;
