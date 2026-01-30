import './App.css';
import CalculatorApp from './CalculatorApp/CalculatorApp';
import Button from './components/Button';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import InputWithUseRef from './components/InputWithUseRef';
import Nav from './components/Nav';
import Promo from './components/Promo';
import PropDrilling from './components/PropDrilling';
import SignUpform from './components/SignUpForm';
import ToDoList from './components/ToDoList';

const randNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
  return (
    <div>
      <SignUpform />
      <ToDoList />
      <CalculatorApp />
      <PropDrilling msg="I passed through the PropDrilling, Header and the Wrapper and I reached the Button component." />
      <InputWithUseRef />
      <InputComponent />
      <Button />
      <Card num={randNum()} />
      <Card num={randNum()} />
      <Card num={randNum()} />
      <Header />
      <Nav />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
