import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "./Card";
import { CardData } from "../data/CardTypes";

interface CardListProps {
  cardsData: CardData[]
}

const CardList: React.FC<CardListProps> = ({
  cardsData: cardsData
}) => {
  return (
    <View >
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
      {cardsData.map((card: CardData, index: number) =>
        <Card text={card.text} key={index}></Card>
      )}
    </ScrollView>
    </View>
  );
};

export default CardList;
