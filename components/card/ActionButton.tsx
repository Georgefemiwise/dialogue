import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons' // Adjust the import path based on your project structure

interface SomeButtonProps {
    name: string
    icon: any
}

const SomeButton: React.FC<SomeButtonProps> = ({ name, icon }) => (
    <View style={styles.container}>
        <Entypo name={icon} size={20} style={styles.icon} />
        <Text>{name}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        margin: 5,
    },
})

export default SomeButton
