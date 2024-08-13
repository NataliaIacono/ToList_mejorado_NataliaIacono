import React from 'react';

const Input = ({ tarea, setTarea, lista, setLista }) => {
    //const [tarea, setTarea] = useState('');

    console.log(tarea);

    return (
        <div>
            <input type="text" value={tarea} placeholder="Añade aqui tu tarea" onChange={(e) => setTarea(e.target.value)} onKeyDown={() => setLista([...lista, tarea])} />
        </div>
    );
};

export default Input;
