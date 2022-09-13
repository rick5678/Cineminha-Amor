import gambiarra from 'gambiarra';
import LinhaAssentos from 'paginas/assentos/LinhaAssentos';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tmdb from 'Tmdb';
import './index.css';

const Horarios = () => {
    const { id } = useParams();

    const [movieList, setMovieList] = useState([]);
    const [render, setRender] = useState([]);
    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I",];

    useEffect(() => {
        const Filmes = async () => {

            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }
        Filmes();
        const Gamb = async () => {

            let gam = await gambiarra.getGambiarra();
            setRender(gam);
        }
        Gamb();
    }, []);

    return (
        <main className="container-cinema">

            {render.map((item) => (

                <div className='container-horarios'>
                    <div className='poster-horarios, hidden'>
                        <img src={movieList[id - 1].img} className='poster' />
                        <h3 className='titulo-poster'>{movieList[id - 1].title}</h3>
                    </div>

                    <table className='table-horarios'>

                        <th className='th-horarios'>

                            <tr>
                                <th>Dublado</th>
                            </tr>

                            {movieList[id - 1].sessoes.map((sessao) => (
                                sessao.linguagem === 'dub'
                                    ? <tr>
                                        <td><button className='btnHorario'>{sessao.horario}</button></td>
                                    </tr>
                                    : null
                            ))}


                        </th>

                        <th className='th-horarios'>
                            <tr>
                                <th>Legendado</th>
                            </tr>
                            {movieList[id - 1].sessoes.map((sessao) => (
                                sessao.linguagem === 'leg'
                                    ? <tr>
                                        <td><button className='btnHorario'>{sessao.horario}</button></td>
                                    </tr>
                                    : null
                            ))}
                        </th>
                    </table>

                    <div className='container-assentos'>
                        {movieList[id - 1].sessoes.map((sessao, index) => (
                            <LinhaAssentos ocupadas={sessao.ocupadas.slice(index * 15, (index * 15) + 15)} tituloLinha={alfabeto[index]} segundaLinha={index == 0 ?true:false}/>
                        ))}
                        
                        <div className='row assento-invi'>a</div>
                        <div className='row assento-invi'>a</div>
                        <div className='row'>
                        <div className='linha-assento'>J</div>
                            <a className='cor-cadeira assento-invi' disabled="true"/>
                             <a className='cor-cadeira assento-invi' disabled="true"/>
                             <a className='cor-cadeira '><a className='texto-cadeira'>1</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>2</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>3</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>4</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>5</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>6</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>7</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>8</a></a>
                        </div>
                        <div className='row'>
                        <div className='linha-assento'>K</div>
                            <a className='cor-cadeira assento-invi' disabled="true"/>
                             <a className='cor-cadeira assento-invi' disabled="true"/>
                             <a className='cor-cadeira '><a className='texto-cadeira'>1</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>2</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>3</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>4</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>5</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>6</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>7</a></a>
                             <a className='cor-cadeira '><a className='texto-cadeira'>8</a></a>
                        </div>
                    </div>

                    <div className='container-comprar'>
                            <button className='botao-comprar'>Comprar ingressos</button>
                    </div>

                </div>

              

            ))}

        </main>
    )
}

export default Horarios;