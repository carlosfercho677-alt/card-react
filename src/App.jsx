
import Tarjeta from './Tarjeta';
import './App.css';

function App() {
  return (
    <main className="contenedor">
      <h1 className="titulo">Ciudades del mundo</h1>

      <section className="tarjetas">
        <Tarjeta
          imagen="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600"
          nombre="Madrid"
          pais="España"
          descripcion="La capital de España, conocida por sus plazas, museos y ambiente."
        />

        <Tarjeta
          imagen="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600"
          nombre="París"
          pais="Francia"
          descripcion="Una ciudad famosa por la Torre Eiffel y sus monumentos."
        />

        <Tarjeta
          imagen="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600"
          nombre="Londres"
          pais="Reino Unido"
          descripcion="Destaca por el Big Ben, sus autobuses y su historia."
        />

        <Tarjeta
          imagen="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600"
          nombre="Roma"
          pais="Italia"
          descripcion="Una ciudad histórica con monumentos como el Coliseo."
        />

        <Tarjeta
          imagen="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600"
          nombre="Tokio"
          pais="Japón"
          descripcion="Una gran ciudad que combina tecnología y tradición."
        />
      </section>
    </main>
  );
}

export default App;
