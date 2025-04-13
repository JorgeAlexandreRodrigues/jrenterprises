
import React from 'react';
import SliderComponent from '../common/SliderComponent';

interface SliderSelectProps {
  data: any; // Define the type of data according to its structure
  setData: React.Dispatch<React.SetStateAction<any>>; // Define the type of setData according to its function signature
}

const SliderSelect: React.FC<SliderSelectProps> = ({ data, setData }) => {

  return (
    <>
      <SliderComponent label="Valor Financiamento" min={0} max={1000000} defaultValue={data.vF} value={data.vF} step={1000} onChange={(e: any, value: number | number[]) => {
        const newVF = Array.isArray(value) ? value[0] : value;
        const newEM = Math.max(600, newVF * 0.005);
        const newCG = Math.max(210, Math.round(newVF * 0.02));
        let newCGI: number;
        const comissao = 0.0225;

        if (newVF < 50000) {
          newCGI = Math.max(500, newVF * comissao);
        } else if (newVF >= 50000 && newVF < 250000) {
          newCGI = Math.max(1000, newVF * comissao);
        } else {
          newCGI = Math.max(1250, newVF * comissao);
        }

        setData({ ...data, vF: newVF, eM: newEM, cG: newCG, cGI: newCGI });
      }} unit="€" amount={data.vF} />
      <SliderComponent label="Estrutura e Montagem" min={0} max={Math.max(600, data.vF * 0.005)} defaultValue={data.eM} value={data.eM} step={50} onChange={(e: any, value) => setData({ ...data, eM: value })} unit='€' amount={data.eM} />
      <SliderComponent label="Comissão Gestão" min={0} max={Math.max(210, Math.round(data.vF * 0.02))} defaultValue={data.cG} value={data.cG} step={50} onChange={(e: any, value) => setData({ ...data, cG: value })} unit='€' amount={data.cG} />
      <SliderComponent label="Comissão Gestão Inicial" min={0} max={Math.max(
        data.vF < 50000 ? Math.max(500, data.vF * 0.0225) :
        data.vF >= 50000 && data.vF < 250000 ? Math.max(1000, data.vF * 0.0225) :
        Math.max(1250, data.vF * 0.0225)
      )} defaultValue={data.cGI} value={data.cGI} step={50} onChange={(e: any, value) => setData({ ...data, cGI: value })} unit='€' amount={data.cGI} />

    </>
  );
}

export default SliderSelect;