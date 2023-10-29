import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "./Card";
import { CardData } from "../data/CardType";

interface CardListProps {
  cardsData: CardData[]
}

const CardList: React.FC<CardListProps> = ({
  cardsData: cardsData
}) => {
  return (
    <ScrollView contentContainerStyle={styles.cardContainerList}>
      {cardsData.map((card: CardData, index: number) =>
        <Card text={card.text} key={index}></Card>
      )}
    </ScrollView>
  );
};

export default CardList;

const styles = StyleSheet.create({
    cardContainerList: {
        backgroundColor: "#43D6F5",
        justifyContent: 'center',
        alignItems: 'center',
    }
})

