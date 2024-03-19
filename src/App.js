import { useState } from "react";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import Navbar from "./Components/Navbar";
import { Container, Grid } from "@mui/material";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  console.log(data);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}></SliderSelect>
            <TenureSelect data={data} setData={setData}></TenureSelect>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data}></Result>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
