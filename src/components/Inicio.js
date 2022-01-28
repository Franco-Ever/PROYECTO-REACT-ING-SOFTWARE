import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import '../css/styleInicio.css';
import imagenes from '../assets/imagenes';
import "bootstrap/dist/css/bootstrap.min.css";
import iconos from '../assets/iconos';



 const Inicio =()=>{
    return (
       <div className="container">
           <div className="carrusel">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="justify-content-center">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={imagenes.carrousel1}  alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={imagenes.carrousel2}  alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src={imagenes.carrousel3}  alt="..."/>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            </div>
            <div className="fondo-imagen">
                <div className="espacio"></div>
               <div className="container principal">
                    <div className="row" id="planes">
                        <div className="col-lg-12 text-center">
                            <div className="row">

                                <div className="col-lg-4 col-md-12 mb-4 fodo-cuadro">
                                    <div className="card-section border rounded p-3 cuadro-fondo1">
                                        <div className="card-header-first rounded pb-5 text-center">
                                            <h2 className=" texto-titulo"> ADOPTAME<iconos.pata style={{ fontSize: 40 }}/></h2>
                                            <h2 className="texto-titulo2">CAPO</h2>
                                        </div>
                                        <div className="card-body text-center">
                                            <br />
                                            <hr className="linea-1" />
                                            <img src={imagenes.dog1}/>
                                            <hr className="linea-1" />
                                            <br/>   
                                            <button className="button2" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample" type="submit">Más Información</button><br />
                                            <iconos.bajar data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ fontSize: 40 }}/>
                                        </div>
                                        <div className="collapse" id="collapseExample1">
                                            <div data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <p>Me llamo "Odisea"</p>
                                                <p>Me Gusta Jugar Con al Pelota</p>
                                                <p>Puedo Hacerte Compañia</p>
                                                <p>Me Gusta Salir a Correr</p>
                                                <p>Me Gusta Bañarme</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-4 fodo-cuadro">
                                    <div className="card-section border rounded p-3 cuadro-fondo2">
                                        <div className="card-header-second rounded pb-5 text-center">
                                            <h2 className=" texto-titulo"> ADOPTAME<iconos.pata style={{ fontSize: 40 }}/></h2>
                                            <h2 className="texto-titulo2">CHIDO</h2>
                                        </div>
                                        <div className="card-body text-center">
                                            <br />
                                            <hr className="linea-1" />
                                            <img src={imagenes.dog2}/>
                                            <hr className="linea-1" />
                                            <br/>
                                            <button className="button3" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample" type="submit">Más Información</button><br />
                                            <iconos.bajar data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ fontSize: 40 }}/>
                                        </div>
                                        <div className="collapse" id="collapseExample2">
                                            <div data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <p>Me llamo "Breil"</p>
                                                <p>Me Gusta Jugar Con al Pelota</p>
                                                <p>Puedo Hacerte Compañia</p>
                                                <p>Me Gusta Salir a Correr</p>
                                                <p>Me Gusta Bañarme</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-4 fodo-cuadro">
                                    <div className="card-section card-section-third border rounded cuadro-fondo3">
                                        <div className="card-header-third rounded pb-5 text-center">
                                            <h2 className=" texto-titulo"> ADOPTAME<iconos.pata style={{ fontSize: 40 }}/></h2>
                                            <h2 className="texto-titulo2">CRACK</h2>
                                        </div>
                                        <div className="card-body text-center">
                                            <br />
                                            <hr className="linea-1" />
                                            <img src={imagenes.dog3}/>
                                            <hr className="linea-1" />
                                            <br/>    
                                            <button className="button4" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample" type="submit">Más información</button><br />
                                            <iconos.bajar data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ fontSize: 40 }}/>
                                        </div>
                                        <div className="collapse" id="collapseExample3">
                                            <div data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <p>Me llamo "Mesena"</p>
                                                <p>Me Gusta Jugar Con al Pelota</p>
                                                <p>Puedo Hacerte Compañia</p>
                                                <p>Me Gusta Salir a Correr</p>
                                                <p>Me Gusta Bañarme</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
            <div className="container principal">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="row">

                            <div className="col-lg-4 col-md-12 mb-4 fodo-cuadro">
                                    <div className="card-section border rounded p-3 cuadro-fondo1">
                                        <div className="card-header-first rounded pb-5 text-center">
                                            <h2 className=" texto-titulo"> ADOPTAME<iconos.pata style={{ fontSize: 40 }}/></h2>
                                            <h2 className="texto-titulo2">CAPO</h2>
                                        </div>
                                        <div className="card-body text-center">
                                            <br />
                                            <hr className="linea-1" />
                                            <img src={imagenes.dog4}/>
                                            <hr className="linea-1" />
                                            <br/>   
                                            <button className="button5" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample" type="submit">Más Información</button><br />
                                            <iconos.bajar data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ fontSize: 40 }}/>
                                        </div>
                                        <div className="collapse" id="collapseExample4">
                                            <div data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <p>Me llamo "Odisea"</p>
                                                <p>Me Gusta Jugar Con al Pelota</p>
                                                <p>Puedo Hacerte Compañia</p>
                                                <p>Me Gusta Salir a Correr</p>
                                                <p>Me Gusta Bañarme</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-4 fodo-cuadro">
                                    <div className="card-section border rounded p-3 cuadro-fondo2">
                                        <div className="card-header-second rounded pb-5 text-center">
                                            <h2 className=" texto-titulo"> ADOPTAME<iconos.pata style={{ fontSize: 40 }}/></h2>
                                            <h2 className="texto-titulo2">CHIDO</h2>
                                        </div>
                                        <div className="card-body text-center">
                                            <br />
                                            <hr className="linea-1" />
                                            <img src={imagenes.dog5}/>
                                            <hr className="linea-1" />
                                            <br/>
                                            <button className="button6" data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample" type="submit">Más Información</button><br />
                                            <iconos.bajar data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ fontSize: 40 }}/>
                                        </div>
                                        <div className="collapse" id="collapseExample5">
                                            <div data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <p>Me llamo "Breil"</p>
                                                <p>Me Gusta Jugar Con al Pelota</p>
                                                <p>Puedo Hacerte Compañia</p>
                                                <p>Me Gusta Salir a Correr</p>
                                                <p>Me Gusta Bañarme</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12 mb-4 fodo-cuadro">
                                    <div className="card-section card-section-third border rounded cuadro-fondo3">
                                        <div className="card-header-third rounded pb-5 text-center">
                                            <h2 className=" texto-titulo"> ADOPTAME<iconos.pata style={{ fontSize: 40 }}/></h2>
                                            <h2 className="texto-titulo2">CRACK</h2>
                                        </div>
                                        <div className="card-body text-center">
                                            <br />
                                            <hr className="linea-1" />
                                            <img src={imagenes.adopcion1}/>
                                            <hr className="linea-1" />
                                            <br/>    
                                            <button className="button6" data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample" type="submit">Más información</button><br />
                                            <iconos.bajar data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ fontSize: 40 }}/>
                                        </div>
                                        <div className="collapse" id="collapseExample6">
                                            <div data-bs-toggle="collapse" href="#collapseExample6" role="button" aria-expanded="false" aria-controls="collapseExample">
                                                <p>Me llamo "Mesena"</p>
                                                <p>Me Gusta Jugar Con al Pelota</p>
                                                <p>Puedo Hacerte Compañia</p>
                                                <p>Me Gusta Salir a Correr</p>
                                                <p>Me Gusta Bañarme</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
               <br /><br />
            <br />
            <div className="row justify-content-center politicas">
                <div className="col-lg-10 col-md-10 col-xl-10 col-sm-10">
                <img src={imagenes.vocho1} alt="" />
                </div>
            </div>
            <br />
            <div className="row justify-content-center politicas">
                <div className="col-lg-10 col-md-10 col-xl-10 col-sm-10">
                <img src={imagenes.bannerbajo} alt="" />
                </div>
            </div>
            <br /><br /><br /><br /><br />
       </div>
       
    );
    
};


export default Inicio;
