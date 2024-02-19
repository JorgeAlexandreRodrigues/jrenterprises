import React from 'react';
import Slider from '@mui/material/Slider';
import { Stack, Typography } from '@mui/material';

interface CustomSliderProps {
  defaultValue: number;
  min: number;
  max: number;
  step: number;
  onChange: (event: Event, value: number | number[], activeThumb: number) => void;
  value: number;
  label: string; // Add label prop
  unit: string; // Add unit prop
  amount: number; // Add amount prop
}

const SliderComponent: React.FC<CustomSliderProps> = ({ defaultValue, min, max, step, onChange, value, label, unit, amount }) => {
  return (
    <Stack my={1.4}>
      <Stack gap={1}>
        <Typography variant='subtitle2'>{label}</Typography>
        <Typography variant='h5'>{unit} {amount}</Typography>
      </Stack>
      <Slider defaultValue={defaultValue} min={min} max={max} aria-label="Default" valueLabelDisplay="auto" marks step={step} onChange={onChange} value={value} />
      <Stack direction='row' justifyContent={'space-between'}>
        <Typography variant='caption' color="text.secondary">{unit} {min}</Typography>
        <Typography variant='caption' color="text.secondary">{unit} {max}</Typography>
      </Stack>
    </Stack>
  );
}

export default SliderComponent;
