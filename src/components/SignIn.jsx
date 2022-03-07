import { StyleSheet, Pressable, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingRight: 15,
    paddingLeft: 15,
  },
  inputfield: {
    padding: 15,
    borderWidth: 1,
    borderColor: theme.colors.mainBackground,
    borderRadius: 5,
    marginTop: 15
  },
  signInButton: {
    marginTop: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  signInText: {
    color: theme.colors.textBright,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

const initialValues = {
  username: '',
  password: '',
};

const SingInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput style={styles.inputfield} name="username" placeholder="Username" />
      <FormikTextInput style={styles.inputfield} name="password" placeholder="Password" secureTextEntry={true} />
      <Pressable style={styles.signInButton} onPress={onSubmit}>
        <Text style={styles.signInText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    if (values.username && values.password) {
      console.log(values);
    }
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SingInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;