import {
  Form, Formik,
} from 'formik';
import React, { useContext } from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import RadioButton from '../../../components/RadioButton';
import Store from '../../../store';

function FormCalculator() {
  const { CalculatorContext } = Store;
  const { setResults } = useContext(CalculatorContext);
  const initialValues = {
    height: '', weight: '', age: '', gender: '',
  };
  const validate = (values) => {
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

    if (!values.gender) {
      errors.gender = 'Obrigatório';
    }
    return errors;
  };

  const harrisBenedictCalc = (weight, height, age, gender) => {
    if (gender === 'masculino') {
      return 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
    }

    return 655.1 + 9.563 * weight + 1.850 * height - 4.676 * age;
  };

  const calculateValues = (values) => {
    const weightValue = parseFloat(values.weight);
    const heightValue = parseFloat(values.height) * 100;
    const { gender, age } = values;
    const carbsGramsPerKilo = 3;
    const minProteinGramsPerKilo = 1.6;
    const maxProteinGramsPerKilo = 2.2;
    const minFatGramsPerKilo = 0.6;
    const maxFatGramsPerKilo = 1;

    const carbs = weightValue * carbsGramsPerKilo;
    const minProtein = weightValue * minProteinGramsPerKilo;
    const maxProtein = weightValue * maxProteinGramsPerKilo;
    const minFat = weightValue * minFatGramsPerKilo;
    const maxFat = weightValue * maxFatGramsPerKilo;
    const tmb = harrisBenedictCalc(weightValue, heightValue, age, gender);
    setResults({
      carbs,
      minProtein,
      maxProtein,
      minFat,
      maxFat,
      tmb,
    });
    // console.log(values);
  };
  return (
    <div className="mt-4">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={calculateValues}
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
              placeholder="1,75"
            />
            <Input
              id="Form_Peso"
              label="Peso"
              type="number"
              name="weight"
              step="0.01"
              min="0.00"
              placeholder="75,25"
            />
            <Input
              id="Form_Idade"
              label="Idade"
              type="number"
              name="age"
            />
            <RadioButton
              id="Form_GeneroMasculino"
              name="gender"
              value="masculino"
              label="Masculino"
            />
            <RadioButton
              id="Form_GeneroFeminino"
              name="gender"
              value="feminino"
              label="Feminino"
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
