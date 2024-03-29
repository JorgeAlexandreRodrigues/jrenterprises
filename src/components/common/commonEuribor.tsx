import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import fetchEuriborData from '../../services/euriborService';

interface CommonEuriborProps {
    data: any;
    setData: React.Dispatch<React.SetStateAction<any>>;
}

const CommonEuribor: React.FC<CommonEuriborProps> = ({ data, setData }) => {
    const [euriborOptions, setEuriborOptions] = React.useState<{ [key: string]: number }>({});

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const euriborData = await fetchEuriborData();
                setEuriborOptions(euriborData);
            } catch (error) {
                console.error('Error fetching Euribor data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setData({
            ...data,
            euribor: event.target.value
        });
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Euribor</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={data.euribor || ''}
                label="Euribor"
                onChange={handleChange}
            >
                {Object.entries(euriborOptions).map(([months, rate]) => (
                    <MenuItem key={months} value={rate}>{months.replace("months", " ")}Meses</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CommonEuribor;
