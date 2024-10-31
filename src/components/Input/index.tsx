import React, { forwardRef, LegacyRef } from "react";
import { TextInput, View, TextInputProps, Text, TouchableOpacity,StyleProp,TextStyle} from 'react-native';
import { MaterialIcons, FontAwesome, Octicons } from '@expo/vector-icons';
import { themas } from "../../global/themes";
import { style } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> | 
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRigth?: IconComponent,
    iconLeftName?: string,  
    iconRightName?: string, 
    title?: string,
    onIconLeftPress?: () => void, 
    onIconRigthPress?: () => void ,
    height?:number,
    labelStyle?:StyleProp<TextStyle>
}

export const Input = forwardRef((props: Props, ref: LegacyRef<TextInput> | null) => {
    const { IconLeft, IconRigth, iconLeftName, iconRightName, title, onIconLeftPress, onIconRigthPress, height,labelStyle,...rest } = props;

    const calculateSizeWidth = () => {
        if (IconLeft && IconRigth) {
            return '80%';
        } else if (IconLeft || IconRigth) {
            return '90%';
        } else {
            return '100%';
        }
    };

    const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRigth) {
            return 0;
        } else if (IconLeft || IconRigth) {
            return 10;
        } else {
            return 20;
        }
    };

    return (
        <>
            {title && <Text style={[style.titleInput,labelStyle]}>{title}</Text>}
            <View style={[style.boxInput, { paddingLeft: calculateSizePaddingLeft(),height:height?height:40,padding:5}]}>
                {IconLeft && iconLeftName && (
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={iconLeftName as any} size={20} color={themas.Colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput 
                    
                    style={[style.input, { width: calculateSizeWidth(),height:'100%'}]}
                    ref={ref}
                    multiline
                    {...rest}
                    
                />
                {IconRigth && iconRightName && (
                    <TouchableOpacity onPress={onIconRigthPress} style={style.Button}>
                        <IconRigth name={iconRightName as any} size={20} color={themas.Colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </>
    );
});
