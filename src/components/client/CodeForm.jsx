import { TextFieldWithValidation } from '@components/generic/text-field-with-validation/TextFieldWithValidation';
import { Button, Stack, Link } from '@mui/material';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { useNavigate, useParams  } from 'react-router-dom';
import { ListFieldWithValidation } from '@components/generic/list-field-with-validation/ListFieldWithValidation';
import React from 'react';

export const CodeForm = () => {

  const formik = useFormik({
    initialValues: {
      type: '',
      document: '',
      name: ''
    },
    validationSchema: object({
      type: string()
      .required('El código es requerido'),
      document: string()
        .required('El cédula es requerido'),
      name: string()
        .required('El nombre es requerido')
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log(values.type, 'type', values.document, 'document', values.name, 'values');
      } catch (error) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: error });
        helpers.setSubmitting(false);
      }
    }
  });

  let { id } = useParams();
  return (
    <form onSubmit={formik.handleSubmit} id="codeform" className=' h-200 w-500 p-7 space-y-6'>
      <Stack >
        <ListFieldWithValidation
          name="type"
          label="Tipo de documento"
          required
          formik={formik}
          options={[
            { value: '1', label: 'Cédula de ciudadanía' },
            { value: '2', label: 'Cédula de extranjería' },
            { value: '3', label: 'Pasaporte' },
          ]}
        />
        <TextFieldWithValidation
          name="document"
          label="Cédula"
          
          type="password"
          formik={formik}
        />
        <TextFieldWithValidation
          name="name"
          label="Nombre"
          required
          type="text"
          formik={formik}
          onPaste={(e) => e.preventDefault()}
          onCopy={(e) => e.preventDefault()}
        />
      </Stack>
      <Button
        fullWidth
        size="large"
        className="!bg-blue-600 hover:!bg-blue-400  !text-white font-bold px-4 rounded-l py-3"
        type="submit"
        variant="outlined"
      >
        Enviar Código
      </Button>
    </form>
  );
};
