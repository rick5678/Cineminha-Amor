import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import './index.css';
import StoreContext from "../../components/Store/Context";

function initialState() {
    return { user: '', password: '' };
}

function login({ user, password }) {
    if (user === 'admin' && password === 'admin') {
        return { token: '1234' };
    }
    return { error: 'Usuário ou senha inválido' };
}

const Home = () => {
    const [values, setValues] = useState(initialState);
    const { setToken } = useContext(StoreContext);
    const history = useHistory();

    function onChange(e) {
        const { value, name } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    function onSubmit(e) {
        e.preventDefault();

        const { token } = login(values);
        if (token) {
            setToken(token);
            return history.push('/bilheteria')

        }
        setValues(initialState);
    }

    return (
        <>
            <form className="inputs" onSubmit={onSubmit}>
                <div className="container-input">
                    <i className="bi bi-person-circle icon" id="icon-usuario"></i>
                    <input type="text" id="user" name="user" onChange={onChange} value={values.user}></input>
                </div>
                <div className="container-input">
                    <i className="bi bi-unlock-fill icon" id="icon-senha"></i>
                    <input type="password" id="password" name="password" onChange={onChange} value={values.password}></input>
                </div>

                <div className="botoes">
                    <div>
                        <button type="submit" className="botao-cinema-play" id="conect">
                            <i className="bi bi-play-circle-fill icon-btn"></i>
                            Conectar
                        </button>
                    </div>
                    <div>
                        <button className="botao-cinema-pause">
                            <i className="bi bi-pause-circle-fill icon-btn"></i>
                            Criar Conta
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Home;