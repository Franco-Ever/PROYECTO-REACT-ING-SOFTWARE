import React, {useEffect, useState} from 'react';
import FormularioAdopcion from './FormularioAdopcion';
import {toast} from 'react-toastify';
import {db} from '../firebase';
import  "../css/style_Contactanos.css"

const FormularioAdopcionA=() => {

   
    const[currentId] = useState('');


    const agregarAdopcion=async (AdopcionObject)=>{
        try {
            if (currentId === "") {
                await db.collection('Adopcion').doc(AdopcionObject.email).set(AdopcionObject);
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
            <FormularioAdopcion {...{agregarAdopcion}}/>
            
        </div>

)};
export default FormularioAdopcionA;