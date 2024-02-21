import { Box } from '@mui/material';
import { ClientForm } from '@components/client/ClientForm';

export default function ClientPage() {
    return (
        <>
        <Box className="bg-white flex-auto items-center flex justify-center">
            <Box className="max-w-[550px] px-3 py-[100px] w-full">
                <ClientForm />
            </Box>
        </Box>
        </>
    );
}