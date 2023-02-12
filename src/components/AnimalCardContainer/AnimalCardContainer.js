import React from "react";
import AnimalCard from "../AnimalCard/AnimalCard";

const cards = [
    {
        name: "Chick",
        img: "chick1"
    },
    {
        name: "Chick",
        img: "chick2"
    },
    {
        name: "Chick",
        img: "chick3"
    }
];

const animalsCards = cards.map(card => {
    return <AnimalCard name={card.name} img={card.img}></AnimalCard>
})


class AnimalCardContainer extends React.Component {
    render(){
        return(
            <div className="d-flex justify-content-center">
                {animalsCards}
            </div>
        )
    }
}

export default AnimalCardContainer;