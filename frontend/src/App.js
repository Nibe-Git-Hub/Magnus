import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/home' element={<HomeScreen />} />
            <Route path='/about' element ={<AboutScreen />} />
            <Route path='/contact' element ={<ContactScreen />} />
          </Routes>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
