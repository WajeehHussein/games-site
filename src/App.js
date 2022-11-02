import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import { Header,Footer,Container  } from './components';
import {Home} from './pages'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Container>
        {/* <Home /> */}
        <Routes>
            <Route path='/' element={<Home />}/>
        </Routes>
      </Container>
      <Footer />
    </Router>
    </>
  );
}

export default App;
