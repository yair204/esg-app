import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';
import Main from '../../components/MainWrapper';
// import { MakePhotoIcon } from "../../images/MakePhotoIcon";
import {styles} from './style';
import {ImageCarouselPicker} from '../../components/ImageSelector';
import {Card} from 'react-native-paper';
import CustomCard from '../../components/CustomCard';
import {routes} from '../../router/routes';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-date-picker';

export const ProfileScreen = ({navigation}) => {
  const [bdVisible, setBDVisible] = useState(false);
  const [photo, setPhoto] = useState([]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const imageUrl = `https://picsum.photos/700`;

  const cardCoverHigh = 150;

  
  const scrollRef1 = useRef();
  const scrollToEnd1 = () => scrollRef1.current.scrollToEnd({ animated: false })
  const scrollRef2 = useRef();
  const scrollToEnd2 = () => scrollRef2.current.scrollToEnd({ animated: false })

  const setItems = image => {
    setPhoto(image);
    setBDVisible(false);
    
  };



  return (
    <Main navigation={navigation}>
      <View style={styles.container}>
        <View style={styles.photoPreview}>
          <TouchableOpacity style={styles.selectImageWrapper}>
            {photo?.length !== 0 && (
              <Image
                source={{
                  uri: photo?.uri,
                }}
                style={styles.image}
              />
            )}
            {photo?.length === 0 && (
              <ImageCarouselPicker onSelect={setItems} visible={bdVisible} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.userName}>
          <Text style={styles.userNameText}>{'userName'}</Text>
        </View>

        <View style={styles.bigCardContainer}>
          <Card style={styles.bigCard}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',

                height: 250,
              }}>
              <View style={styles.leftPart}>
                <Card.Title
                  title={
                    <TouchableOpacity onPress={() => setOpen(true)}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          gap: 5,
                        }}>
                        <FontAwesome5 name="chevron-down" size={15} />

                        <Text style={{fontSize: 17}}>
                          {date.toLocaleDateString(undefined, {
                            month: 'numeric',
                            day: 'numeric',
                          })}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  }
                />
              </View>

              <View style={styles.rightPart}>
                <View style={styles.profitText}>
                  <Text style={{fontSize: 20, color: '#464646'}}>
                    {'הרווחת החודש'}
                  </Text>
                </View>
              </View>
            </View>
          </Card>
        </View>

        <View style={styles.smallCardsContainer}>
          <View style={styles.textCon}>
            <Text style={{color: '#464646', fontSize: 20}}>
              {'הפינוקים שלי'}
            </Text>
          </View>

          <View style={styles.subCardContainer}>
            <ScrollView
            ref={scrollRef1}
            onContentSizeChange={scrollToEnd1}
             contentContainerStyle={{flexDirection: 'row-reverse',flexGrow: 1}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{flex: 1, flexDirection: 'row',marginHorizontal:10}}>
                <View style={styles.card}>
                  <CustomCard
                    bottomText={'Another Market'}
                    navigation={navigation}
                    url={imageUrl}
                  />
                </View>
                <View style={styles.card}>
                  <CustomCard
                    bottomText={'Another Market'}
                    navigation={navigation}
                    url={imageUrl}
                  />
                </View>
                <View style={styles.card}>
                  <CustomCard
                    bottomText={'Another Market'}
                    navigation={navigation}
                    url={imageUrl}
                  />
                </View>
                <View style={styles.card}>
                  <CustomCard
                    bottomText={'Another Market'}
                    navigation={navigation}
                    url={imageUrl}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>


        <View style={styles.smallCardsContainer}>
          <View style={styles.textCon}>
            <Text style={{color: '#464646', fontSize: 20}}>
              {'הסטוריית הזמנות'}
            </Text>
          </View>

          <View style={styles.subCardContainer}>
            <ScrollView
            ref={scrollRef2}
            onContentSizeChange={scrollToEnd2}
             contentContainerStyle={{flexDirection: 'row-reverse',flexGrow: 1}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={{flex: 1, flexDirection: 'row',marginHorizontal:10}}>
                <View style={styles.orderCard}>
                  <CustomCard
                    bottomText={'Another Market'}
                    navigation={navigation}
                    url={imageUrl}
                    cardCoverHigh={cardCoverHigh}
                  />
                </View>
                <View style={styles.orderCard}>
                  <CustomCard
                    bottomText={'Another Market'}
                    navigation={navigation}
                    url={imageUrl}
                    cardCoverHigh={cardCoverHigh}
                  />
                </View>
                <View style={styles.orderCard}>
                  <CustomCard
                    bottomText={'Another Market'}
                    navigation={navigation}
                    url={imageUrl}
                    cardCoverHigh={cardCoverHigh}
                  />
                </View>
                <View style={styles.orderCard}>
                  <CustomCard
                    bottomText={'Another Market'}
                    navigation={navigation}
                    url={imageUrl}
                    cardCoverHigh={cardCoverHigh}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Main>
  );
};
