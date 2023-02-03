// import { useState } from 'react';
import './style.css'

const Input = ({ title, inputCurrency, amount, inputAmount, currency, onSelectChange }) => {

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
        </>

    );
};

export default Input;