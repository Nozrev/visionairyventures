import './App.css';
import WhyUs from './component/WhyUs/WhyUs';
import ContactComp from './component/contactcomp/ContactComp';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import Offers from './component/offers/Offers';
import Reasons from './component/reasons/Reasons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Reasons />
      <Offers />
      <WhyUs />
      <ContactComp />
      <Footer />
    </div>
  );
}

export default App;
