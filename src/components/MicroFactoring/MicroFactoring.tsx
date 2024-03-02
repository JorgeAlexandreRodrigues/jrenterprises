import { Grid } from '@mui/material'
import React, { useState } from 'react'
import SliderSelect from './SliderSelect'
import CommonDatePicker from '../common/commonDatePicker'
import Result from './Result'

const MicroFactoring = () => {
    const [data, setData] = useState({
        microFactoringValue: 30000,
        commissionFactoring: 300,
        debtorAnalysisCommission: 30,
        spreadRate: 3,
        longTerm: 1

    })
    return (
        <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
                <SliderSelect data={data} setData={setData} />
                <CommonDatePicker data={data} setData={setData} />
            </Grid>
            <Grid item xs={12} md={6}>
                <Result data={data} />
            </Grid>
        </Grid>
    )
}

export default MicroFactoring