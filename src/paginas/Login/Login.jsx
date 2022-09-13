import Cortinas from '../cortinas/Cortinas';
import Fundo from '../fundoEstatico/Fundo';
import React from 'react';
import Home from '../home/Home';

const PagesLogin = () => (
    <main className="container-principal">
        <Cortinas />
        <div className="tela-cinema" id="cinema">
            <Home />
        </div>
        <Fundo />
    </main>

);

export default PagesLogin;
