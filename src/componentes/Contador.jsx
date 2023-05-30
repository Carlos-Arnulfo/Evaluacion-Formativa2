import '../estilos/Contador.css'

function Contador ({numClics}) {

    const contadorColor = numClics < 0 ? 'Contador-negativo' : numClics > 0 ? 'Contador-positivo' : '';

    return (
        <div className={`Contador ${contadorColor}`}>
            {numClics}
        </div>
    );
}

export default Contador;
