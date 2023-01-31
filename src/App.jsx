import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import './styles/_main.scss'
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  
  // STATE FOR VISIBILITY CONTROL
  const [isVisible, setIsVisible] = useState(false);

  // LOAD PAGE VISIBILITY FUNCTION
  useEffect(() => {
    setInterval(() => {
      setIsVisible(true);
    }, 3000);
  }, []);

  return (
    <div className={`app ${isVisible  ? 'app-visible' : ''}`}>
      <Nav />
      <Header />
      <Main isVisible={isVisible}/>
      <Footer />
    </div>
  )
}

export default App
