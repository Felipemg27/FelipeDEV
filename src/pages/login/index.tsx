import React,{ useState } from "react";
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {Text, View,Image, Alert, } from 'react-native'
import { useNavigation,NavigationProp  } from '@react-navigation/native';
import {MaterialIcons,Octicons} from '@expo/vector-icons';

export default function Login (){
    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail]               = useState('');
    const [password,setPassword]         = useState('');
    const [showPassword,setShowPassword] = useState(true);
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
                
            
                <Input 
                    onChangeText={setPassword}
                    title="SENHA"
                    value={password}
                    IconRigth={Octicons}
                    iconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRigthPress={()=>setShowPassword(!showPassword)}
                />

                    
                
                    
            </View>
            <View style={style.boxBottom}>
                <Button  text="ENTRAR" loading={loading} onPress={()=>getLogin()}/>
            </View>
            
        </View>
    )
}