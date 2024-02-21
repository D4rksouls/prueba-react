import { Stack, Typography } from '@mui/material';
import iconSura from '@assets/logo-sura.svg';
export const LoginHeader = () => {
    return (
      
      <Stack spacing={1} sx={{ mb: 3 }}>
        <img alt="Icono Sura" src={iconSura} />
        <Typography variant="h4">Iniciar sesión</Typography>
        <Typography color="text.secondary" variant="body2">
          Debes pertenecer al directorio activo de{' '}
          {import.meta.env.VITE_COMPANY_NAME} para poder ingresar.
        </Typography>
      </Stack>
    );
  };