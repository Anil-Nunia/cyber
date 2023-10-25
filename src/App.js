
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './Component/Navs';
import Gameplay from './Component/Gameplay';
import What from './Component/What';
import Crypto from './Component/Crypto';
import Team from './Component/Team';
import Faq from './Component/Faq';
import Solana from './Component/Solana';
import Ftr from './Component/Ftr';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <>
      <Navs />
      <Gameplay />
      <What />
      <Crypto />
      <Team />
      <Faq />
      <Solana />
      <Ftr />
    </>
  );
}

export default App;
