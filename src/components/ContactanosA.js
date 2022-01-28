import React, {useEffect, useState} from 'react';
import Contactanos from './Contactanos';
import {toast} from 'react-toastify';
import {db} from '../firebase';
import "../css/style_Contactanos.css"

const ContactanosA=() => {

   
    const[currentId] = useState('');


    const agregarContacto=async (ContactoObject)=>{
        try {
            if (currentId === ""){
                await db.collection('Contactanos').doc(ContactoObject.email).set(ContactoObject);
                toast('Enviado Correctamente',{
                    type:'success'
                    });
            };
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="col-md p-2">
            <label className='titulo-contac'>Ingrese su Información</label>
            <br/>
            <Contactanos {...{agregarContacto}}/>
            
        </div>

)};
export default ContactanosA;