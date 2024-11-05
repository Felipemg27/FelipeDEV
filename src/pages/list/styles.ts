import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        // justifyContent:'center'
    },
    header:{
        width:'100%',
        height:Dimensions.get('window').height/6,
        backgroundColor:themas.Colors.primary,
        alignItems:'center',
        //justifyContent:'center',
        paddingHorizontal:40,
        
    },
    greeting:{
        fontSize:25,
        fontWeight: 'bold',
        color:'black',
        marginTop:10
    },
    boxInput:{
        width:'80%',
        borderRadius:8,
        alignItems:'center',
        fontSize:16,
        padding:15,
        
    },
    boxList:{
        flex:1,
        width:'100%',
        backgroundColor:'gray',
    },
    card:{
        width:'100%',
        minHeight:60,
        backgroundColor:'#FFF',
        marginTop:6,
        borderRadius:10,
        justifyContent:'center',
        padding:10,
        borderWidth:1,
        borderColor:themas.Colors.lightGray,
    },
    rowCard:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        
    },
    titleCard:{
        fontSize:16,
        fontWeight:'bold',
        
        
    },
    descriptionCard:{
        color:themas.Colors.gray
    },
    rowCardLeft:{
        width:'70%',
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    Button: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        marginVertical: 10,
        borderRadius: 10,
    },
    ButtonText: {
        color: 'white',
        fontWeight: 'bold',
        
    },
    conta:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginTop:10,
        marginBottom:10
    }

})