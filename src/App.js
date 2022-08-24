import './App.css';
import { useState } from 'react';
import HomePageContainer from './containers/HomePageContainer'
import WomenHomeContainer from './containers/WomenHomeContainer'
import MenHomeContainer from './containers/MenHomeContainer'
import KidsHomeContainer from './containers/KidsHomeContainer'
import WomenAllStylesContainer from './containers/WomenAllStylesContainer';
import ProductPageContainer from './containers/ProductPageContainer';
import FaqsContainer from './containers/FaqsContainer';
import ContactUsContainer from './containers/ContactUsContainer';
import ShoppingBagContainer from './containers/ShoppingBagContainer';

function App() {

  const [appState, setAppState] = useState ("HomePageContainer")
  const [shoes, setShoes] = useState ([
    {name: "Orianna Derby Chestnut", style: "Women Shoes", price:"£79.99", color: "Pink", img: "/images/women_shoes.jpg", description: "A super-chunky sole is the on-trend finishing touch to chic burgundy leather lace-up Orianna Derby. Perfectly balancing style and practicality, this low-profile shoe is designed for all-day comfort wear, with the rugged rubber sole adding maximum grip and durability. Minimal side stitching adds to the authentically crafted aesthetic"},
    {name: "Memi Zip Dark Tan Leather", style: "Women Boots", price: "£99.99", color: "Camel", img: "/images/women_boots.jpg", description: "A contemporary chunky heel adds an on-trend twist to versatile ankle boot Memi Zip. Combining premium dark tan leather with the deep comfort of a Cushion Plus™ footbed, its elegant lines and discreet zip make it a cool and wearable autumn/winter wardrobe update."},
    {name:"Seren Soft Black Leather", style:"Women Heels", price:"£89.99", color:"Black", img:"/images/women_shoes2.jpg", description:"A modern classic, our black Seren 55 Soft court shoe blends a luxurious leather upper with an elegant square toe and plush underfoot cushioning set on a wide, slimline heel. From evening-ready elegance to owning the office, it’s a heel made for living."},
    {name:"Manilla Bonita Silver Leather", style:"Women Sandals", price:"£59.99", color:"Silver", img:"/images/women_sandals.jpg", description:"Manilla Bonita, womens silver sandals, in leather - Made from a shimmering silver leather, these strappy women's sandals feature matching stud detail for added interest. The low 2.5cm heel offers subtle elevation to everyday wear, while the buckle fastening provides a secure fit and the soft sock lining and Cushion Soft™ foam layers ensure feet are comfortable."},
    {name:"Craft Cup Mid White Leather", style:"Women Boot Trainers", price:"£89.99", color:"White", img:"/images/women_trainers.jpg", description:"Inspired by vintage basketball sneakers, high-top trainer Craft Cup Mid combines bright white leather with retro perforations and a classic rubber cupsole for a court-style aesthetic – wherever you wear them. Created with flexibility and cushioning, too, it's a style and comfort slam dunk."}
  ])
  const [selectedShoe, setSelectedShoe] = useState(null)

  const onShoeClick = ((shoe) => {
    setSelectedShoe(shoe)
  })

  return (
    <>
      {appState === "HomePageContainer" && <HomePageContainer setAppState={setAppState}/>}
      {appState === "WomenHomeContainer" && <WomenHomeContainer setAppState={setAppState}/>}
      {appState === "MenHomeContainer" && <MenHomeContainer setAppState={setAppState}/>}
      {appState === "KidsHomeContainer" && <KidsHomeContainer setAppState={setAppState}/>}
      {appState === "WomenAllStylesContainer" && <WomenAllStylesContainer setAppState={setAppState} shoes={shoes} onShoeClick={onShoeClick}/>}
      {appState === "ProductPageContainer" && <ProductPageContainer setAppState={setAppState} selectedShoe={selectedShoe}/>}
      {appState === "FaqsContainer" && <FaqsContainer setAppState={setAppState}/>}
      {appState === "ContactUsContainer" && <ContactUsContainer setAppState={setAppState}/>}
      {appState === "ShoppingBagContainer" && <ShoppingBagContainer setAppState={setAppState}/>}
    </>
  );
}

export default App;
