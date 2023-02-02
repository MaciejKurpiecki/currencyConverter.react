import Footer from './Footer';
import Buttons from './Buttons';
import Input from './Input';
import Form from './Form';

function App() {
  return (
    <main>
      <Form
        mainContent={
          <Input
            title="Przelicznik walut"
            inputCurrency="PLN"
          />}
        extraContent={<Buttons />}
      />
      <Footer date="20.11.2022" />
    </main>
  );
}

export default App;
