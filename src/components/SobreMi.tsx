import { navegacion } from "../utils"

export const SobreMi = () => {
  return (
    <section
        id={`${navegacion.SOBRE_MI}`}
        className="flex flex-col pt-10 mb-20 md:w-3/5 lg:w-3/6  mx-auto"
      >
        <h2 className="text-4xl font-bold mb-5">Sobre mi</h2>
        <div className="px-5 md:p-0">
          <p className="mb-0">
            Soy Tomas, tengo 19 años y soy un desarrollador Fullstack.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            ducimus qui iur.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            ducimus qui iur.
          </p>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            ducimus qui iure repellat ratione quidem est optio modi nostrum et
            asperiores.
          </p>
        </div>
      </section>
  )
}
