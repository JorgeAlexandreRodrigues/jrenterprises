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
    valueType: string;
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

export default function CommonlyUsedComponents() {
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

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                    'DatePicker',
                ]}
            >
                <DemoItem label={<Label componentName="Data de Vencimento" valueType="date" />}>
                    <DatePicker value={selectedDate} onChange={setSelectedDate} />
                    {daysDifference !== null && (
                        <div>Number of days difference: {daysDifference}</div>
                    )}
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    );
}