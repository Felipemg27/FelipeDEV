
import React,{useContext} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';
import {Ionicons,FontAwesome,Entypo,AntDesign,MaterialIcons} from '@expo/vector-icons';
import { style } from "./styles";
import { themas } from '../../global/themes';
import {AuthContextList}   from "../../context/authContext_list";

export default({state,navigation})=>{

    const {onOpen} = useContext<any>(AuthContextList);

    const go=((screenName:string)=>{
        navigation.navigate(screenName);
    })

    return(
        <View style={style.TabArea}>
            <TouchableOpacity  style={style.TabItem} onPress={()=>go('List')}>
                <AntDesign 
                    name="bars"  
                    style={{opacity:state.index===0?1:0.5,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>
            <TouchableOpacity  
                style={style.TabItemButton} 
                // onPress={()=>onOpen()}
                onPress={(event) => {
                    event.persist();
                    onOpen();
                }}
            >
                <View style={{width:'100%',left:10,top:4}}>
                    <Entypo 
                        name="plus"  
                        style={{color:'#FFF'}}
                        size={40}
                    />
                </View>
                <View style={{flexDirection:'row-reverse',width:'100%',right:10,bottom:10}}>
                    <MaterialIcons 
                        name="edit"  
                        style={{color:'#FFF'}}
                        size={30}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.TabItem} onPress={()=>go('User')}>
                <FontAwesome 
                    name="user-circle-o"  
                    style={{opacity:state.index===1?1:0.2,color:themas.Colors.primary,fontSize:32}}
                />
            </TouchableOpacity>
        </View>
    );
}

