import { Grid } from '@mui/material'
import React, { useState } from 'react'
import SliderSelect from '../Doe/SliderSelect'
import Result from './Result'
import DoeDatePicker from './DoeDatePicker'

const Doe = () => {
  const [data, setData] = useState({
    vDoe: 10000,
    cC: 80,
    cD: 75,
    iR:2,
    longTerm: 0
  })

  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item xs={12} md={6}>
        <SliderSelect data={data} setData={setData} />
        <DoeDatePicker/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Result data={data}/>
      </Grid>
    </Grid >
  )
}

export default Doe