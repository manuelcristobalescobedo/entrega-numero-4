import "./App.css";
import SeccionGaleria from "./components/SeccionGaleria";
import SeccionBusqueda from "./components/SeccionBusqueda"
import SeccionInformacion from "./components/SeccionInformacion";
import TarjetaServicio from "./components/TarjetaServicio";

function App() {

    return (
        <>
        <div className="App">
            <SeccionBusqueda/>
        </div>
        <div>
            <SeccionGaleria />
            <SeccionInformacion/>
        </div>

            <footer className="ejemplo">Pie de página</footer>
        </>
    );
}

export default App;