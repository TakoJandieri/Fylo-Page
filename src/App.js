
import './App.css';
import { useEffect } from 'react';
import Header from './Header/header';
import Content from './mainContent/mainContent';
import Footer from './footer/footer';


function App() {
  function Name(){
    useEffect(() =>{
      document.title = 'Fylo landing page';
    });
  }

  return (
    <div className="container">
      <Header/>
      <Content/>
      <Footer/>
      <Name/>
    </div>
  );
}

export default App;
