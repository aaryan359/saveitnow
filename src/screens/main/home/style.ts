import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fdfdfd',
    paddingTop: 40,
  },
  gridContainer: {  
    padding: 10,
    alignItems: 'center',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  folder: {
    backgroundColor: '#f2f6ff',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 3,
  },
  folderName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  folderImage: {
    width: 50,
    height: 50,
  },
});
