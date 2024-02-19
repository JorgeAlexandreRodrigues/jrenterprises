import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import SliderSelect from "./components/SliderSelect";


function App() {

  const [data, setData] = useState({
    vF: 50000,
    eM: 50000 * 0.005 <= 600 ? 600 : 50000 * 0.005,
    cG: 50000 * 0.02 <= 210 ? 210 : 50000 * 0.02,
  })
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data= {data} setData= {setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data= {data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
