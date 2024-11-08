import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escurecido para destaque
    },
    container: {
        width: '80%',
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        alignItems: 'center',
    },
    dateText: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
})