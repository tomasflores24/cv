import { Competencias, Contacto, Proyectos, Inicio } from '../components/';
const Main = () => {
  return (
    <main>
      <Inicio />
      <br />
      <hr />
      <br />
      <Competencias />
      <br />
      <hr />
      <br />
      <Proyectos />
      <br />
      <hr />
      <br />
      <Contacto />
    </main>
  );
};

export default Main;
