import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 18,
  },

  photoPreview: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
  },

  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  selectImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#f7f8ff',
  },

  iconCustom: {
    position: 'absolute',
    zIndex: 1000000,
    left: 30,
  },

  bigCardContainer: {
    width: '90%',
    marginVertical: 10,
    // backgroundColor:'red',
    flex: 1,
  },
  bigCard: {
    backgroundColor: '#F9F8F8',
    borderRadius: 16,
  },
  leftPart: {
    flex: 1,
    gap: 30,
    alignItems: 'flex-start',
    // paddingBottom: 40,
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 10,
    // backgroundColor:'green',
  },
  rightPart: {
    flex: 1,
    // backgroundColor:'red',
  },

  profitText: {
    marginRight: 20,
    marginTop: 18,
  },

  subCardContainer: {
    flex: 1,
    width: '100%',
  },

  userName: {
    flex: 1,
  },

  smallCardsContainer: {
    flex: 1,
    marginBottom:20
  },

  card: {
    margin: 10,
    width: 160,
  },

  orderCard: {
    margin: 10,
    width: 140,
    height: 150
  },
  textCon: {
    marginBottom: 10,
    marginTop: 10,
    marginRight: 23,
  },
});
