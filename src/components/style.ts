/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { scale } from '../utils/responsive';

const componentStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: scale(10),
    paddingHorizontal: scale(2),
    backgroundColor: '#fff', 
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6), 
  },
  headerText: {
    fontSize: scale(22),
    color: '#000',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
});

export default componentStyles;
