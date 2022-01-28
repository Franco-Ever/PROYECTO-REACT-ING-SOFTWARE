import React, {useState} from "react";
import 'bootswatch/dist/spacelab/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import imagenes from './assets/imagenes';
import iconos from './assets/iconos';
import "bulma/css/bulma.min.css";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './components/Inicio'
import Animales from './components/Animales';
import Adopcion1 from './components/Adopcion1';
import Adopcion2 from './components/Adopcion2';
import Adopcion3 from './components/Adopcion3';
import Adopcion4 from './components/Adopcion4';
import Adopcion5 from './components/Adopcion5';
import Adopcion6 from './components/Adopcion6';
import Noticias from "./components/Noticias";
import QuienesSomos from "./components/QuienesSomos";
import Ayudanos from "./components/Ayudanos";
import ContactanosA from "./components/ContactanosA";
import DonativosA from "./components/DonativosA";
import FormularioAdopcionA from "./components/FormularioAdopcionA";



function App() {

  return (
    <Router>
      <div className="fondo-cabeza"></div>
      <div className="section-nav">
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
      <div className="navbar-brand logo">
      <Link to="/">
      <a>
        <img src={imagenes.img1} alt=".." />
      </a>
      </Link>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0  fw-bold">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Consultas
          </a>
          <ul className="dropdown-menu option" aria-labelledby="navbarDropdown">
            <li><Link to="QuienesSomos"><a className="dropdown-item">¿Quienes Somos?</a></Link></li>
            <li><Link to="Ayudanos"><a className="dropdown-item">Ayudanos</a></Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link to="Animales"><a className="dropdown-item">Adopción</a></Link></li>
          </ul>
        </li>
        <li className="nav-item ">
         <Link to="Noticias"> <a className="nav-link" href="#" tabindex="-1" aria-disabled="true"> Noticias</a></Link>
        </li>
        <li className="nav-item">
          <Link to="DonativosA"><a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Donativos</a></Link>
        </li>
        <li className="nav-item">
          <Link to="ContactanosA"><a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contactanos</a></Link>
        </li>
      </ul>
      <form className="d-flex">
        
        <button className="btn " type="submit"><iconos.facebook fontSize="large" /></button>
        <button className="btn " type="submit"><iconos.twitter fontSize="large"  /></button>
        <button className="btn " type="submit"><iconos.instagram fontSize="large"  /></button>
        
      </form>
      </div>
      </div>
      </nav>
      </div>
      <br/>
 <ToastContainer/>
  <Switch>
    <Route path="/" exact>
    <Inicio/>
    </Route>
    <Route path="/Animales">
    <Animales/>
    </Route>
    <Route path="/Adopcion1">
    <Adopcion1/>
    </Route>
    <Route path="/Adopcion2">
    <Adopcion2/>
    </Route>
    <Route path="/Adopcion3">
    <Adopcion3/>
    </Route>
    <Route path="/Adopcion4">
    <Adopcion4/>
    </Route>
    <Route path="/Adopcion5">
    <Adopcion5/>
    </Route>
    <Route path="/Adopcion6">
    <Adopcion6/>
    </Route>
    <Route path="/Noticias">
    <Noticias/>
    </Route>
    <Route path="/QuienesSomos">
    <QuienesSomos/>
    </Route>
    <Route path="/Ayudanos">
    <Ayudanos/>
    </Route>
    <Route path="/ContactanosA">
      <ContactanosA/>
    </Route>
    <Route path="/DonativosA">
      <DonativosA/>
    </Route>
    <Route path="/FormularioAdopcionA">
    <FormularioAdopcionA/>
    </Route>

    
  </Switch>
        
        
    <div className="color-footer">
      <div className="fondo-footer">
  <div id="footer">
        <div className="container">
            <div className="row">
                <div className="col md-4">
                    <p className="contacto">
                        LEGAL
                    </p>
                    <ul className="titulo-contacto">
                            <li >
                            <iconos.contrato />
                            <span className="titulo-colonia">
                            <a href="#">Contrato de Servicios</a>
                            </span>
                            </li>
                            <li>
                            <iconos.terminos/>
                            <span className="titulo-colonia">
                            <a href="#">Términos y condiciones</a>
                            </span>
                            </li>
                            <li>
                            <iconos.derechos/>
                            <span className="titulo-colonia">
                            <a href="#">Derechos y Obligaciones de Usuarios</a>
                            </span>
                            </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <p className="contacto">
                        SERVICIOS
                    </p>
                    <ul className="titulo-contacto">
                            <li >
                            <iconos.atencion/>
                            <span className="titulo-colonia">
                            <a href="#">Atención al Cliente</a>
                            </span>
                            </li>
                            <li>
                            <iconos.nosotros/>
                            <span className="titulo-colonia">
                            <a href="/QuienesSomos">Sobre Nosotros</a>
                            </span>
                            </li>
                            <li>
                            <iconos.ubicacion/>
                            <span className="titulo-colonia">
                            <a href="#">Nuestra Ubicación</a>
                            </span>
                            </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <p className="contacto">
                        CONTACTOS
                    </p>
                    <ul className="titulo-contacto">
                            <li >
                            <iconos.ubicacion/>
                            <span className="titulo-colonia">
                            Calle Esmeralda Quillacollo - Vinto
                            </span>
                            </li>
                            <li>
                            <iconos.celular/>
                            <span className="titulo-colonia">
                            000-000-00 desde tu celular
                            </span>
                            </li>
                            <li>
                            <iconos.telefono/>
                            <span className="titulo-colonia">
                            80001700025 desde un fijo
                            </span>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="fondo-footer">
        
    </div>
    <div id="pie-footer">
        <div className="col-md-12 logo-pie">
            <div>
            <a  href="#">
              <img src={imagenes.img1} alt="" />
            </a>
            </div>
            <div>
            <p className="titulo-footer">
                ©2022 Todos los derechos reservados por el creador <span className="span-subtitulo">Ever C. F. || Misael M. G. || Alejandro J. M. O.</span>
            </p>
            </div>
        </div>
    </div>
    </div>
    </div>
</Router>

  );
};

export default App;
