function Tarjeta({ imagen, nombre, pais, descripcion }) {
  return (
    <article className="tarjeta">
      <img
        className="tarjeta__imagen"
        src={imagen}
        alt={nombre}
      />

      <div className="tarjeta__contenido">
        <h2 className="tarjeta__titulo">{nombre}</h2>
        <p><strong>País:</strong> {pais}</p>
        <p className="tarjeta__descripcion">{descripcion}</p>
      </div>
    </article>
  );
}

export default Tarjeta;