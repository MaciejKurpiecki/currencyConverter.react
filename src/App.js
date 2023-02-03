import Footer from './Footer';
import Buttons from './Buttons';
import Input from './Input';
import Form from './Form';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState("");
  const inputAmount = ({ target }) => setAmount(target.value);

  const [currency, setCurrency] = useState("USD");
  const onSelectChange = ({ target }) => setCurrency(target.value);

  let convert = (amount, currency) => {
    const usd = 4.55;
    const eur = 4.69;
    const gbp = 5.41;
    if (amount > 0) {
      // eslint-disable-next-line
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
    <main>
      <Form
        mainContent={
          <Input
            title="Przelicznik walut"
            inputCurrency="PLN"
            inputAmount={inputAmount}
            onSelectChange={onSelectChange}
            result={result}
          />}
        extraContent={<Buttons
        />}
      />
      <Footer date="20.11.2022" />
    </main>
  );
}

export default App;
