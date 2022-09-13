import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

let parallax = document.querySelector('#parallax');
let cortina = document.getElementById('cortinas-esq');
let cortinaDir = document.getElementById('cortinas-dir');
let titulo = document.getElementById('titulo');
let tituloMaior = document.getElementById('titulo-maior');
let senha = document.getElementById('password');
let icoSenha = document.getElementById('icon-senha');
let usuario = document.getElementById('user');
let icoUsuario = document.getElementById('icon-usuario');
let btnConect = document.getElementById('conect');

window.onload = initPage;

function initPage() {
  window.scroll(0, 0); 
}

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  let altura = 950 + value * 6;

  cortina.style.right = 950 + value * 6 + 'px';
  cortinaDir.style.left = 950 + value * 6 + 'px';
  titulo.style.top = 280 + value * -6 + 'px';
  tituloMaior.style.top = 380 + value * -6 + 'px';

  if (altura > 1850) {
    parallax.remove();
  }
})

btnConect.addEventListener("click", () => {
  window.scroll(0, 0);
})

senha.addEventListener("focus", myFocusFunction, true);
senha.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
  icoSenha.style.color = "red";
}

function myBlurFunction() {
  icoSenha.style.color = "#6e0101";
}

usuario.addEventListener("focus", myFocusUsu, true);
usuario.addEventListener("blur", myBlurUsu, true);

function myFocusUsu() {
  icoUsuario.style.color = "red";
}

function myBlurUsu() {
  icoUsuario.style.color = "#6e0101";
}