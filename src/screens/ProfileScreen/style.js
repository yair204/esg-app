import { StyleSheet } from "react-native";

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
        flexDirection: "row",
        marginBottom: 15,
        justifyContent: 'center'
    },

    image: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    selectImageWrapper: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
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


})