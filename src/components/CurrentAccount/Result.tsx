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
        plafond: number
        cStructureMouting: number,
        managementCommission: number
        immobilizationComission: number
        renewalCommission: number
        // Add other properties if necessary
    };
}

const Result: React.FC<ResultProps> = ({ data }) => {
    const { plafond, cStructureMouting, managementCommission, immobilizationComission, renewalCommission } = data;
    let cStructureMoutingFinal = Math.max(plafond * 0.01, 350);
    let cStructureMoutingReduction = (1 - (data.cStructureMouting / cStructureMoutingFinal)) * 100;
    let managementCommissionFinal = Math.max(plafond * 0.0175, 350);
    let managementCommissionReduction = (1 - (data.managementCommission / managementCommissionFinal)) * 100;
    let immobilizationComissionFinal = Math.max(plafond * 0.0175, 250);
    let immobilizationComissionReduction = (1 - (data.immobilizationComission / immobilizationComissionFinal)) * 100;
    let renewalCommissionFinal = Math.max(plafond * 0.0055, 250);
    let renewalCommissionReduction = (1 - (data.renewalCommission / renewalCommissionFinal)) * 100;

    let totalP = cStructureMoutingFinal + managementCommissionFinal + immobilizationComissionFinal + renewalCommissionFinal;
    let totalR = data.cStructureMouting + data.managementCommission + data.immobilizationComission + data.renewalCommission;

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

    const labels = ['Estrutura Montagem', 'Comissão Gestão', 'Comissão Imobilização', 'Comissão Renovação', 'Total'];

    const verticalBarsdata = {
        labels,
        datasets: [
            {
                label: 'Preçário',
                data: [cStructureMoutingFinal.toFixed(2), managementCommissionFinal.toFixed(2), immobilizationComissionFinal.toFixed(2), renewalCommissionFinal.toFixed(2), totalP.toFixed(2)],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Redução Preçário',
                data: [data.cStructureMouting.toFixed(2), data.managementCommission.toFixed(2), data.immobilizationComission.toFixed(2), data.renewalCommission.toFixed(2), totalR.toFixed(2)],
                backgroundColor: 'rgba(75, 192, 192, 0.5)'
            },
        ],
    };

    return (
        <Stack>
            <Typography textAlign={'center'}>
                % Redução Estrutura Montagem = {cStructureMoutingReduction.toFixed(2)} %
            </Typography>
            <Typography textAlign={'center'} >
                % Redução Comissão Gestão {managementCommissionReduction.toFixed(2)} %
            </Typography>
            <Typography textAlign={'center'}>
                % Redução Comissão Imobiliário = {immobilizationComissionReduction.toFixed(2)} %
            </Typography>
            <Typography textAlign={'center'}>
                % Redução Comissão Renovação = {renewalCommissionReduction.toFixed(2)} %
            </Typography>
            <Stack direction='row' justifyContent='center'>
                <Bar data={verticalBarsdata} />
            </Stack>
        </Stack>
    );
};

export default Result;
