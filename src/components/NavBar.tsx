import { activ, navegacion } from '../utils';

export const NavBar = () => {
  const num = 1;

  return (
    <nav className="bg-gray-800 flex items-center flex-col md:flex-row md:justify-between md:sticky md:top-0 z-10">
      <a
        id="navegacion"
        onClick={activ}
        href={`#${navegacion.SOBRE_MI}`}
        className="py-1 mb-1 w-full text-center hover:bg-gray-900 md:w-auto px-2 md:rounded active:bg-gray-700"
      >
        Tomas Flores
      </a>

      <div className="md:w-2/3 ml-aut flex flex-col md:flex text-center md:ml-auto md:justify-between w-full md:flex-row">
        <a
          onClick={activ}
          id="navegacion"
          className="py-1 w-full hover:bg-gray-900 md:w-auto px-2 md:rounded active:bg-gray-700"
          href={`#${navegacion.COMPETENCIAS}`}
        >
          Competencias
        </a>
        <a
          onClick={activ}
          id="navegacion"
          className="py-1 w-full hover:bg-gray-900 md:w-auto px-2 md:rounded active:bg-gray-700"
          href={`#${navegacion.PROYECTOS}`}
        >
          Proyectos
        </a>
        <a
          onClick={activ}
          id="navegacion"
          className="py-1 w-full hover:bg-gray-900 md:w-auto px-2 md:rounded active:bg-gray-700"
          href={`#${navegacion.SOBRE_MI}`}
        >
          Acerca de
        </a>
        <a
          onClick={activ}
          id="navegacion"
          className="py-1 w-full hover:bg-gray-900 md:w-auto px-2 md:rounded active:bg-gray-700"
          href={`#${navegacion.CONTACTO}`}
        >
          Contacto
        </a>
      </div>
    </nav>
  );
};
