import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

const ProSpan = styled('span')({
    display: 'inline-block',
    height: '1em',
    width: '1em',
    verticalAlign: 'middle',
    marginLeft: '0.3em',
    marginBottom: '0.08em',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

function Label({
    componentName,
    isProOnly,
}: {
    componentName: string;
    isProOnly?: boolean;
}) {
    const content = (
        <span>
            <strong>{componentName}</strong>
        </span>
    );

    if (isProOnly) {
        return (
            <Stack direction="row" spacing={0.5} component="span">
                <Tooltip title="Included on Pro package">
                    <a
                        href="https://mui.com/x/introduction/licensing/#pro-plan"
                        aria-label="Included on Pro package"
                    >
                        <ProSpan />
                    </a>
                </Tooltip>
                {content}
            </Stack>
        );
    }

    return content;
}

interface CommonlyUsedComponentsProps {
    data: any; // Define the type of data according to its structure
    setData: React.Dispatch<React.SetStateAction<any>>; // Define the type of setData according to its function signature
}

export default function CommonlyUsedComponents({ data, setData }: CommonlyUsedComponentsProps) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [daysDifference, setDaysDifference] = useState<number | null>(null);

    useEffect(() => {
        if (selectedDate) {
            const currentDate = dayjs();
            const selectedDay = dayjs(selectedDate);
            const difference = selectedDay.diff(currentDate, 'day');
            setDaysDifference(difference);
        }
    }, [selectedDate]);

    useEffect(() => {
        if (daysDifference !== null) {
            setData({
                ...data,
                longTerm: daysDifference + 2,
            });
        }
    }, [daysDifference, setData]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'DatePicker',
                ]}
            >
                <DemoItem label={<Label componentName="Data de Vencimento" />}>
                    <DatePicker value={selectedDate} onChange={setSelectedDate} />
                    {daysDifference !== null && (
                        <div>Número de dias: {daysDifference + 2}</div>
                    )}
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}
