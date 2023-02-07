import React from 'react'
import { navegacion } from '../utils'

export const Contacto = () => {
  return (
    <section
        id={`${navegacion.CONTACTO}`}
        className="flex flex-col pt-10 mb-20 md:w-3/5 lg:w-3/6 mx-auto"
      >
        <h2 className="text-4xl font-bold mb-5">Contacto</h2>

        <p>mail@,con</p>
        <p>12312984342</p>
        <p>htppads</p>
        <p>mail@,con</p>
      </section>
  )
}
