import Header from './components/header.js'
import Footer from './components/footer.js'
import MainSection from './components/mainSection.js';
import './sass/main.css';


function App() {
  return (
      <div className='body'>
        <Header/>
        <MainSection/>
        <Footer/>
      </div>
  );
}

export default App;
