import React from 'react'
import { Text } from 'react-native'

type CardProps = {
    text: string
  }

const Card = (props: CardProps) =>{
    const {text} = props
    return (
        <Text>{text}</Text>
    )
}

export default Card