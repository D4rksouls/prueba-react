import { TextFieldWithValidation } from '@components/generic/text-field-with-validation/TextFieldWithValidation';
import { Button, Stack, Link } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useNavigate, useParams  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const ClientForm = () => {
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
      code: '',
    },
    validationSchema: object({
      code: string()
      .required('El código es requerido')
      .max(10, 'El código no puede ser superior a 10 caracteres.')
    }),
    onSubmit: async (values, helpers) => {
      try {
        await getTokenAndSet();
        // llamar metodo del store o services para enviar api
        navigate('/');
      } catch (error) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: error });
        helpers.setSubmitting(false);
      }
    }
  });

  let { id } = useParams();
  console.log(id);
  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={3}>
        <TextFieldWithValidation
          name="code"
          label="Código de verificación"
          required
          type="text"
          formik={formik}
        />
      </Stack>
      {formik.errors.submit?.code === 401 && (
        <p
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          variant="body2"
        >
          Código de verificación incorrecto.
        </p>
      )}
      <Button
        fullWidth
        size="large"
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded-l py-3"
        type="submit"
        variant="outlined"
      >
        Confirmar
      </Button>
    </form>
  );
};

ClientForm.propTypes = {
  reCaptcha: PropTypes.string
};
