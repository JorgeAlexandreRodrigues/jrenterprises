import { Grid } from '@mui/material'
import React, { useState } from 'react'
import SliderSelect from '../Doe/SliderSelect'
import Result from './Result'
import DoeDatePicker from '../common/DoeDatePicker'

const Doe = () => {
  const [data, setData] = useState({
    vDoe: 10000,
    cC: 80,
    cD: 75,
    interestRate: 2,
    longTerm: 1
  })

  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item xs={12} md={6}>
        <SliderSelect data={data} setData={setData} />
        <DoeDatePicker data={data} setData={setData} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Result data={data} />
      </Grid>
    </Grid >
  )
}

export default Doe