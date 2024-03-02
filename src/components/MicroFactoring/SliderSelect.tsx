import React from 'react'
import SliderComponent from '../common/SliderComponent';

interface SliderSelectProps {
    data: any; // Define the type of data according to its structure
    setData: React.Dispatch<React.SetStateAction<any>>; // Define the type of setData according to its function signature
}

const SliderSelect: React.FC<SliderSelectProps> = ({ data, setData }) => {
    return (
        <>
            <SliderComponent label='Micro-Factoring' min={0} max={60000} defaultValue={data.microFactoringValue} step={500} value={data.microFactoringValue} onChange={(e: any, value: number | number[]) => {
                const newMicroFactoring = Array.isArray(value) ? value[0] : value;
                const newCommissionFactoring = newMicroFactoring * 0.1 <= 200 ? 200 : newMicroFactoring * 0.01;
                setData({ ...data, microFactoringValue: newMicroFactoring, commissionFactoring: newCommissionFactoring });
            }} unit='€' amount={data.microFactoringValue} />
            <SliderComponent label='Comissão de Processamento' min={0} max={data.microFactoringValue * 0.01 <= 200 ? 200 : data.microFactoringValue * 0.01} defaultValue={data.commissionFactoring} step={10} value={data.commissionFactoring} onChange={(e: any, value) => setData({ ...data, commissionFactoring: value })} unit='€' amount={data.commissionFactoring} />
            <SliderComponent label='Spread' min={0} max={15} defaultValue={data.spreadRate} step={0.25} value={data.spreadRate} onChange={(e: any, value) => setData({ ...data, spreadRate: value })} unit='%' amount={data.spreadRate} />
        </>
    )
}

export default SliderSelect