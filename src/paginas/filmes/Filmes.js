import Cartazes from 'paginas/cartazes/Cartazes';
import React, { useEffect, useState } from 'react';
import Tmdb from 'Tmdb';
import './index.css';

export default () => {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const Filmes = async () => {

            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }
        Filmes();
    }, []);
        return (
            <div className='conteiner-cartazes hidden'>
                <h3 className='filmes-disp'>Filmes disponiveis</h3>
                {movieList.map((item, key) => (
                    <Cartazes key={key} id={item.id} img={item.img}/>
                ))}
            </div>
        )
    }

