import React, { useEffect } from "react";
import {BackHandler,View} from 'react-native';


export const BaseScreenView = ({ userInfo, navigation, children, style, onBackClick}) => {
    
    useEffect(() => {
        const backAction = () => {
    
            if (navigation && navigation.canGoBack()) {
                navigation.goBack();
            } else if (navigation && !navigation.canGoBack()) {
                BackHandler.exitApp();
            }

            if(onBackClick){
                onBackClick();
            }
            
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);



    return (
        <View style={style}>
            {children}
        </View>
        );


};
