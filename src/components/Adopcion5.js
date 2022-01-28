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

const Adopcion5 =()=>{
    return (
        <div className="container">
            <h1 className="text-center equipo-titulo">Yo puedo ser tu amigo Fiel <iconos.pata style={{ fontSize: 60 }}/></h1>
            <div className="tarjeta-equipo">
                <br />
            <h1 className="text-center fs-5">BIBIAN</h1>
            <div className=" mb-3">
            <div className="row g-0">
                <div className="col-md-6 img">
                <img src={imagenes.adopcion9} alt="..."/>
                </div>
                <div className="col-md-5">
                <div className="card-body texto-equipo">
                    <p className="card-text">Información de Animal:</p>
                    <hr/>
                    <p className="card-text">Sexo:</p>
                    <p className="card-text fw-normal">Hembra</p>
                    <p className="card-text">Edad:</p>
                    <p className="card-text fw-normal">Cachorro / Nacimiento: 09/2021</p>
                    <p className="card-text">Raza:</p>
                    <p className="card-text fw-normal">Común Europeo</p>
                    <p className="card-text">Tamaño:</p>
                    <p className="card-text fw-normal">Pequeña</p>
                    <p className="card-text">Caracter:</p>
                    <p className="card-text fw-normal">Tranquila</p>
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
export default Adopcion5;