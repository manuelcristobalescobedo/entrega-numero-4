import "./App.css";
import SeccionServicios from "./components/SeccionServicios";
import Pie from "./components/Pie";
import SeccionBusqueda from "./components/SeccionBusqueda";
import SeccionInformacion from "./components/SeccionInformacion";
import Encabezado from "./components/Encabezado";

function App() {
    return (
        <div className="App">
            <Encabezado />
            <SeccionBusqueda/>
            <SeccionServicios />
            <SeccionInformacion/>
            <Pie />
        </div>
    );
}

export default App;