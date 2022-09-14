import React from 'react';
import './index.css';

const Assentos = ({ ocupada, numeroCadeira, isInvisivel, fileiraBaixo}) => (
    <a className={isInvisivel || (numeroCadeira > 10 && fileiraBaixo === true)? 'cor-cadeira assento-invi' : 'cor-cadeira'} id={ocupada ? 'cadeira-vaga' : ''} disabled={isInvisivel ? "true" : "false"}><a className='texto-cadeira'>{numeroCadeira}</a></a>
);


export default Assentos;