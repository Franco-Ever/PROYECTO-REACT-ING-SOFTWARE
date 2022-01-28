import React from "react";
import imagenes from "../assets/imagenes";
import '../css/styleAdopciones.css';
import iconos from '../assets/iconos';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    NavLink
  } from "react-router-dom";

const Adopcion1 =()=>{
    return (
        <div className="container">
            <h1 className="text-center equipo-titulo">Yo puedo ser tu amigo Fiel <iconos.pata style={{ fontSize: 60 }}/></h1>
            <div className="tarjeta-equipo">
                <br />
            <h1 className="text-center fs-5">SHEILA</h1>
            <div className=" mb-3">
            <div className="row g-0">
                <div className="col-md-6 img">
                <img src={imagenes.adopcion1} alt="..."/>
                </div>
                <div className="col-md-5">
                <div className="card-body texto-equipo">
                    <p className="card-text">Información de Animal:</p>
                    <hr/>
                    <p className="card-text">Sexo:</p>
                    <p className="card-text fw-normal">Hembra</p>
                    <p className="card-text">Edad:</p>
                    <p className="card-text fw-normal">Adulto/Nacimiento:01//2011</p>
                    <p className="card-text">Raza:</p>
                    <p className="card-text fw-normal">Maztín</p>
                    <p className="card-text">Tamaño:</p>
                    <p className="card-text fw-normal">Grande</p>
                    <p className="card-text">Caracter:</p>
                    <p className="card-text fw-normal">Activa</p>
                    <hr/>
                </div>
                
                </div><br />
            </div>
            </div>
            <Link to="/FormularioAdopcionA"><a className="btn button-7">Continuar</a></Link>
            <Link to="/Animales"><a className="btn button-8">Regresar</a></Link>
                
                <br />
                <br />
            </div>
            <br />
            <br />
            
        </div>
    );
};
export default Adopcion1;