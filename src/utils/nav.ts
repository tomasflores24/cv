export const navegacion = {
    SOBRE_MI : 'sobre-mi',
    COMPETENCIAS: 'competencias',
    PROYECTOS: 'proyectos',
    CONTACTO: 'contacto'
}

export const activ = (e: any) => {
    const arr = document.querySelectorAll('#navegacion');
    const txt = e.target.textContent;

    arr.forEach((a) =>
      a.textContent === txt
        ? a.classList.add('bg-gray-900')
        : a.classList.remove('bg-gray-900')
    );
  };
