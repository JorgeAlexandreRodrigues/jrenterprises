import React from 'react';
import SliderComponent from './common/SliderComponent';

interface SliderSelectProps {
  data: any; // Define the type of data according to its structure
  setData: React.Dispatch<React.SetStateAction<any>>; // Define the type of setData according to its function signature
}

const SliderSelect: React.FC<SliderSelectProps> = ({ data, setData }) => {

  console.log(data)
  console.log(setData)
  return (
    <>
      <SliderComponent label="Valor Financiamento" min={0} max={1000000} defaultValue={data.vF} value={data.vF} step={1000} onChange={(e: any, value: number | number[]) => {
        const newVF = Array.isArray(value) ? value[0] : value;
        const newEM = newVF * 0.005 <= 600 ? 600 : newVF * 0.005;
        const newCG = Math.round(newVF * 0.02) <= 210 ? 210 : Math.round(newVF * 0.02);
        setData({ ...data, vF: newVF, eM: newEM, cG: newCG });
      }} unit="€" amount={data.vF} />
      <SliderComponent label="Estrutura e Montagem" min={0} max={data.vF * 0.005 <= 600 ? 600 : data.vF * 0.005} defaultValue={data.eM} value={data.eM} step={50} onChange={(e: any, value) => setData({ ...data, eM: value })} unit='€' amount={data.eM} />
      <SliderComponent label="Comissão Gestão" min={0} max={data.vF * 0.02 <= 210 ? 210 : data.vF * 0.02} defaultValue={data.cG} value={data.cG} step={50} onChange={(e: any, value) => setData({ ...data, cG: value })} unit='€' amount={data.cG} />
    </>
  );
}

export default SliderSelect;