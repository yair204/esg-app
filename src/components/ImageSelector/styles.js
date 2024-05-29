import { StyleSheet } from "react-native";
import theme from "../../theme";
// import { isIos } from '../../i18n/index';

export const styles = StyleSheet.create({
    backdropWrapper: {
        paddingHorizontal: 16,
        // paddingBottom: 10,
    },

    backdropTitleText:{
        fontSize: 16,
        lineHeight: 48,
        color: theme.colors.title,
        marginBottom: 16,
        borderBottomColor: 'rgba(147,161,161,0.27)',
        borderBottomWidth: 1,
        textAlign: 'center'
    },

    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#e2e5e5',
        flex: 1
    },

})