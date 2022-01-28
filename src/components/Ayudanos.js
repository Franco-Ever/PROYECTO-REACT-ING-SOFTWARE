import React from "react"
import imagenes from "../assets/imagenes";
import '../css/style_Ayudanos.css'

 const Ayudanos =()=>{
    return (
        <div className="container">
            <div className="card-tamano">
                <label>Si quieres ayudarnos de forma activa, hay varias cosas que puedes hacer:</label>
                <br/> <br/>
            <div className="card v">
                <div className="card-body target">
                <img src={imagenes.imgtarget} className="rounded mx-auto d-block img1" alt="..."/>
                
                    <p className="txt_cobertura_ciudades">
                    <label className="target-title1">Adopta</label> <br/>
                    Si quieres adoptar a un perro o un gato, aquí puedes concoer al que será tu mejor compañero durante mcuhso años.
                    </p>
                </div>
            </div>
            <br/>
            <div className="card target">
                <div className="card-body target">
                <img src={imagenes.imgtarget2} className="rounded mx-auto d-block img1" alt="..."/>
                
                    <p className="txt_cobertura_ciudades">
                    <label className="target-title1">Acoge</label> <br/>
                    También puedes ser casa de acogida. Cuando rescatamos camadas de cachorros recien nacidos, necesitamos voluntarios..
                    </p>
                </div>
            </div>
            <br/>
            <div className="card target">
                <div className="card-body target">
                <img src={imagenes.imgtarget3} className="rounded mx-auto d-block img1" alt="..."/>
                
                    <p className="txt_cobertura_ciudades">
                    <label className="target-title1">CiberVoluntario</label> <br/>
                    Es tan sencillo como seguir nuestras acciones en las redes sociles y compartilar para que mas gente sepa de nosotros ..
                    </p>
                </div>
            </div>
            <br/>
            <div className="card target">
                <div className="card-body target">
                <img src={imagenes.imgtarget4} className="rounded mx-auto d-block img1" alt="..."/>
                
                    <p className="txt_cobertura_ciudades">
                    <label className="target-title1">Hazte Socio</label> <br/>
                    Agradecemos profundamente la ayuda. Todos lo que formamos parte de El Hogar de Animales te damos la bienvenida
                    </p>
                </div>
            </div>
            <br/>
            <div className="card target">
                <div className="card-body target">
                <img src={imagenes.imgtarget5} className="rounded mx-auto d-block img1" alt="..."/>
                
                    <p className="txt_cobertura_ciudades">
                    <label className="target-title1">Donación</label> <br/>
                    Actos de generosidad y compromiso como el que estas apunto de ralizar, permite que El Hogar de animales siga adelante.
                    </p>
                </div>
            </div>
            <br/>
            </div>
            <br /><br /><br />
        </div>
        
    )
    
    
};


export default Ayudanos;