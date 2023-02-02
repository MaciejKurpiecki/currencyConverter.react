import { useState } from 'react';
import './style.css'

const Input = ({ title, inputCurrency }) => {

    const [amount, setAmount] = useState("");
    const inputAmount = ({ target }) => setAmount(target.value);

    const [currency, setCurrency] = useState("USD");
    const onSelectChange = ({ target }) => setCurrency(target.value);

    const convert = (amount, currency) => {
        const usd = 4.55;
        const eur = 4.69;
        const gbp = 5.41;
        if (amount > 0) {
            switch (currency) {
                case "USD":
                    return amount / usd;

                case "GBP":
                    return amount / gbp;

                case "EUR":
                    return amount / eur;
            };
        };
    };
    let result = convert(amount, currency);
    return (
        <>
            <fieldset className="input__fieldset">
                <legend className="input__legend">{title}</legend>
                <p>
                    <label>
                        <span
                            className="input__labelText">Wartość w {inputCurrency}:
                        </span>
                        <input
                            name="amountPln"
                            className="input__field"
                            type="number"
                            step="0.01"
                            autoFocus
                            value={amount}
                            onChange={inputAmount}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="input__labelText">Wybierz walutę:</span>
                        <select
                            name="currency"
                            className="input__field"
                            value={currency}
                            onChange={onSelectChange}
                        >
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                        </select></label>
                </p>
            </fieldset>
            <p className="input__paragraph">Twój wynik to: <strong>{result > 0 ? result.toFixed(2) : "N/A"}</strong></p>
        </>

    );
};

export default Input;