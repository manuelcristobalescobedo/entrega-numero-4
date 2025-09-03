import "./App.css";
import SeccionGaleria from "./components/SeccionGaleria";
import Pie from "./components/Pie";
import SeccionBusqueda from "./components/SeccionBusqueda";
import SeccionInformacion from "./components/SeccionInformacion";
import Encabezado from "./components/Encabezado";

function App() {
    return (
        <div className="App">
            <Encabezado />
            <SeccionBusqueda/>
            <SeccionGaleria />
            <SeccionInformacion/>
            <Pie />
        </div>
    );
}

export default App;