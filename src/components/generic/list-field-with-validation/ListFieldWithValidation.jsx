import { InputLabel, MenuItem, Select, FormControl, FormHelperText } from '@mui/material';
import PropTypes from 'prop-types';


export const ListFieldWithValidation = ({
  name,
  label,
  formik,
  options,
  ...props
}) => {

  return (
    <FormControl {...props} sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-error-label" className={(formik.touched[name] && formik.errors[name]) && "!text-red-advice"}>{label}</InputLabel>
        <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        name={name}
        value={formik.values[name]}
        label={label}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        {...props}
        >
        
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
        </Select>
        {(formik.touched[name] && formik.errors[name]) && 
        <FormHelperText className='!text-red-advice'>El {label.toLowerCase()} es requerido</FormHelperText> }
    </FormControl>
  );
};
// #d32f2f Color rojo para FormHelperText COLOR
ListFieldWithValidation.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
