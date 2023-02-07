import { navegacion } from "../utils"
import ann from '../assets/ann.jpg'
export const Proyectos = () => {
  return (
    <section
        id={`${navegacion.PROYECTOS}`}
        className="flex flex-col pt-10 mb-20 md:w-3/5 lg:w-3/6 mx-auto"
      >
        <h2 className="text-4xl font-bold mb-5">Proyectos</h2>

        <article>
          <section>
            <p>countrie</p>
            <img src={ann} alt="imagen proyecto" />
          </section>
          <section>
            <p>countrie</p>
            <img src={ann} alt="imagen proyecto" />
          </section>
          <section>
            <p>countrie</p>
            <img src={ann} alt="imagen proyecto" />
          </section>
        </article>
      </section>
  )
}
