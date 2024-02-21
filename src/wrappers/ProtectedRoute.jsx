import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // si no tiene token redireccionar a login
     // navigate('/auth/login', { replace: true });
     // return <>{children}</>;
  });

 
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};
