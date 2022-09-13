import React from 'react';
import './index.css';

const Assentos = ({ocupada, numeroCadeira, isInvisivel}) => ( 
    <a className={isInvisivel?'cor-cadeira assento-invi':'cor-cadeira'} id={ocupada?'cadeira-vaga':''} disabled={isInvisivel?"true":"false"}><a className='texto-cadeira'>{numeroCadeira}</a></a>
);


export default Assentos;