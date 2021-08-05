import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Home from './pages/home/Home';
import TermosDeUso from './pages/others/TermosDeUso';
import SobreNos from './pages/others/SobreNos';
import ConfirmarPedido from './pages/others/ConfirmarPedido';
import Hospedagem from './pages/hospedagem/Hospedagem';
import Streaming from './pages/streaming/Streaming';
import MultiTheftAuto from './pages/mta/MultiTheftAuto';
import Minecraft from './pages/minecraft/Minecraft';
import VPS from './pages/vps/VPS';

import FooterClass from './pages/others/FooterClass';

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/hospedagem">
            <Hospedagem />
          </Route>

          <Route path="/streaming">
            <Streaming />
          </Route>

          <Route path="/mta">
            <MultiTheftAuto />
          </Route>

          <Route path="/minecraft">
            <Minecraft />
          </Route>

          <Route path="/vps">
            <VPS />
          </Route>

          {/*<Route path="/confirmar">
            <ConfirmarPedido />
          </Route>*/}

          <Route path="/sobre-nos">
            <SobreNos />
          </Route>

          <Route path="/termos-de-uso">
            <TermosDeUso />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <FooterClass /> 
      </div>
  </Router>
  );
}

export default App;
