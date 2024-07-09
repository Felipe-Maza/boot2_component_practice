import PropTypes from 'prop-types';

export const Mycomponet = ( {name} ) => {

    const student = {
        name: "Felipe",
        lastName:"Marino",
        mobile: "30000000",
        linkedint: "htttps://www.linkedin.com/felipe"
    };

  return (
    <div>
        <hr />
        <h4>Este es mi primer componente</h4>
        <p>Curso de React</p>
        <p>Mi nombre es: <strong>{name}</strong></p>
        <ul>
            <li>Componentes</li>
            <li>Eventos</li>
            <li>Estados - Hooks</li>
            <li>Comunicacion</li>

        </ul>
        <p>Estudiante: <strong>{student.lastName}</strong></p>
        <ul>
            <li>Movil: {student.mobile}</li>
            <li>linkedin: {student.linkedint}</li>
        </ul>
    </div>
  )
}

Mycomponet.propTypes = {
    name: PropTypes.string
}