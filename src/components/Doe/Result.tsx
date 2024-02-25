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
    iR: number
    // Add other properties if necessary
  };
}

const Result: React.FC<ResultProps> = ({ data }) => {
  const { vDoe, cC, cD, iR } = data;
  let cCFinal = Math.max(vDoe * 0.0030, 80);
  let cCReduction = (1 - (data.cC / cCFinal)) * 100
  let cDFinal = Math.max(vDoe * 0.0025, 75);
  let cDReduction = (1 - (data.cD / cDFinal)) * 100
  let totalP = cCFinal + cDFinal;
  let totalR = data.cC + data.cD;

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

  const labels = ['Comissão Contratação', 'Desconto Documentos', 'Total'];

  const verticalBarsdata = {
    labels,
    datasets: [
      {
        label: 'Preçário',
        data: [cCFinal, cDFinal, totalP],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Redução Preçário',
        data: [data.cC, data.cD, totalR],
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
