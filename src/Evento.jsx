import React from 'react'
import {verUbicacion} from './verUbicacion'

export const Evento = ({ titulo, descripcion, fecha, hora, coordinador }) => {
    return (
        <div className="max-w-sm mx-auto border bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200">
            <div>
                {/* Título y Coordinador */}
                <h5 className="text-left text-lg font-semibold text-gray-800 mb-2">
                    {titulo}, dirigido por
                    <span className="text-blue-600 font-medium"> {coordinador}</span>
                </h5>

                {/* Descripción */}
                <p className="text-justify text-sm text-gray-700 mb-4">
                    {descripcion}
                </p>

                <div className='flex items-center justify-between'>
                    <div>
                        {/* Día y hora del evento */}
                        <p className="text-sm text-gray-500 mb-4 text-left">
                            Día del evento: <span className="text-gray-800 font-medium">{fecha}</span>
                            <br />Hora: <span className="text-gray-800 font-medium">{hora}</span>
                            <br /><span onClick={verUbicacion}
                                className='font-medium hover:underline hover:underline-offset-3 hover:cursor-pointer'>
                                Ver ubicación
                            </span>
                        </p>
                    </div>

                    {/* Enlace */}
                    <a
                        href="#"
                        className="px-4 py-2 h-fit text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Inscribirse
                    </a>
                </div>
            </div>
        </div>

    )
}
