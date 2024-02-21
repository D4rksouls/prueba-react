import { TextFieldWithValidation } from '@components/generic/text-field-with-validation/TextFieldWithValidation';
import { Button, Stack, Link } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

/**
 * Componente LoginForm que renderiza un formulario de inicio de sesión.
 * Incluye campos para el nombre de usuario y la contraseña, así como opciones para enviar y
 * desbloquear el acceso si es necesario.
 *
 * @param {Object} props Propiedades del componente.
 * @param {Object} props.formik Propiedades de Formik para el formulario.
 * @return {JSX.Element} Componente LoginForm.
 *
 * @author Hader Rincon <hader.rincon@konecta-group.com>
 * @date 07-11-2023
 */
export const LoginForm = () => {
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();


  /**
   * Obtiene el token de reCaptcha y lo almacena en el store.
   *
   * @returns {Promise<void>} Promesa vacía.
   */
  const getTokenAndSet = async () => {
    const token = await executeRecaptcha('login');
    setReCaptchaToken(token);
  };

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * Utiliza la función `loginUser` del store de autenticación para autenticar al usuario.
   * En caso de éxito, redirige a la página principal. En caso de error, muestra un mensaje.
   *
   * @param {object} values - Contiene los valores del formulario (usuario y contraseña).
   * @param {object} helpers - Proporciona funciones de Formik para manejar estado y errores.
   *
   * @author Hader Rincon <hader.rincon@konecta-group.com>
   * @date 20-10-2023
   */
  const formik = useFormik({
    initialValues: {
      user: '',
      password: ''
    },
    validationSchema: object({
      user: string()
      .required('El usuario es requerido')
      .max(255, 'El usuario no puede ser superior a 255 caracteres.'),
    
    password: string()
      .required('La contraseña es requerida')
      .max(255, 'La contraseña no puede ser superior a 255 caracteres.')
    }),
    onSubmit: async (values, helpers) => {
      try {
        // validacion de ip
        // await loginUser(values.user, values.password);
        navigate('/');
      } catch (error) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: error });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextFieldWithValidation
          name="user"
          label="Nombre de usuario"
          required
          type="text"
          formik={formik}
        />
        <TextFieldWithValidation
          name="password"
          label="Contraseña"
          required
          type="password"
          formik={formik}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
        />
      </Stack>
      {formik.errors.submit?.code === 401 && (
        <Link
          href="https://autogestion.grupokonecta.co/desbloqueo"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          variant="body2"
        >
          Haz clic aquí si olvidaste tu contraseña
        </Link>
      )}
      <Button
        fullWidth
        size="large"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded-l py-3"
        type="submit"
        variant="outlined"
      >
        Continuar
      </Button>
      <p>
        <a className="text-gray-800 font-bold"
          href="https://autogestion.grupokonecta.co/desbloqueo"
        >
          Desbloqueo de usuario
        </a>
      </p>
    </form>
  );
};

LoginForm.propTypes = {
  reCaptcha: PropTypes.string
};
