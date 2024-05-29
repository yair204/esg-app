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

  cardContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  subCardContainer: {
    flex: 1,
    flexDirection: 'row',
    // padding:7,
    gap: 20,
    width: '90%',
    justifyContent: 'space-around',
  },
  smallCardsContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    // backgroundColor:'red',
  },
  // card: {
  //   width: '90%',
  //   height: '35%',
  //   backgroundColor:'#F9F8F8',
  //   borderRadius:16,
  //   // paddingRight: 10
  //   flexDirection: 'row-reverse',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  // },

  
  bigCardContainer: {
    width: '90%',
    marginVertical: 10,
    // backgroundColor:'red',
    
  },
  bigCard: {
    backgroundColor:'#F9F8F8',
    borderRadius:16
  },
  leftPart: {
    flex: 1,
    gap:30,
    alignItems: 'flex-start',
    // paddingBottom: 40,
    flexDirection: 'column',
    paddingLeft:10,
    paddingTop:10,
    
  },
  rightPart: {
    flex: 1,
    paddingLeft:10,
    paddingTop:10,
    
  },
 
  text:{
    fontSize: 20,
    fontWeight:'bold',
  },
  kgText:{
    fontSize: 64,
    // fontWeight:'bold',
    color:'#464646'
  },
  textCO:{
    width:'80%',
    marginLeft: 45,
    marginTop: 4,
    

  },
  kgContainer:{
    marginLeft:10,
    flexDirection:'row',
    alignItems:"center",
    

  },

  verticalDivider: {
    width: 1, 
    backgroundColor: '#464646', 
    height: '60%', 
    marginTop: 80,
    
    
  },


  smallCardText:{
    fontSize:16
  }

});
