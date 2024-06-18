import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#EEEBE4',
    paddingTop:20

  },
  userNameText:{
    color:'#464646',
    fontWeight:'600'
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
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    gap: 10,
  },
  bigCard: {
    backgroundColor: '#F9F8F8',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    elevation: 2,
    width: 375,
    height: 230,
  },
  leftPart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    
  },
  rightPart: {
    flex: 4,
    justifyContent:'center',
    flexDirection: 'row',
  },

  profitText: {
    marginRight: 10,
    marginTop: 10,
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
    width: 95,
    height: 100
  },
  textCon: {
    marginBottom: 10,
    marginTop: 10,
    marginRight: 23,
  },
});
