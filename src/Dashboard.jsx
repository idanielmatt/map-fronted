import { useState } from 'react'
import { Evento } from './Evento'
import  miseventos  from './eventos'


export const Dashboard = () => {

    const [eventos, setEventos] = useState(miseventos)


    return (
        <div className=''>
            <h1 className='text-left font-medium text-3xl my-6'>Bienvenido a Eventos SENACYT </h1>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    miseventos.map((evento, index) => (
                        <Evento 
                            key={index} 
                            coordinador={evento.coordinador} 
                            fecha={evento.fecha_inicio} 
                            descripcion={evento.descripcion}
                            hora={evento.hora_inicio}
                            titulo={evento.titulo}
                        />
                    ))
                }
            </div>
        </div>
    )
}
