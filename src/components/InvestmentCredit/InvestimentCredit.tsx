import { Grid } from "@mui/material"
import { useState } from "react"
import SliderSelect from "./SliderSelect"
import Result from "./Result"

const InvestimentCredit = () => {

    const [data, setData] = useState({
        vF: 50000,
        eM: 600,
        cG: 1000
    })
    return (
        <Grid container spacing={5} alignItems='center'>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
    )
}

export default InvestimentCredit