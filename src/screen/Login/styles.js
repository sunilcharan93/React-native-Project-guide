import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    borderColor: '#abb0ac',
  },
  touch: {
    width: '80%',
    backgroundColor: colors.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 75,
    marginBottom: 10,
    borderColor: colors.primary,
  },
});
