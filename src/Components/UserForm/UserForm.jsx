import React, { useState } from 'react'
import '../../Styles/_userForm.scss'
import {useForm} from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import Lightbox from '../Lightbox/Lightbox.jsx'


const UserForm = ({comany}) => {

    const ageOptions = (min, max) => {
        let items = []
        items.push(<option  key="default" defaultValue></option>)
        for (let index = min; index <= max; index++) {
            items.push(<option key={index} value={index}>{index}</option>)
            
        }
        return items;
    }

    const {register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = (data,event) => {
        event.target.reset();

        setLightbox(true)

        setTimeout(()=>{
            setLightbox(false)
        },5000)

    }

    const [lightbox, setLightbox] = useState(false)

    return (
        <section className="section__form">
            {lightbox ? <Lightbox message='Tu información fue enviada con éxito, estaremos en contacto contigo.' /> : ''}
            <h2 className="title_h2">{comany === '' ? 'Elige una aerolinea del menú' : `Gracias por elegir "${comany}"`}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <label htmlFor="name">
                    Nombre:
                    <input 
                        name="name" 
                        placeholder="Nombre" 
                        {...register("name", {
                                required: "Escribe tu nombre"
                            })
                        }/>
                        <span className="form__error">

                            <ErrorMessage errors={errors} name="name" className="form__error"/>
                        </span>
                </label>
                <label htmlFor="email">
                    E-mail:
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        {
                            ...register("email", {
                                required: 'Introduce un email'
                            })
                        }/>
                        <span className="form__error">
                            <ErrorMessage errors={errors} name="email" className="form__error"/>
                        </span>
                </label>
                <label htmlFor="celular">
                    Celular
                    <input 
                        type="text" 
                        name="celular" 
                        placeholder="Celular" 
                        {
                            ...register("celular", {
                                required: 'Introduce tu celular'
                            })
                        }/>
                        <span className="form__error">

                            <ErrorMessage errors={errors} name="celular" className="form__error"/>
                        </span>
                </label>
                <label htmlFor="edad">
                    Edad
                    <select name="edad" {
                        ...register("edad", {
                            required: 'Selecciona tu edad'
                        })
                        }>
                     {
                         ageOptions(18,100)
                     }
                    </select>
                    <span className="form__error">

                        <ErrorMessage errors={errors} name="edad" className="form__error"/>
                    </span>
                </label>
                <button className="form__button">Enviar</button>
            </form>
        </section>
        
    )
}

export default UserForm
