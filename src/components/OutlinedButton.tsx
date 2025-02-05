import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import colors from "../styles/colors";

interface OutlinedButtonProps {
    title: string;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({title}) => {
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
        margin: 5,
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        width: '90%',
       backgroundColor: colors.outlined
    },
    text: {
        color: colors.black,
        fontSize: 14
    }
})

export default OutlinedButton;