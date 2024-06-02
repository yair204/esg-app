import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  ReduceContainer: {
    marginVertical: 10,
  },
  dateContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    gap: 10,
  },
  dateStyle: {
    fontSize: 20,
    width: 90,
    // backgroundColor:'red',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 5,
  },
  input: {
    width: 92,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 5,
    // flex: 1,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 22,
    color: '#000',
    marginVertical: 10,
    textAlign: 'center',
  },
  inputAndTitle: {
    flex: 0.9,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#000',
    paddingRight: 15,
  },
  sumContainer: {
    marginTop: 5,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginHorizontal:10
  },
  sumText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sumValue: {
    fontSize: 20,
    width: 70,
  },
  textSubTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  sumText1: {
    fontSize: 20,
    color: '#000',
  },
  resultText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  ReduceContainer: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 16,
  },
  tabView: {
    flex: 1,
  },
  tabBar: {
    // backgroundColor: 'white',
  },
  labelStyle: {
    fontSize: 18, // Adjust the font size as needed
    fontWeight: 'bold',
  },
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  dateAndInput: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    // backgroundColor:'red'
    },
});
