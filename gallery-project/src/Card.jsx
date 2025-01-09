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
import img26 from "./assets/images/group-of-cats.jpg";
import img27 from "./assets/images/wind-girl.jpg";
import img28 from "./assets/images/flowers-2.jpg";
import img29 from "./assets/images/po.jpg";
import img30 from "./assets/images/lama.jpg";
import img31 from "./assets/images/anime-girl.jpg";
import img32 from "./assets/images/istanbul-villa.jpg";
import img33 from "./assets/images/some-woman.jpg";
import img34 from "./assets/images/child-painting.jpg";
import img35 from "./assets/images/girl-7.jpg";
import img36 from "./assets/images/combust.jpg";
import img37 from "./assets/images/pooh-2.jpg";
import img38 from "./assets/images/church.jpg";
import img39 from "./assets/images/city.jpg";
import img40 from "./assets/images/mjolnir.jpg";
import img41 from "./assets/images/jerry.jpg";
import img42 from "./assets/images/sea.jpg";
import img43 from "./assets/images/otter-heart.jpg";
import img44 from "./assets/images/istanbul-view.jpg";
import img45 from "./assets/images/hades.png";
const cardData = [
  {
    title: "Lil Birdy",
    imgSrc: img1,
    description: "This bird is from 1995",
  },
  {
    title: "Pooh",
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
  {
    title: "Cat Gossip",
    imgSrc: img26,
    description: "Group of Cats",
  },
  {
    title: "Wind Woman",
    imgSrc: img27,
    description: "Hair Flying",
  },
  {
    title: "Flowers",
    imgSrc: img28,
    description: "Lego-like Flowers",
  },
  {
    title: "Po",
    imgSrc: img29,
    description: "Dragon Guy Resting",
  },
  {
    title: "Llama",
    imgSrc: img30,
    description: "We Have a Farm",
  },
  {
    title: "Romantic Girl",
    imgSrc: img31,
    description: "Is She Crying",
  },
  {
    title: "Istanbul Villa",
    imgSrc: img32,
    description: "Very Expensive",
  },
  {
    title: "Mustard Gal",
    imgSrc: img33,
    description: "Yellow Summer Dress",
  },
  {
    title: "Heart Tree",
    imgSrc: img34,
    description: "Knock-off of Ygdrassil",
  },
  {
    title: "Short Hair Girl",
    imgSrc: img35,
    description: "Don't cut your hair like this",
  },
  {
    title: "Combustion Guy",
    imgSrc: img36,
    description: "Avatar",
  },
  {
    title: "Pooh Number 2",
    imgSrc: img37,
    description: "Special Cat",
  },
  {
    title: "Church",
    imgSrc: img38,
    description: "Yeah",
  },
  {
    title: "Taksim",
    imgSrc: img39,
    description: "Memories",
  },
  {
    title: "Mjolnir",
    imgSrc: img40,
    description: "Thunder God",
  },
  {
    title: "Albino Jerry",
    imgSrc: img41,
    description: "Yeah",
  },
  {
    title: "Odin Death",
    imgSrc: img42,
    description: "Looks Like It",
  },
  {
    title: "Otter With Hearts",
    imgSrc: img43,
    description: "Cuteness",
  },
  {
    title: "Window to Greece",
    imgSrc: img44,
    description: "Beautiful Eh",
  },
  {
    title: "Zagreus",
    imgSrc: img45,
    description: "The Flame Licked Guy",
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
