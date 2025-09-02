import "./App.css";
import SeccionGaleria from "./components/SeccionGaleria";
import Pie from "./components/Pie";
import SeccionBusqueda from "./components/SeccionBusqueda";
import SeccionInformacion from "./components/SeccionInformacion";

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

            <Pie />
        </>
    );
}

export default App;