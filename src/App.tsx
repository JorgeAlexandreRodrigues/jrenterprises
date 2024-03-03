import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from './components/Home/Home';
import InvestimentCredit from "./components/InvestmentCredit/InvestimentCredit";
import Doe from "./components/Doe/Doe";
import Livrancas from "./components/Livrancas/Livrancas";
import CurrentAccount from './components/CurrentAccount/CurrentAccount';
import MicroFactoring from './components/MicroFactoring/MicroFactoring';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/investment-credit" element={<InvestimentCredit />} />
            <Route path="/doe" element={<Doe />} />
            <Route path="/livrancas" element={<Livrancas />} />
            <Route path='/current-account' element={<CurrentAccount />} />
            <Route path='/micro-factoring' element={<MicroFactoring />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
