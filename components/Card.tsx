import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface CardProps {
    text: string
}

const Card = (props: CardProps) =>{
    const {text} = props
    return (
        <View style={styles.cardContainer}>
            <Text>{text}</Text>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        // flexDirection: 'row',
        padding: 20,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        borderRadius: 20,
        marginVertical: 10,
        borderWidth: 1,
        borderColor:'black',
        borderStyle: 'solid',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
})