import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import InvestimentCredit from "./components/InvestmentCredit/InvestimentCredit";
import Doe from "./components/Doe/Doe";
import Livrancas from "./components/Livrancas/Livrancas";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/investment-credit" element={<InvestimentCredit />} /> 
            <Route path="/doe" element={<Doe />} />
            <Route path="/livrancas" element={<Livrancas />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
