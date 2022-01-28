import React from "react"
import imagenes from "../assets/imagenes";
import '../css/styleAnimales.css'
import iconos from '../assets/iconos';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    NavLink
  } from "react-router-dom";
import '../App.js'

const Animales =()=>{
    return (
                <div className="container">
            <div className="texto-cabeza">
                <h1>Elige a tu compañero</h1>
            </div>
            <div className="row fondo-equipo">
            <div className="col-sm-3">
                <br /><br />
                <div className="tarjeta-Animal">
                <div className="card-body">
                    <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion1} alt="..." />
                    <p className="card-text">IZAN</p>
                    <Link to="Adopcion1"><button className="btn-informacion">Más Información</button></Link>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
            <br /><br />
            <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion2} alt="..." />
                    <p className="card-text">BAMBAM</p>
                    <Link to="Adopcion2"><button className="btn-informacion">Más Información</button></Link>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <br /><br />
                <div className="tarjeta-Animal">
                <div className="card-body">
                    <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion3} alt="..." />
                    <p className="card-text">PHUKET</p>
                    <Link to="Adopcion3"><button className="btn-informacion">Más Información</button></Link>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <br /><br />
                <div className="tarjeta-Animal">
                <div className="card-body">
                    <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion4} alt="..." />
                    <p className="card-text">SAMBINHA</p>
                    <Link to="Adopcion4"><button className="btn-informacion">Más Información</button></Link>
                </div>
                </div>
            </div>
            </div>
            <br />

            <div className="row fondo-equipo">
            <div className="col-sm-3">
                <br /><br />
                <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion5} alt="..." />
                    <p className="card-text">MEX</p>
                    <button className="btn-informacion">Más Información</button>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
            <br /><br />
            <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion6} alt="..." />
                    <p className="card-text">MESENA</p>
                    <button className="btn-informacion">Más Información</button>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
            <br /><br />
            <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion7} alt="..." />
                    <p className="card-text">MAC ALAN</p>
                    <button className="btn-informacion">Más Información</button>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
            <br /><br />
            <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion8} alt="..." />
                    <p className="card-text">RUCHA</p>
                    <button className="btn-informacion">Más Información</button>
                </div>
                </div>
            </div>
            </div>
            <br />

            <div className="row fondo-equipo">
            <div className="col-sm-3">
                <br /><br />
                <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion9} alt="..." />
                    <p className="card-text">BIBIAN</p>
                    <Link to="Adopcion5"><button className="btn-informacion">Más Información</button></Link>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <br /><br />
                <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion10} alt="..." />
                    <p className="card-text">CHÉKERE</p>
                    <Link to="Adopcion6"><button className="btn-informacion">Más Información</button></Link>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <br /><br />
                <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion11} alt="..." />
                    <p className="card-text">ENEKO</p>
                    <button className="btn-informacion">Más Información</button>
                </div>
                </div>
            </div>
            <div className="col-sm-3">
                <br /><br />
                <div className="tarjeta-Animal">
                <div className="card-body">
                <h5 className="card-title">ADOPTAME <iconos.pata style={{ fontSize: 20 }}/></h5>
                    <img src={imagenes.adopcion12} alt="..." />
                    <p className="card-text">CHESTER</p>
                    <button className="btn-informacion">Más Información</button>
                </div>
                </div>
            </div>
            </div>
            <br />
        </div>
            
    );
};
export default Animales;