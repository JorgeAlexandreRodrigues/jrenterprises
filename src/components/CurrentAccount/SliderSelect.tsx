import React from 'react'
import SliderComponent from '../common/SliderComponent';

interface SliderSelectProps {
    data: any; // Define the type of data according to its structure
    setData: React.Dispatch<React.SetStateAction<any>>; // Define the type of setData according to its function signature
}

const SliderSelect: React.FC<SliderSelectProps> = ({ data, setData }) => {
    return (
        <>
            <SliderComponent label="Plafond" min={0} max={500000} defaultValue={data.plafond} value={data.plafond} step={1000} onChange={(e: any, value: number | number[]) => {
                const newPLAFOND = Array.isArray(value) ? value[0] : value;
                const newEM = Math.round(newPLAFOND * 0.01) <= 350 ? 350 : Math.round(newPLAFOND * 0.01);
                const newCG = Math.round(newPLAFOND * 0.0175) <= 350 ? 350 : Math.round(newPLAFOND * 0.0175);
                const newCI = Math.round(newPLAFOND * 0.0175) <= 250 ? 250 : Math.round(newPLAFOND * 0.0175);
                const newCR = Math.round(newPLAFOND * 0.0055) <= 250 ? 250 : Math.round(newPLAFOND * 0.0055);
                setData({ ...data, plafond: newPLAFOND, cStructureMouting: newEM, managementCommission: newCG, immobilizationComission: newCI, renewalCommission: newCR });
            }} unit="€" amount={data.plafond} />
            <SliderComponent label="Estrutura e Montagem" min={0} max={Math.round(data.plafond * 0.01) <= 350 ? 350 : Math.round(data.plafond * 0.01)} defaultValue={data.cStructureMouting} value={data.cStructureMouting} step={25} onChange={(e: any, value) => setData({ ...data, cStructureMouting: value })} unit='€' amount={data.cStructureMouting} />
            <SliderComponent label="Comissão Gestão" min={0} max={Math.round(data.plafond * 0.0175) <= 350 ? 350 : Math.round(data.plafond * 0.0175)} defaultValue={data.managementCommission} value={data.managementCommission} step={25} onChange={(e: any, value) => setData({ ...data, managementCommission: value })} unit='€' amount={data.managementCommission} />
            <SliderComponent label="Comissão Imobilização" min={0} max={Math.round(data.plafond * 0.0175) <= 250 ? 250 : Math.round(data.plafond * 0.0175)} defaultValue={data.immobilizationComission} value={data.immobilizationComission} step={25} onChange={(e: any, value) => setData({ ...data, immobilizationComission: value })} unit='€' amount={data.immobilizationComission} />
            <SliderComponent label="Comissão Renovação" min={0} max={Math.round(data.plafond * 0.0055) <= 250 ? 250 : Math.round(data.plafond * 0.0055)} defaultValue={data.renewalCommission} value={data.renewalCommission} step={25} onChange={(e: any, value) => setData({ ...data, renewalCommission: value })} unit='€' amount={data.renewalCommission} />
        </>
    )
}

export default SliderSelect