import { TextField, FormControl, InputLabel } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Componente que renderiza un TextField con validación.
 *
 * @param {Object} props Propiedades del componente.
 * @param {string} props.name Nombre del campo.
 * @param {string} props.label Etiqueta del campo.
 * @param {Object} props.formik Objeto formik.
 * @param {string} props.type Tipo del campo.
 * @param {Object} props.props Propiedades adicionales.
 *
 * @author Hader Rincon <hader.rincon@konecta-group.com>
 * @date 07-11-2023
 */
export const TextFieldWithValidation = ({
  name,
  label,
  formik,
  type = 'text',
  ...props
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
    <TextField
      fullWidth
      label={label}
      name={name}
      type={type}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange}
      value={formik.values[name]}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...props}
    />
    </FormControl>
  );
};

TextFieldWithValidation.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  type: PropTypes.string
};
