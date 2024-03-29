import { Grid } from '@mui/material'
import React, { useState } from 'react'
import SliderSelect from '../Livrancas/SliderSelect'
import CommonDatePicker from '../common/commonDatePicker'
import CommonEuribor from '../common/commonEuribor'
import Result from '../Livrancas/Result'

const Livrancas = () => {
    const [data, setData] = useState({
        amountLivranca: 10000,
        processingCommission: 60,
        spreadRate: 3,
        euribor: 6,
        longTerm: 1
    })

    return (
        <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
                <SliderSelect data={data} setData={setData} />
                <CommonEuribor data={data} setData={setData} />
                <CommonDatePicker data={data} setData={setData} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Result data={data} />
            </Grid>
        </Grid >
    )
}

export default Livrancas