import React from "react";
import {
    View,
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import colors from "../styles/colors";

interface PrimaryButtonProps {
    title: string;
}

const  PrimaryButton: React.FC<PrimaryButtonProps> = ({title}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: colors.primary,
        margin: 5,
        width: '90%',
    
    },

    text: {
        color: colors.textPrimary,
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default PrimaryButton;