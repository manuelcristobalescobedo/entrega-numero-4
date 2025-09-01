import "./App.css";
import SeccionGaleria from "./components/SeccionGaleria";

function App() {
    return (
        <div className="App">
            <header className="ejemplo">Encabezado</header>
                <nav>
                    <a href ="buscar-todo">Buscar todo</a>
                    <a href ="hoteles">Hoteles</a>
                    <a href ="cosas-que-hacer">Cosas que hacer</a>
                    <a href ="restaurantes">Restaurantes</a>
                    <a href ="vuelos">Vuelos</a>
                </nav>

                <div id="dondeIr">
                    <h1>¿Adonde quieres ir?</h1>
                </div>

            <section className="SeccionBusqueda">Sección de búsqueda</section>
                    <input placeholder="Busca tu destino"/>
                    <button className ="botonDeBusqueda">Buscar</button>

            <SeccionGaleria />
            <section className="ejemplo">Sección de información</section>
            <footer className="ejemplo">Pie de página</footer>
        </div>
    );
}

export default App;