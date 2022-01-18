
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Banner from './component/Banner/Banner';
import Services from './component/Services/Services';
import About from './component/About/About';
import ChooseUs from './component/ChooseUs/ChooseUs';
import Footer from './component/Footer/Footer';
import Portfolo from './component/Portfolio/Portfolo';
import Vedio from './component/Video/Vedio';


function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Services></Services>
      <About></About>
      <ChooseUs></ChooseUs>
      <Vedio></Vedio>
      <Portfolo></Portfolo>
      <Footer></Footer>
    </div>
  );
}

export default App;
