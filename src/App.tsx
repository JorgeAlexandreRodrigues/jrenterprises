import { Container} from "@mui/material";
import Navbar from "./components/Navbar";
import InvestimentCredit from "./components/InvestmentCredit/InvestimentCredit";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <InvestimentCredit />
      </Container>
    </div>
  );
}

export default App;
