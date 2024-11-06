import React,{ useState } from "react";
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {Text, View,Image, Alert, } from 'react-native'
import { useNavigation,NavigationProp  } from '@react-navigation/native';
import {MaterialIcons,Octicons,MaterialCommunityIcons} from '@expo/vector-icons';
import { TextInput } from "react-native-gesture-handler";


export default function Login (){
    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail]               = useState('');
    const [password,setPassword]         = useState('');
    const [showPassword,setShowPassword] = useState(false);
    const [loading,setLoading]           = useState(false)


    async function getLogin() {
        setLoading(true)
        try {
            
            if(!email ||!password){
                return Alert.alert('Anteção 2','Informe os campos obrigatórios!')
            }
            navigation.reset({routes:[{name :'BottomRoutes'}]});
        } catch (error) {
            console.log(error)
        }finally{
        }
        setLoading(false)
    }


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo} 
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input 
                    title="ENDEREÇO E-MAIL"
                    value={email}
                    onChangeText={setEmail}
                    IconRigth={MaterialIcons}
                    iconRightName="email"
                    
                />
                
            
        
                    
            </View>
            <View style={style.container_textinput}>
            <TextInput style={style.input_textinput}
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry={showPassword}
                    
                    
                    
                
                />
                <MaterialCommunityIcons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color="#aaa"
                    style={style.icon_textinput}
                    onPress={()=>setShowPassword(atual=>!atual)}
                
                
                />



            </View>
            <View style={style.boxBottom}>
                <Button  text="ENTRAR" loading={loading} onPress={()=>getLogin()}/>
            </View>
            
        </View>
    )
}