import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
  
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor:'#EEEBE4',
    paddingBottom:20

  },

  cardContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  subCardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop:20,
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
 
  
  bigCardContainer: {
    width: '90%',
    marginVertical: 10,
    // backgroundColor:'red',
    
  },
  bigCard: {
    backgroundColor:'white',
    borderRadius:16
  },
  leftPart: {
    flex: 1,
    gap:30,
    alignItems: 'flex-start',
    // paddingBottom: 40,
    flexDirection: 'column',
    paddingLeft:20,
    paddingTop:10,
    
  },
  rightPart: {
    flex: 1,
    paddingLeft:10,
    paddingTop:10,
    // alignItems:'center',
    // backgroundColor:'red'
    
  },
 
  text:{
    fontSize: 20,
    fontWeight:'bold',
  },
  kgText:{
    fontSize: 54,
    fontWeight:'600',
    color:'#464646'
  },
  textCO:{
    // width:'80%',
    // marginLeft: 45,
    marginTop: 4,
  

  },
  imgContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  kgContainer:{
    // marginLeft:10,
    flexDirection:'row',
    alignItems:'baseline',
    
    

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
