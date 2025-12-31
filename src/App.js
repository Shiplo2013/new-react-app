import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Promo from './components/Promo';

const randNum = () => Math.floor(Math.random() * 100) + 1;

function App() {
  return (
    <div>
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
