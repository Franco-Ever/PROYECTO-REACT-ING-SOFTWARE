import React, {useState ,useEffect} from 'react';
import {toast} from 'react-toastify';
import  "../css/style_Contactanos.css"

const Contactanos=(props) => {

    const initialStateValues={
        nombre:'',
        email:'',
        mensaje:''
    };
    const [values, setValues]= useState(initialStateValues);

    const handleInputChange =(e)=>{
        const {name, value}=e.target;
        setValues({...values,[name]:value})
    };


    const validacionEmail=str =>{
        return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(str);
    }
    const validacionNombre=str =>{
        return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(str);
    }
    const validacionMensaje=str =>{
        return /^[a-zA-ZÀ-ÿ\s]{1,200}$/.test(str);
    }
    

    const handleSubmit=(e) =>{
        e.preventDefault();
        if (!validacionNombre(values.nombre)) {
            return toast('Nombre Incorrecto',{
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
        if (!validacionMensaje(values.mensaje)) {
            return toast('Mensaje Incorrecto',{
                type:'warning',
                autoClose:2000
            });
        }
        
        
        props.agregarContacto(values);
        setValues({...initialStateValues})
    };
    


    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className='formularioCon'>
                <div>
                    <label className='title-contatanos'>CONTACTA CON NOSOTROS</label>
                    <br/><br/>
                    <p>Hemos habilitado un sistema de grabación de mensajes por voz que nos permite dar respuesta al 100% de vuestras llamadas.<br/>
                        Puedes contactarnos en el teléfono 917 30 36 80,
                        los 365 días del año, 24 horas al día.<br/>
                        Cuéntanos brevemente cómo podemos ayudarte y déjanos un teléfono de contacto.
                        Nosotros te llamamos en un corto plazo de tiempo.<br/>
                        También puedes contactarnos a través de correo electrónico para contarnos lo que necesites, o enviarnos información sobre casos de maltrato o abandono, escribiendo a: escribe@elrefugio.org
                    </p>
                </div>
                <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">face</i>
                </div>
                <input type="text" className="form-control" placeholder="Nombre Completo" name="nombre" onChange={handleInputChange} value={values.nombre}/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                    <i className="material-icons">email</i>
                </div>
                <input type="text" className="form-control" name="email" placeholder="@gmail" onChange={handleInputChange} value={values.email} />
            </div>
            <br/>
            <div className="form-group">
                <textarea name="mensaje" cols="10" rows="4" className="form-control" placeholder="Mensaje....." onChange={handleInputChange} value={values.mensaje} ></textarea>
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
export default Contactanos;