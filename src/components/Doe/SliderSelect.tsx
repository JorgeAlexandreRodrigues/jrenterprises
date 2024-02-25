import React from 'react'
import SliderComponent from '../common/SliderComponent';

interface SliderSelectProps {
    data: any; // Define the type of data according to its structure
    setData: React.Dispatch<React.SetStateAction<any>>; // Define the type of setData according to its function signature
  }

const SliderSelect: React.FC<SliderSelectProps> = ({data, setData}) => {
  return (
    <>
    <SliderComponent label='Valor da Remessa' min={0} max={250000} defaultValue={data.vDoe} step={1000} value={data.vDoe} onChange={(e: any, value: number | number[]) => {
        const newDOE = Array.isArray(value) ? value[0] : value;
        const newCC = newDOE * 0.0030 <= 80 ? 80 : newDOE * 0.0030;
        const newCD = Math.round(newDOE * 0.0025) <= 75 ? 75 : Math.round(newDOE * 0.0025);
        setData({ ...data, vDoe: newDOE, cC: newCC, cD: newCD });
      }} unit='€' amount={data.vDoe}/>
    <SliderComponent label='Comissão de Contratação' min={0} max={data.vDoe * 0.0030 <= 80 ? 80 : data.vDoe * 0.0030} defaultValue={data.cC} step={5} value={data.cC} onChange={(e: any, value) => setData({...data, cC:value })} unit='€' amount={data.cC}/>
    <SliderComponent label='Desconto Documentos' min={0} max={data.vDoe * 0.0025 <= 75 ? 75 : data.vDoe * 0.0025} defaultValue={data.cD} step={5} value={data.cD} onChange={(e: any, value) => setData({...data, cD:value })} unit='€' amount={data.cD}/>
    <SliderComponent label='Spread' min={0} max={15} defaultValue={data.interestRate} step={0.25} value={data.interestRate} onChange={(e: any, value) => setData({...data, interestRate:value })} unit='%' amount={data.interestRate}/>
    </>
  )
}

export default SliderSelect