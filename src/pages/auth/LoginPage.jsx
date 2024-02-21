import { Box } from '@mui/material';
import { LoginForm } from '@components/auth/LoginForm.jsx';
import { LoginHeader } from '@components/auth/login-header/LoginHeader';

export default function LoginPage() {
    return (
        <>
        <Box className="bg-white flex-auto items-center flex justify-center">
            <Box className="max-w-[550px] px-3 py-[100px] w-full">
                <LoginHeader />
                <LoginForm />
            </Box>
        </Box>
        </>
    );
}