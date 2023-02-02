import Footer from './Footer';
import Buttons from './Buttons';

function App() {
  return (
    <main>
      <form className="form">
        <fieldset className="form__fieldset">
          <legend className="form__legend">Przelicznik walut</legend>
          <p>
            <label>
              <span className="form__labelText">Wartość w PLN:</span>
              <input name="amountPln" className="form__field" type="number" step="0.01" autoFocus />

            </label>
          </p>
          <p>
            <label><span className="form__labelText">Wybierz walutę:</span>
              <select name="currency" className="form__field">
                <option value="USD">USD</option>
                <option value="EUR">EURO</option>
                <option value="GBP">GBP</option>
              </select></label>
          </p>
        </fieldset>
        <p className="form__paragraph">Twój wynik to: <strong>N/A</strong></p>
        <Buttons/>
      </form>
      <Footer date="20.11.2022" />
    </main>
  );
}

export default App;
