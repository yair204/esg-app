import React, { useState } from "react";
import { Text, View,Image ,TouchableOpacity} from "react-native";
import Main from "../../components/MainWrapper";
import { MakePhotoIcon } from "../../images/MakePhotoIcon";
import {styles} from "./style";
import { ImageCarouselPicker } from "../../components/ImageSelector";

export const ProfileScreen = ({navigation}) => {
  const [bdVisible, setBDVisible] = useState(false);
  const [photo, setPhoto] = useState([]);



    const setItems = (image) => {
        setPhoto(image);
        setBDVisible(false);
      };
    
    return (
        <Main navigation={navigation}>
        <View style={styles.container}>

        <View style={styles.photoPreview}>
            <TouchableOpacity
              style={styles.selectImageWrapper}
              >
               {(photo?.length !== 0 ) && (
                 <Image
                 source={{
                   uri:
                   photo?.uri ,
                  }}
                  style={styles.image}
                  />
                )}
             {(photo?.length === 0 ) && (<ImageCarouselPicker onSelect={setItems} visible={bdVisible} />)}
            </TouchableOpacity>
          </View>

        <View style={styles.userName}>
          <Text style={styles.userNameText}>
            {"userName"}
          </Text>
        </View>  

        </View>
      

        </Main>
    );
}
