import React from 'react';
import Assentos from './Assentos';
import './index.css';

const LinhaAssentos = ({ocupadas, tituloLinha, segundaLinha}) => (
    <div className='row'>
        <div className='linha-assento'>{tituloLinha}</div>
        {
        
        ocupadas.map((item, index) => (
            <Assentos ocupada={item} numeroCadeira={index+1} isInvisivel={(index == 0 || index == 1 || index == 10 || index == 11 ) && !segundaLinha ?true:false}/>
        ))}
    
    </div>
);

export default LinhaAssentos;
