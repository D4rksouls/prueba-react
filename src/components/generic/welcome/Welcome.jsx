import { Box, Typography } from '@mui/material';
import { companyName } from '@utils/constants.js';
import authIllustration from '@assets/KONECTA-MEMORIA-16-145.jpg';
import { useLocation } from 'react-router-dom';

export const Welcome = () => {
  const location = useLocation();
  const nameOperation = 'Bienvenido a ' + companyName + '!';
  const path = location.pathname.split('/');
  const title = path[1] == 'client' ? 'Confirmación de código' : nameOperation;
console.log(path);
  return (
    <Box className="p-3 flex flex-col justify-center w-full max-w-[1000px] mx-auto">
      <Typography
        align="center"
        color="black"
        className='text-[24px] leading-8 mb-1'
        variant="h3"
      >
        <Box component="a" className='text-gray-900'>
          {title}
        </Box>
      </Typography>
      <img  alt="Ilustración inicial" src={authIllustration} />
    </Box>
  );
};
