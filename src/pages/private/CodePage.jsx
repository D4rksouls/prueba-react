import { CodeForm } from '@components/client/CodeForm';
import { Box } from '@mui/material';


export default function CodePage() {
    return (
        <>
        <Box className="bg-white-50 flex-auto items-center flex justify-center rounded-lg box-border">
            <Box className="max-w-[550px] px-3 py-[100px] w-full">
                <CodeForm />
            </Box>
        </Box>
        </>
    );
}