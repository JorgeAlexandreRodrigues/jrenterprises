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
    vDoe: number;
    cC: number;
    cD: number;
    interestRate: number;
    longTerm: number;
    // Add other properties if necessary
  };
}

const Result: React.FC<ResultProps> = ({ data }) => {
  const { vDoe, cC, cD, interestRate, longTerm } = data;
  let cCFinal = Math.max(vDoe * 0.0030, 80);
  let cCReduction = (1 - (data.cC / cCFinal)) * 100
  let cDFinal = Math.max(vDoe * 0.0025, 75);
  let cDReduction = (1 - (data.cD / cDFinal)) * 100
  let dailyInterestRate = (data.interestRate / 365) / 100;
  let totalInterest = (vDoe * dailyInterestRate) * data.longTerm;
  let totalP = cCFinal + cDFinal + totalInterest;
  let totalR = data.cC + data.cD + totalInterest;

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

  const labels = ['Comissão Contratação', 'Desconto Documentos', 'Juros', 'Total'];

  const verticalBarsdata = {
    labels,
    datasets: [
      {
        label: 'Preçário',
        data: [cCFinal, cDFinal, totalInterest.toFixed(2), totalP.toFixed(2)],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Redução Preçário',
        data: [data.cC, data.cD, totalInterest.toFixed(2), totalR.toFixed(2)],
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign={'center'}>
        % Redução Comissão Contratação = {cCReduction.toFixed(2)} %
      </Typography>
      <Typography textAlign={'center'} >
        % Redução Desconto Documentos {cDReduction.toFixed(2)} %
      </Typography>
      <Typography textAlign={'center'}>
        Total Redução = {(totalP - totalR).toFixed(2)} €
      </Typography>
      <Stack direction='row' justifyContent='center'>
        <Bar data={verticalBarsdata} />
      </Stack>
    </Stack>
  );
};

export default Result;
