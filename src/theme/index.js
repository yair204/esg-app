import { Dimensions } from "react-native";

export default theme = {
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
  colors: {
    mainBlue: "#6273f0",
    greyAlpha: "rgba(239,239,244,0.7)",
    grey: "#cbd2d9",
    white: "#fff",
    black: "#000",
    transparent: "transparent",
    title: '#002b36',
    subtitle: '#002B36',
    phoneBackground: '#F7F8FF'
  },
  fontFamily: {
    regular: "Cochin",
    bold: "Cochin",
    light: "Cochin",
    medium: "Cochin",
    extraBold: "Cochin",
    extraLight: "Cochin",
    thin: "Cochin",
  },
  fontSize: {
    large: 42,
    medium: 24,
    normal: 14
  }
}