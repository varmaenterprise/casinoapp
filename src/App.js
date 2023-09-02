import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import Centerbanner from './component/centerbanner';
import Buttonrow from './component/buttonrow';
import Twocards from './component/twocards';
import Lastbanner from './component/lastbanner';
import Review from './component/review';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/footer';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <Centerbanner/>
      <br/>
      <Buttonrow/>
      <br/>
      <Twocards/>
      <br/>
      <Lastbanner/>
      <br/>
      <Review/>
      <br/>
      <Footer/>
    </div>
  );
}

export default App;