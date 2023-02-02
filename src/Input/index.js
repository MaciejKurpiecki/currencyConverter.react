import './style.css'

const Input = () => (
    <>
        <fieldset className="input__fieldset">
            <legend className="input__legend">Przelicznik walut</legend>
            <p>
                <label>
                    <span className="input__labelText">Wartość w PLN:</span>
                    <input
                        name="amountPln"
                        className="input__field"
                        type="number"
                        step="0.01"
                        autoFocus />
                </label>
            </p>
            <p>
                <label>
                    <span className="input__labelText">Wybierz walutę:</span>
                    <select name="currency" className="input__field">
                        <option value="USD">USD</option>
                        <option value="EUR">EURO</option>
                        <option value="GBP">GBP</option>
                    </select></label>
            </p>
        </fieldset>
        <p className="input__paragraph">Twój wynik to: <strong>N/A</strong></p>
    </>
);

export default Input;