import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";


export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        // backgroundColor:'blue',
        width:'100%',
        paddingHorizontal:37,
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        // backgroundColor:'green',
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start'
        
    },
    boxInput:{
        width:'100%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        borderColor:themas.Colors.lightGray,
        backgroundColor:themas.Colors.bgScreen,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:30
    },
    logo:{
        width:80,
        height:80,
        marginTop:40
    },
    text:{
        marginTop:35,
        fontSize:18,
        fontWeight:'bold'
    },
    input:{
        // backgroundColor:'red',
        height:'100%',
        width:'100%',
        borderRadius:40,
        // paddingHorizontal:20
    },
    boxIcon:{
        width:50,
        height:50,
        backgroundColor:'red'
    },
    titleInput:{
        marginLeft:5,
        color:themas.Colors.gray,
        marginTop:20
    },
    textBottom:{
        fontSize:16,
        color:themas.Colors.gray
    },
    textBottomCreate:{
        fontSize:16,
        color:themas.Colors.primary
    }
})