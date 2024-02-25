import { Grid } from '@mui/material'
import React, { useState } from 'react'
import SliderSelect from '../Livrancas/SliderSelect'
import DoeDatePicker from '../Doe/DoeDatePicker'
import Result from '../Livrancas/Result'

const Livrancas = () => {
  const [data, setData] = useState({
    amountLivranca: 10000,
    processingCommission: 60,
    spreadRate:3,
    longTerm: 1
  })

  return (
    <Grid container spacing={5} alignItems="center">
      <Grid item xs={12} md={6}>
        <SliderSelect data={data} setData={setData} />
        <DoeDatePicker data={data} setData={setData}/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Result data={data}/>
      </Grid>
    </Grid >
  )
}

export default Livrancas