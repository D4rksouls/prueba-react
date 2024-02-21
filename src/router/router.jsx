import { AuthContainer, CodePage, LoginPage, NotFound, PrivateContainer, ClientPage } from './routesLazyLoads';
import { createHashRouter } from 'react-router-dom';
import { ProtectedRoute } from '../wrappers/ProtectedRoute';
import { Welcome } from '@components/generic/welcome/Welcome';

export const router = createHashRouter([
    {
      path: 'auth',
      element: <AuthContainer />,
      children: [
        {
          path: 'login',
          element: <LoginPage />
        }
      ]
    },
    {
      path: '/',
      element: (
        //<ProtectedRoute>
          <PrivateContainer />
        //</ProtectedRoute>
      ),
      children: [
        {
          path: '',
          element: <Welcome />
        },
        {
          path: 'code',
          element: <CodePage />
        } 
      ]
    },
    {
        path: 'client',
        element: <AuthContainer />,
        children: [
            {
                path: '',
                element: <ClientPage />
            },
          {
            path: ':id',
            element: <ClientPage />
          }
        ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);