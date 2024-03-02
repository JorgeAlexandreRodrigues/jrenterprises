import { Grid } from '@mui/material'
import React, { useState } from 'react'
import SliderSelect from './SliderSelect'
import Result from './Result'

const CurrentAccount = () => {
  const [data, setData] = useState({
    plafond: 50000,
    cStructureMouting: 500,
    managementCommission: 875,
    immobilizationComission: 875,
    renewalCommission: 275
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

export default CurrentAccount