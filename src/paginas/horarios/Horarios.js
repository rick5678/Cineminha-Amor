import gambiarra from 'gambiarra';
import LinhaAssentos from 'paginas/assentos/LinhaAssentos';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Tmdb from 'Tmdb';
import './index.css';

const Horarios = () => {
    const { id } = useParams();

    const history = useHistory();

    const [movieList, setMovieList] = useState([]);
    const [render, setRender] = useState([]);
    const [count, setCount] = useState(-1);

    const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
    let contador = 0;
    

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

    function onClique(e) {
        return  history.push(`/bilheteria`) ;
    }

    return (
        <main className="container-cinema" >

            {render.map((item) => (

                <div className='container-horarios' >

                    <div className='poster-horarios, hidden'>
                        <img src={movieList[id - 1].img} className='poster'/>
                        <h3 className='titulo-poster'>{movieList[id - 1].title}</h3>
                        <a onClick={onClique} className='btnVoltar'><i class="bi bi-skip-backward-circle"></i></a>
                    </div>

                    <table className='table-horarios hidden' >

                        <th className='th-horarios'>

                            <tr>
                                <th>Dublado</th>
                            </tr>

                            {movieList[id - 1].sessoes.map((sessao, index) => (
                                sessao.linguagem === 'dub'
                                    ?   <tr>
                                            <td><button className='btnHorario' onClick={() => setCount(index)}>{sessao.horario}</button></td>
                                        </tr>
                                    : null
                            ))}


                        </th>

                        <th className='th-horarios'>
                            <tr>
                                <th>Legendado</th>
                            </tr>
                            {movieList[id - 1].sessoes.map((sessao, index) => (
                                sessao.linguagem === 'leg'
                                    ? <tr>
                                        <td><button className='btnHorario' onClick={() => setCount(index)}>{sessao.horario}</button></td>
                                    </tr>
                                    : null
                            ))}
                        </th>
                    </table>

                    <div className='container-assentos'>

                        {
                            alfabeto.map((element) => (
                                <>
                                    {count >= 0 ?
                                    <LinhaAssentos ocupadas={movieList[id - 1].sessoes[count].ocupadas.slice(contador * 15, (contador * 15) + 15)} tituloLinha={alfabeto[contador]} segundaLinha={contador === 0 ?true:false} fileira={element} fileiraBaixo={contador >= 9 ? true : false}/>
                                    : null}
                                    {contador++ === 8 ? <><div className='row assento-invi'>a</div><div className='row assento-invi'>a</div></> : null}
                                    
                                </>
                            ))
                        }
                        
                        
                        
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