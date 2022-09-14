import React from 'react';
import Assentos from './Assentos';
import './index.css';

const LinhaAssentos = ({ocupadas, tituloLinha, segundaLinha, fileiraBaixo, fileira}) => (
    <div className='row hidden'>
        <div className='linha-assento'>{tituloLinha}</div>
        {
        
        ocupadas.map((item, index) => (
            <Assentos ocupada={item} numeroCadeira={index+1} fileira={fileira} fileiraBaixo={fileiraBaixo} isInvisivel={(index === 0 || index === 1 || index === 10 || index === 11 ) && !segundaLinha ?true:false}/>    
        ))}
    
    </div>
);

export default LinhaAssentos;
