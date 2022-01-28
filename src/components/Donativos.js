import React, {useState ,useEffect} from 'react';
import {toast} from 'react-toastify';
import "../css/style_Contactanos.css"

const Donativos=(props) => {

    const initialStateValues={
        cantidad:'',
        numerotarjeta:'',
        clave:'',
        email:'',
        nombre:'',
        apellido:'',
        ci:'',
        direccion:'',
        ciudad:'',
        telefono:'',
        comentario:''
    };
    const [values, setValues]= useState(initialStateValues);

    const handleInputChange =(e)=>{
        const {name, value}=e.target;
        setValues({...values,[name]:value})
    };


    const validacionCantidad = str =>{
        return /^[0-9]+$/.test(str);
    }
    const validacionNumeroTarjeta = str =>{
        return /^[0-9]{16}$/.test(str);
    }
    const validacionClave = str =>{
        return /^[0-9]{3}$/.test(str);
    }
    const validacionEmail=str =>{
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(str);
    }
    const validacionNombre=str =>{
        return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(str);
    }
    const validacionApellido=str =>{
        return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(str);
    }
    const validacionCi=str =>{
        return /^\d{5,14}$/.test(str);
    }
    const validacionDireccion = str =>{
        return /^[a-zA-Z0-9_-]{4,30}$/.test(str);
    }
    const validacionCiudad =str =>{
        return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(str);
    }
    const validacionTelefono =str =>{
        return /^[0-9]+$/.test(str);
    }
    const validacionComentario=str =>{
        return /^[a-zA-ZÀ-ÿ\s]{1,200}$/.test(str);
    }

    const handleSubmit=(e) =>{
        e.preventDefault();
        if (!validacionCantidad(values.cantidad)) {
            return toast('Cantidad Incorrecta',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionNumeroTarjeta(values.numerotarjeta)) {
            return toast('Numero de Tarjeta Incorrecta',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionClave(values.clave)) {
            return toast('clave Incorrecta',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionEmail(values.email)) {
            return toast('Email Incorrecto',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionNombre(values.nombre)) {
            return toast('Nombre Incorrecto',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionApellido(values.apellido)) {
            return toast('Apellido Incorrecto',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionCi(values.ci)) {
            return toast('Número de Identificación Incorrecto',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionDireccion(values.direccion)) {
            return toast('Dirección Incorrecta',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionCiudad(values.ciudad)) {
            return toast('Ciudad Incorrecta',{
                type:'warning',
                autoClose:2000
            });
        }
        if (!validacionTelefono(values.telefono)) {
            return toast('Número de Teléfono Incorrecto',{
                type:'warning',
                autoClose:2000
            });
        }
        if(!validacionComentario(values.comentario)){
            return toast('Ingrese el Comentario Correctamente' ,{
                type:'warning',
                autoClose:2000
            })
        }
        
        props.agregarDonativo(values);
        setValues({...initialStateValues})
    };


    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className='formularioCon'>
                <div>
                    <label className='title-contatanos'>HACER UN DONATIVO AL HOGAR DE ANIMALES</label>
                    <br/><br/>
                    <p>Actos de generosidad y compromiso como el que estás a punto de realizar, permiten que en
                        El Refugio podamos seguir desarrollando nuestra labor, por lo cual te estamos muy agradecidos. De esta forma, tu aportación económica se convierte en acción directa para la protección de animales en situación de peligro.<br/>
                        Puedes pulsar en cualquiera de las cantidades preestablecidas o si prefieres donar otra cantidad distinta, puedes escribirla en la casilla de CANTIDAD.<br/>
                        Si prefieres hacer tu aportación económica a través de una oficina bancaria, puedes hacerlo en cualquier oficina del Banco Santander, en la cuenta: ES44 0049 0001 54 2210000949<br/>
                    </p>
                </div>
                <br/>
                <label>INGRESE LA CONTIDAD Y DAROS ADICIONALE:</label>
                <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">monetization_on</i>
                </div>
                <input type="text" className="form-control" placeholder="0000 Bs" name="cantidad" onChange={handleInputChange} value={values.cantidad}/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">subtitles</i>
                </div>
                <input type="text" className="form-control" placeholder="Numero de Tarjeta" name="numerotarjeta" onChange={handleInputChange} value={values.numerotarjeta}/>
                <div className="input-group-text bg-light">
                    <i className="material-icons">vpn_key</i>
                </div>
                <input type="text" className="form-control" placeholder="Clave se Seguridad" name="clave" onChange={handleInputChange} value={values.clave}/>
            </div>
            <br/>
            <label>CORREO ELECTRÓNICO:</label>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">email</i>
                </div>
                <input type="text" className="form-control" name="email" placeholder="@gmail" onChange={handleInputChange} value={values.email} />
            </div>
            <br/>
            <label>DATOS PERSONALES:</label>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">face</i>
                </div>
                <input type="text" className="form-control" name="nombre" placeholder="Nombre" onChange={handleInputChange} value={values.nombre} />
                <input type="text" className="form-control" name="apellido" placeholder="Apellidos" onChange={handleInputChange} value={values.apellido} />
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">featured_play_list</i>
                </div>
                <input type="text" className="form-control" name="ci" placeholder="C.I" onChange={handleInputChange} value={values.ci} />
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">store</i>
                </div>
                <input type="text" className="form-control" name="direccion" placeholder="Dirección" onChange={handleInputChange} value={values.direccion} />
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">account_balance</i>
                </div>
                <input type="text" className="form-control" name="ciudad" placeholder="Ciudad" onChange={handleInputChange} value={values.ciudad} />
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">call</i>
                </div>
                <input type="text" className="form-control" name="telefono" placeholder="Teléfono" onChange={handleInputChange} value={values.telefono} />
            </div>
            <br/>
            <div className="form-group">
                <textarea name="comentario" cols="10" rows="4" className="form-control" placeholder="Cometario.." onChange={handleInputChange} value={values.comentario} ></textarea>
            </div>
            <br/>
            <button className="btn btn-success btn-block">
                {props.currentId === '' ? 'Enviar': 'Enviar'}
            </button>
            </div>
            <br/><br/><br/>
        </form>
    )
};
export default Donativos;