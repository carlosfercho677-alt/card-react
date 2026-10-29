
import "../style/Testimonio.css";
const imagenes = import.meta.glob('../assets/*.png',
   { eager: true, import: 'default'

    });

function Testimonio(props) {
  return (
//un elemento funcional nos va a retornar JSX
//para asignar una clase de CSS es con className

//contenedor principal
//las imagenes son "self closing tag", solo hay que ponerle el /

    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'

        src={imagenes[`../assets/${props.imagen}.png`]}
         alt={`Foto de ${props.nombre}`}
         />

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
           <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='texto-testimonio'>
           "{props.testimonio}"
        </p>
      </div>
    </div>
    );
}

export default Testimonio;