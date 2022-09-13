import React from "react";
import './index.css';

const Sala = () => {
    return (
        <>
            <div className="raio">
                <div className="parte-um"></div>
                <div className="parte-dois"></div>
                <div className="parte-tres">
                    <div className="canto-direito"></div>
                    <div className="canto-esquerdo"></div>
                </div>
            </div>
            <div className="sala">
                <div>
                    <span className="sala-front"></span>
                    <span className="sala-right" id="direita"></span>
                    <span className="sala-back"></span>
                    <span className="sala-baixo"></span>
                </div>
            </div>
            <div className="cubo">
                <div>
                    <span className="cubo-a"></span>
                    <span className="cubo-b"></span>
                    <span className="cubo-c"></span>
                    <span className="cubo-d"></span>
                </div>
            </div>
            <div className="container-pilar">
                <div>
                    <div className="topo-pilar">
                        <div>
                            <span className="topo-pilar-a"></span>
                            <span className="topo-pilar-b"></span>
                            <span className="topo-pilar-c"></span>
                            <span className="topo-pilar-d"></span>
                        </div>
                    </div>
                    <div className="pilar">
                        <div>
                            <span className="pilar-a"></span>
                            <span className="pilar-b"></span>
                            <span className="pilar-c"></span>
                            <span className="pilar-d"></span>
                        </div>
                    </div>
                    <div className="bottom-pilar">
                        <div>
                            <span className="bottom-pilar-a"></span>
                            <span className="bottom-pilar-b"></span>
                            <span className="bottom-pilar-c"></span>
                            <span className="bottom-pilar-d"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-textos">
                <div className="linha-texto">
                    <p> Oi galera não sei o que por aqui</p>
                </div>
                <div className="linha-texto-a">
                    <p> Oi galera não sei o que por aqui</p>
                </div>

            </div>
        </>
    )
}

export default Sala;

