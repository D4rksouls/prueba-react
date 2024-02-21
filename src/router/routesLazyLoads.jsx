import { lazy } from 'react';

export const LoginPage = lazy(() => import('@pages/auth/LoginPage'));
export const AuthContainer = lazy(() =>
  import('@containers/auth/AuthContainer')
);

 export const PrivateContainer = lazy(() =>
  import('@containers/private/PrivateContainer')
);

export const ClientPage = lazy(() => import('@pages/client/ClientPage'));

export const CodePage = lazy(() =>
  import('@pages/private/CodePage')
);
/*
export const FormPage = lazy(() => import('@pages/private/FormPage'));
export const ReportPage = lazy(() => import('@pages/private/ReportPage'));
export const ClientPage = lazy(() => import('@pages/public/ClientPage')); */


export const NotFound = lazy(() =>
  import('@components/generic/errors/404/NotFound')
);