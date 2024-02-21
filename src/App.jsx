import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import ProgressBar from '@components/generic/ProgressBar';
import { reCaptchaSiteKey } from '@utils/constants.js';
import './index.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {


  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaSiteKey} language="es-419">
      <Suspense fallback={<ProgressBar />}>
        <RouterProvider router={router} />
      </Suspense>
    </GoogleReCaptchaProvider>
  )
}

export default App
