import './style.css'

const Result = ({ result, currency }) => {
    return (
        <p className="result__paragraph">Twój wynik to: <strong>{result > 0 ?
            `${result.toFixed(2)} ${currency}` : "N/A"}</strong></p>
    );
}

export default Result;