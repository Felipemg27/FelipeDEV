import { StyleSheet,Dimensions} from "react-native";
import { themas } from "../../global/themes";

export const style =StyleSheet.create({
    TabArea:{
       height:80,
       backgroundColor:'#FFF',
       flexDirection:'row',
       borderTopColor: 'black',
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    TabItem:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    TabItemButton:{
        width:70,
        height:70,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        // borderWidth:1,
        top:-30,
        zIndex:9999,
        backgroundColor:themas.Colors.primary,
        // paddingHorizontal:20
    },
    row:{
        width:'100%',
        paddingHorizontal:2
    }
})