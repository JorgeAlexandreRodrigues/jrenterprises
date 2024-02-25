import React from 'react'
import SliderComponent from '../common/SliderComponent';

interface SliderSelectProps {
    data: any; // Define the type of data according to its structure
    setData: React.Dispatch<React.SetStateAction<any>>; // Define the type of setData according to its function signature
  }

const SliderSelect: React.FC<SliderSelectProps> = ({data, setData}) => {
  return (
    <>
    <SliderComponent label='Valor da Livrança' min={0} max={250000} defaultValue={data.amountLivranca} step={1000} value={data.amountLivranca} onChange={(e: any, value: number | number[]) => {
        const newLIVRANCA = Array.isArray(value) ? value[0] : value;
        const newProcessingComission = newLIVRANCA * 0.0060 <= 60 ? 60 : newLIVRANCA * 0.0060;
        setData({ ...data, amountLivranca: newLIVRANCA, processingCommission: newProcessingComission });
      }} unit='€' amount={data.amountLivranca}/>
    <SliderComponent label='Comissão de Processamento' min={0} max={data.amountLivranca * 0.0060 <= 60 ? 60 : data.amountLivranca * 0.0060} defaultValue={data.processingCommission} step={10} value={data.processingCommission} onChange={(e: any, value) => setData({...data, processingCommission:value })} unit='€' amount={data.processingCommission}/>
    <SliderComponent label='Spread' min={0} max={15} defaultValue={data.spreadRate} step={0.25} value={data.spreadRate} onChange={(e: any, value) => setData({...data, spreadRate:value })} unit='%' amount={data.spreadRate}/>
    </>
  )
}

export default SliderSelect