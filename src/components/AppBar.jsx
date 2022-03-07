import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from "react-router-native";
import Constants from 'expo-constants';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 15,
    paddingLeft: 15,
    paddingBottom: 15,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
  },
  link: {
    marginRight: 15,
  },
  text: {
    color: theme.colors.appBarText,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/' style={styles.link} >
          <Text style={styles.text} fontWeight='bold' fontSize='heading'>Repositories</Text>
        </Link>
        <Link to='/signin' style={styles.link}>
          <Text style={styles.text} fontWeight='bold' fontSize='heading'>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;