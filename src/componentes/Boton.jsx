import '../estilos/Boton.css'

function Boton ({texto, tipoBoton}) {

    return (
        <button className="Boton" 
        onClick={tipoBoton}>
            {texto}          
        </button>       
    );
}

export default Boton;