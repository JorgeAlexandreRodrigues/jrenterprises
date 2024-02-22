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
    vF: number;
    eM: number;
    cG: number;
    // Add other properties if necessary
  };
}

const Result: React.FC<ResultProps> = ({ data }) => {
  const { vF, eM, cG } = data;
  let eMFinal = Math.max(vF * 0.005, 600);
  let eMReduction = (1 - (data.eM / eMFinal)) * 100
  let cGFinal = Math.max(vF * 0.02, 210);
  let cGReduction = (1 - (data.cG / cGFinal)) * 100
  let totalP = eMFinal + cGFinal;
  let totalR = data.eM + data.cG;

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

  const labels = ['Estrutura e Montagem', 'Comissão Gestão', 'Total'];

  const verticalBarsdata = {
    labels,
    datasets: [
      {
        label: 'Preçário',
        data: [eMFinal, cGFinal, totalP],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Redução Preçário',
        data: [data.eM, data.cG, totalR],
        backgroundColor: 'rgba(75, 192, 192, 0.5)'
      },
    ],
  };

  return (
    <Stack>
      <Typography textAlign={'center'}>
        % Redução Estrutura e Montagem = {eMReduction.toFixed(2)} %
      </Typography>
      <Typography textAlign={'center'} >
        % Redução Comissão Gestão {cGReduction.toFixed(2)} %
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
