import React from "react";
import img1 from "./assets/images/bird.jpg";
import img2 from "./assets/images/black-cat.jpg";
import img3 from "./assets/images/boy-figure.jpg";
import img4 from "./assets/images/cat-bubble.jpg";
import img5 from "./assets/images/cat-playing.jpg";
import img6 from "./assets/images/cotton-flower.jpg";
import img7 from "./assets/images/female-figure.jpg";
import img8 from "./assets/images/female-figure-2.jpg";
import img9 from "./assets/images/female-figure-3.jpg";
import img10 from "./assets/images/female-figure-4.jpg";
import img11 from "./assets/images/female-figure-5.jpg";
import img12 from "./assets/images/flowers.jpg";
import img13 from "./assets/images/ice-cream.jpg";
import img14 from "./assets/images/ice-cream-2.jpg";
import img15 from "./assets/images/night-view.jpg";
import img16 from "./assets/images/noodles.jpg";
import img17 from "./assets/images/otter.jpg";
import img18 from "./assets/images/plant-pot.jpg";
import img19 from "./assets/images/side-profile-woman.jpg";
import img20 from "./assets/images/sitting-cat.jpg";
import img21 from "./assets/images/sleeping-cat.jpg";
import img22 from "./assets/images/snow-tree.jpg";
import img23 from "./assets/images/tree-bark.jpg";
import img24 from "./assets/images/view.jpg";
import img25 from "./assets/images/yone.jpg";

const cardData = [
  {
    title: "Lil Birdy",
    imgSrc: img1,
    description: "This bird is from 1995",
  },
  {
    title: "Poh",
    imgSrc: img2,
    description: "Very special cat",
  },
  {
    title: "Some Dude",
    imgSrc: img3,
    description: "Bro thinks hes slick",
  },
  {
    title: "Snacky Dream",
    imgSrc: img4,
    description: "Two cats cookin something",
  },
  {
    title: "Surprised Cat",
    imgSrc: img5,
    description: "It needs more toys",
  },
  {
    title: "Cotton",
    imgSrc: img6,
    description: "No need for description",
  },
  {
    title: "Shady 92",
    imgSrc: img7,
    description: "I'm running out of ideas",
  },
  {
    title: "Familiarity",
    imgSrc: img8,
    description: "I know her from somewhere",
  },
  {
    title: "Non Familiarity",
    imgSrc: img9,
    description: "I don't know her",
  },
  {
    title: "Nonon Familiarity",
    imgSrc: img10,
    description: "No idea",
  },
  {
    title: "Picasso",
    imgSrc: img11,
    description: "(Not)",
  },
  {
    title: "Elegant",
    imgSrc: img12,
    description: "Pretty flowers",
  },
  {
    title: "Ice Cream",
    imgSrc: img13,
    description: "Mmmm",
  },
  {
    title: "Ice Cream?",
    imgSrc: img14,
    description: "Mm?",
  },
  {
    title: "Starry Night",
    imgSrc: img15,
    description: "(Not)",
  },
  {
    title: "Tasty",
    imgSrc: img16,
    description: "MMMMMMMMM",
  },
  {
    title: "Otter",
    imgSrc: img17,
    description: "We're looking at sea otters",
  },
  {
    title: "Potter",
    imgSrc: img18,
    description: "Harry",
  },
  {
    title: "Pretty Pink",
    imgSrc: img19,
    description: "Definitely don't know this one",
  },
  {
    title: "Kitten",
    imgSrc: img20,
    description: "A very smol one",
  },
  {
    title: "Eep",
    imgSrc: img21,
    description: "This one is eeping",
  },
  {
    title: "Favorite Season",
    imgSrc: img22,
    description: "Pretty Tree",
  },
  {
    title: "Oops",
    imgSrc: img23,
    description: "Winter haters did this",
  },
  {
    title: "Swamp",
    imgSrc: img24,
    description: "Get outta my swomp",
  },
  {
    title: "Bankai",
    imgSrc: img25,
    description: "Senbonzakura kageyoshi",
  },
];

const Card = () => {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <div key={index} className="card">
          <h2 className="card-title">{card.title}</h2>
          <img className="card-image" src={card.imgSrc} alt={card.title} />
          <p className="card-text">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
