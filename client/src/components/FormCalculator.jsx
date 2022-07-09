import { Form, Formik } from 'formik';
import React from 'react';
import Button from './Button';
import Input from './Input';

function FormCalculator() {
  return (
    <div>
      <Formik
        initialValues={{ height: '', weight: '', age: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.height) {
            errors.height = 'Obrigatório';
          }

          if (!values.weight) {
            errors.weight = 'Obrigatório';
          }

          if (!values.age) {
            errors.age = 'Obrigatório';
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          alert();
        }}
      >
        {({ errors }) => (
          <Form>
            <Input
              id="Form_Altura"
              label="Altura"
              type="number"
              name="height"
              step="0.01"
              min="0.00"
            />
            <Input
              id="Form_Peso"
              label="Peso"
              type="number"
              name="weight"
              step="0.01"
              min="0.00"
            />
            <Input
              id="Form_Idade"
              label="Idade"
              type="number"
              name="age"
            />
            <Button submit disabled={!!Object.keys(errors).length}>
              Enviar
            </Button>
          </Form>
        )}

      </Formik>
    </div>
  );
}

export default FormCalculator;
