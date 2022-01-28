import React from "react"
import imagenes from "../assets/imagenes";
import '../css/style_QuienesSomos.css'

 const QuienesSomos =()=>{
    return (
        <div className="container">
            <div className="card-tamano">
            <div className="card tarjeta">
            <br/><br/>
                <img src={imagenes.cobertura}className="rounded mx-auto d-block" alt="..."/>
                <br/>
                <div className="card-body">
                    <p className="txt_cobertura_ciudades">Somos una organización protectora de animales especializada, desde 1996, en la ayuda a perros y gatos maltratados y/o abandonados; una organización española totalmente independiente que no recibe subvenciones de organismos oficiales, empresas ni partidos políticos. <br/>
                        Las cuotas de nuestros socios y las donaciones de nuestros simpatizantes permiten que nuestra labor sea sostenible y preservan nuestra libertad de acción.<br/>
                        Contamos con un centro veterinario en Madrid abierto al público, que destina sus ingresos íntegramente al cuidado de los animales abandonados, y un centro de acogida en El Espinar (Segovia).<br/>
                        Nuestro campo de acción se divide en “directa” y “divulgativa”.<br/>
                        La acción directa engloba tanto rescates de animales víctimas de maltrato y abandono, como el emprendimiento de acciones legales contra los autores de los delitos.<br/>
                        Todos los animales que acogemos reciben la debida atención veterinaria (analíticas, tratamientos, cirugías, etc.) y son identificados y esterilizados antes de emprender la búsqueda de adoptantes comprometidos a proporcionarles una vida sana y feliz.<br/>
                        Defendemos el “sacrificio cero”. Esto significa que establecemos una línea muy clara entre “el sacrificio” y “la eutanasia”. Nunca sacrificamos cachorros recién nacidos, ni animales cojos, ciegos, sordos o con enfermedades crónicas que sean tratables. Exclusivamente en caso de enfermedad en fase terminal que produzca un sufrimiento irreversible, se recurre a la eutanasia con toda la dignidad, el respeto y el amor que ellos merecen.<br/>
                        La acción divulgativa promueve campañas en diferentes medios de comunicación con el claro objetivo de educar a la sociedad en el respeto hacia los animales y los derechos que tienen a disfrutar de una vida digna y saludable.<br/>
                        También reclamamos una serie de derechos básicos para las personas responsables de perros y gatos, como el libre acceso a espacios públicos (transportes, comercios, museos, parques, playas…) a la vez que defendemos firmemente la tenencia responsable de animales.<br/>
                        Entrando en elrefugiotv.org puedes conocer nuestras acciones. Si después de hacerlo piensas que merece la pena apoyar nuestra labor, hazte socio de El Refugio y cada vez más animales podrán agradecértelo.<br/>
                    </p>
                </div>
            </div>
            </div>
            <br /><br /><br /><br /><br />
        </div>
        
    )
    
    
};


export default QuienesSomos;