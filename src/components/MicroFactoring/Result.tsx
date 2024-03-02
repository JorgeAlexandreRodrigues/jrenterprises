import { Stack, Typography } from '@mui/material'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.register(ArcElement, Tooltip, Legend);

interface ResultProps {
    data: {
        microFactoringValue: number;
        commissionFactoring: number;
        debtorAnalysisCommission: number;
        spreadRate: number;
        longTerm: number;
        // Add other properties if necessary
    };
}

const Result: React.FC<ResultProps> = ({ data }) => {
    const { microFactoringValue, debtorAnalysisCommission, commissionFactoring, spreadRate, longTerm } = data;
    let commissionFactoringFinal = Math.max(microFactoringValue * 0.01, 200);
    let commissionFactoringReduction = (1 - (data.commissionFactoring / commissionFactoringFinal)) * 100;
    let dailyInterestRate = (data.spreadRate / 365) / 100;
    let totalInterest = (microFactoringValue * dailyInterestRate) * data.longTerm;
    let totalPricing = commissionFactoringFinal + debtorAnalysisCommission + totalInterest;
    let totalReduce = data.commissionFactoring + debtorAnalysisCommission + totalInterest;

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };

    const labels = ['Comissão Processamento', 'Comissão Análise Devedor', "Juros", 'Total'];

    const verticalBarsdata = {
        labels,
        datasets: [
            {
                label: 'Preçário',
                data: [commissionFactoringFinal, debtorAnalysisCommission, totalInterest.toFixed(2), totalPricing.toFixed(2)],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Redução Preçário',
                data: [data.commissionFactoring, debtorAnalysisCommission, totalInterest.toFixed(2), totalReduce.toFixed(2)],
                backgroundColor: 'rgba(75, 192, 192, 0.5)'
            },
        ],
    };

    return (
        <Stack>
            <Typography textAlign={'center'}>
                % Redução Comissão Factoring = {commissionFactoringReduction.toFixed(2)} %
            </Typography>
            <Typography textAlign={'center'}>
                Total Redução = {(totalPricing - totalReduce).toFixed(2)} €
            </Typography>
            <Stack direction='row' justifyContent='center'>
                <Bar data={verticalBarsdata} />
            </Stack>
        </Stack>
    );
};

export default Result;
