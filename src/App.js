import './App.css';
import Newnavbar from './Components/Navbar/Newnavbar';
import Hero from './Components/Hero/hero';
import About from './Components/About/about'
import Services from './Components/Services/services';
import Mywork from './Components/MyWork/mywork';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Newnavbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
