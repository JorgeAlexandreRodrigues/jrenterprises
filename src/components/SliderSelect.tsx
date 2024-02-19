import React from 'react';
import SliderComponent from './common/SliderComponent';

interface SliderSelectProps {
  data: any; // Define the type of data according to its structure
  setData: React.Dispatch<React.SetStateAction<any>>; // Define the type of setData according to its function signature
}

const SliderSelect: React.FC<SliderSelectProps> = ({ data, setData }) => {

return (
  <>
    <SliderComponent label="Valor Financiamento" min={0} max={1000000} defaultValue={data.vF} value={data.vF} step={500} onChange={(e: any, value) => setData({ ...data, vF: value })} unit="€" amount={data.vF} />
    <SliderComponent label="Estrutura e Montagem" min={0} max={data.vF * 0.005 <= 600 ? 600 : data.vF * 0.005} defaultValue={data.vF * 0.005 <= 600 ? 600 : data.vF * 0.005} value={data.eM} step={50} onChange={(e: any, value) => setData({ ...data, eM: value })} unit='€' amount={data.eM} />
    <SliderComponent label="Comissão Gestão" min={0} max={data.vF * 0.02 <= 210 ? 210 : data.vF * 0.02} defaultValue={data.vF * 0.02 <= 210 ? 210 : data.vF * 0.02} value={data.cG} step={50} onChange={(e: any, value) => setData({ ...data, cG: value })} unit='€' amount={data.cG} />
  </>
);
}

export default SliderSelect;