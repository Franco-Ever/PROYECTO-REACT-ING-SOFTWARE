import React, {useEffect, useState} from 'react';
import Donativos from './Donativos';
import {toast} from 'react-toastify';
import {db} from '../firebase';
import "../css/style_Contactanos.css"

const DonativosA=() => {

   
    const[currentId] = useState('');


    const agregarDonativo=async (donativoObject)=>{
        try {
            if (currentId === "") {
                await db.collection('Donativos').doc(donativoObject.email).set(donativoObject);
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
            <Donativos {...{agregarDonativo}}/>
            
        </div>

)};
export default DonativosA;