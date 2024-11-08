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
        justifyContent:'flex-start',
        padding:70,
        
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
         //backgroundColor:'red',
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
        color:themas.Colors.primary,
    },
    container_textinput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
       
        borderRadius: 40,
        height:40,
        width:Dimensions.get('window').width/1.2,
        paddingHorizontal:20,
        borderColor:themas.Colors.lightGray,
        backgroundColor:themas.Colors.bgScreen,
        borderWidth:1,

        

    
        
    },
    input_textinput: {
        flex: 1,
        color: '#333',
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 16,
        
    },
    icon_textinput: {
        // marginLeft: 10,
    },
})