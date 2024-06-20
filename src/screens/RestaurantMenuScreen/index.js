import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  I18nManager,
  Animated,
  Modal,
  Pressable
} from 'react-native';
import Main from '../../components/MainWrapper';
import LinearGradient from 'react-native-linear-gradient';
import { routes } from '../../router/routes';


const RestaurantMenu = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [counter, setCounter] = useState(0);
  const categoryViewHeight = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef();
  const scrollToEnd = () => scrollRef.current.scrollToEnd({animated: false});
  const categories = ['מרקים', 'ראשונות', 'תבשילים', 'פירה/פלאפל', 'תוספות'];

  const soups = [
    {
      id: '1',
      name: 'מרק עגבניות ואורז',
      amount: '500 מ"ל',
      description: ' אפונה, גזר, בצל, שום, ירקות שורש',
      price: '19.90 ₪',
      oldPrice: '39.90 ₪',
      imageUrl: require('./../../images/soup1.png'),
    },
    {
      id: '2',
      name: 'מרק אפונה',
      amount: '500 מ"ל',
      description: ' אפונה, גזר, בצל, שום, ירקות שורש',
      price: '19.90 ₪',
      oldPrice: '39.90 ₪',
      imageUrl: require('./../../images/Soup.png'),
    },
  ];
  const starters = [
    {
      id: '1',
      name: 'חומוס',
      amount: '500 מ"ל',
      description: '',
      price: '35.00 ₪',
      oldPrice: '65.00 ₪',
      imageUrl: require('./../../images/food1.png'),
    },
    {
      id: '2',
      name: 'קובה בורגול במילוי בשר',
      amount: '750 מ"ל',
      description: 'מעטפת בורגול במילוי בשר טחון, צימוקים ושקדים',
      price: '35.00 ₪',
      oldPrice: '65.00 ₪',
      imageUrl: require('./../../images/food3.png'),
    },
  ];
  const dishes = [
    {
      id: '1',
      name: 'חריימה',
      amount: '500 מ"ל',
      description: ' דג מושט ברוטב עגבניות ופלפלים פיק',
      price: '35.00 ₪',
      oldPrice: '65.00 ₪',
      imageUrl: require('./../../images/food2.png'),
    },
    {
      id: '2',
      name: 'דאל עדשים',
      amount: '500 מ"ל',
      description: ' מוגש עם אורז לבן',
      price: '22.00 ₪',
      oldPrice: '39.90 ₪',
      imageUrl: require('./../../images/food4.png'),
    },
    {
      id: '3',
      name: 'שעועית לבנה',
      amount: '500 מ"ל',
      description: ' מוגש עם אורז לבן',
      price: '22.00 ₪',
      oldPrice: '39.90 ₪',
      imageUrl: require('./../../images/food5.png'),
    },
  ];

  const handleCategoryPress = category => {
    setSelectedCategory(category);
  };
  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleScroll = (event) => {
    const scrollYPosition = event.nativeEvent.contentOffset.y;
    if (scrollYPosition > 0) {
        Animated.timing(categoryViewHeight, {
          toValue: 60, // Height of the category view
          duration: 100,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(categoryViewHeight, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }  };

  const renderSoupItem = ({item}) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
    <View style={styles.soupItem} >
      <Image source={item.imageUrl} style={styles.soupImage} />
      <View style={styles.soupDetails}>
        <Text style={styles.soupName}>{item.name}</Text>
        <Text style={styles.soupDescription}>{item.amount}</Text>
        <Text style={styles.soupDescription}>{item.description}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.oldPrice}>{item.oldPrice}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );

  return (
    // < Main>
    <View style={styles.container}>
    <LinearGradient
              colors={['#F6E1ED', '#FFFFFF']}
              style={styles.linearGradient}>
      <View style={styles.header}>
        <Image
          source={require('./../../images/Mask_group.png')}
          style={styles.headerImage}
        />
      </View>
      <Text style={styles.title}>רק מאמא</Text>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Text style={styles.navItem}>תפריט</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>אודות</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navItem}>המלצות</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.separatorCon}>
        <View style={styles.separator} />
      </View>
    
      <Animated.View style={[styles.navbarCategory1, { height: categoryViewHeight }]}>

      <ScrollView
        ref={scrollRef}
        onContentSizeChange={scrollToEnd}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.navbarCategory}>

        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.navCategory,
              selectedCategory === category && styles.selectedNavItem,
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <Text
              style={[
                styles.navText,
                selectedCategory === category && styles.selectedNavText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </Animated.View>
      <ScrollView onScroll={handleScroll} scrollEventThrottle={16}  >
      {(selectedCategory === 'מרקים' || selectedCategory === null) && (
        <View>
        <Text style={styles.sectionTitle}>מרקים</Text>
        <View style={styles.x}>
          <FlatList
            data={soups}
            renderItem={renderSoupItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
        </View>
      )}
      {(selectedCategory === 'ראשונות' || selectedCategory === null) && (
        <View>
        <Text style={styles.sectionTitle}>ראשונות</Text>
        <View style={styles.x}>
          <FlatList
            data={starters}
            renderItem={renderSoupItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
        </View>
      )}
       {(selectedCategory === 'תבשילים' || selectedCategory === null) && (
        <View>
        <Text style={styles.sectionTitle}>תבשילים</Text>
        <View style={styles.x}>
          <FlatList
            data={dishes}
            renderItem={renderSoupItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
        </View>
       )}
        <View style={{marginBottom: 30}}></View>
      </ScrollView>
      </LinearGradient>
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <Pressable
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>×</Text>
              </Pressable>
              <Image source={selectedItem.imageUrl} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedItem.name}</Text>
              <Text style={styles.modalAmount}>{selectedItem.amount}</Text>
              <Text style={styles.modalDescription}>{selectedItem.description}</Text>
              <View style={styles.modalPriceContainer}>
                <Text style={styles.modalPrice}>{selectedItem.price}</Text>
                <Text style={styles.modalOldPrice}>{selectedItem.oldPrice}</Text>
              </View>
              <View style={styles.modalQuantityContainer}>
                <TouchableOpacity style={styles.modalQuantityButton} onPress={()=> setCounter(counter - 1)}>
                  <Text style={styles.modalQuantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.modalQuantityText}>{counter}</Text>
                <TouchableOpacity style={styles.modalQuantityButton} onPress={()=> setCounter(counter + 1)}>
                  <Text style={styles.modalQuantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.addToOrderButton} onPress={()=> navigation.navigate(routes.OrderSummary,selectedItem)}>
                <Text style={styles.addToOrderButtonText}>הוסף להזמנה 35₪</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
    // </Main>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    color: '#464646',
  },
  
  navItem: {
    fontSize: 16,
    color: '#464646',
    fontWeight: '600',
  },
  separator: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#98EDB1',
  },
  separatorCon: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    marginTop: 20,
    padding: 5,
    fontWeight: '600',
    color: '#464646',
  },
  soupItem: {
    flexDirection: 'row-reverse',
    padding: 14,
    backgroundColor: '#EEEBE4',
    marginVertical: 5,
    borderRadius: 16,
    margin: 12,
  },
  soupImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  navbarCategory1: {
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  soupDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  
  soupName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  soupDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    color: '#000',
  },
  oldPrice: {
    fontSize: 14,
    color: '#FC7A57',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },

  navbarCategory: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    gap: 10,
    flax:1
  },
  navbar: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    marginVertical: 10,
    
  },
  navCategory: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    backgroundColor: '#90EE90',
    borderRadius: 20,
  },
  selectedNavItem: {
    backgroundColor: '#006400',
  },
  navText: {
    fontSize: 16,
    color: '#000',
  },
  selectedNavText: {
    color: '#fff',
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    // alignItems: 'center',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  modalAmount: {
    fontSize: 16,
    color: '#666',
  },
  modalDescription: {
    fontSize: 14,
    color: '#666',
    // textAlign: 'center',
    marginVertical: 7,
  },
  modalPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  modalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalOldPrice: {
    fontSize: 16,
    color: '#999',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  modalQuantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor:'#98EDB1',
    paddingVertical: 7,
    justifyContent: 'center',
    borderRadius: 50,

  },
  modalQuantityButton: {
    backgroundColor: '#1B4533',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalQuantityButtonText: {
    fontSize: 27,
    // fontWeight: 'bold',
    color: '#98EDB1'
   

  },
  modalQuantityText: {
    fontSize: 18,
    marginHorizontal: 20,
  },
  addToOrderButton: {
    backgroundColor: '#1B4533',
    borderRadius: 25,
    paddingVertical: 15,
    // paddingHorizontal: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',


  },
  addToOrderButtonText: {
    fontSize: 18,
    color: '#98EDB1',
  },
 
});

export default RestaurantMenu;
