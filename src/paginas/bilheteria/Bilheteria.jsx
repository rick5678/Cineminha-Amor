import Filmes from 'paginas/filmes/Filmes';
import React from 'react';
import './index.css';

const PagesLogin = (list) => (
    <main className="container-cinema">
        <div className='cineminha'>
            <Filmes/>
        </div>
        <div id='fundo'>
            <div className="luz-escura-menor"></div>
        </div>
    </main>

);

export default PagesLogin;
