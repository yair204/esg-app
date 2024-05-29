import {View, StyleSheet ,Text, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';

const CustomCard = ({bottomText ,navigation,route ,url , withText = true}) => {
  return (
    <TouchableOpacity style={{flex:1}} onPress={() => navigation.navigate(route)}>
    <View style={styles.container}>
      <Card style={styles.card}>
      {url && (
            <Card.Cover
              style={styles.cardCover}
              source={{ uri: url }}
            />
          )}
        {withText && <View style={styles.cardContent}>
          <Text style={styles.cardText}>{bottomText}</Text>
        </View>}
      </Card>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  card: {
    width: '100%',
    marginBottom: 20,
    borderRadius:16
  },
  cardCover: {
    height: 150,
  },
  cardContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius:16

  },
  cardText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CustomCard;
