
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from '../components/Store/Provider';
import RoutesPrivate from '../components/Routes/Private/Private'
import Login from './Login/Login'
import Bilheteria from './bilheteria/Bilheteria.jsx';
import Tmdb from 'Tmdb';
import Horarios from './horarios/Horarios';

export default () => {
  const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        const Filmes = async () => {

            let list = await Tmdb.getHomeList();
            setMovieList(list);
        }
        Filmes();
    }, []);

  return(
    <Router>
      <StoreProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <RoutesPrivate path="/bilheteria" component={Bilheteria}/>
          <RoutesPrivate path="/:id" component={Horarios} />
        </Switch>
      </StoreProvider>
    </Router>
  )
}

