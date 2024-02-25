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
    amountLivranca: number;
    processingCommission: number;
    spreadRate: number;
    longTerm: number;
    // Add other properties if necessary
  };
}

const Result: React.FC<ResultProps> = ({ data }) => {
  const { amountLivranca, processingCommission, spreadRate, longTerm } = data;
  let processingCommissionFinal = Math.max(amountLivranca * 0.006, 60);
  let processingCommissionReduction = (1 - (data.processingCommission / processingCommissionFinal)) * 100
  let dailyInterestRate = (data.spreadRate / 365) / 100;
  let totalInterest = (amountLivranca * dailyInterestRate) * data.longTerm;
  let totalPricing = processingCommissionFinal + totalInterest;
  let totalReduce = data.processingCommission + totalInterest;



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

  const labels = ['Comissão Processamento', 'Juros', 'Total'];

  const verticalBarsdata = {
    labels,
    datasets: [
      {
        label: 'Preçário',
        data: [processingCommissionFinal, totalInterest.toFixed(2), totalPricing.toFixed(2)],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Redução Preçário',
        data: [data.processingCommission,totalInterest.toFixed(2), totalReduce.toFixed(2)],
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign={'center'}>
        % Redução Comissão Processamento = {processingCommissionReduction.toFixed(2)} %
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
