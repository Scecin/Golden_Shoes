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
  
  return (
    <>
      {appState === "HomePageContainer" && <HomePageContainer setAppState={setAppState}/>}
      {appState === "WomenHomeContainer" && <WomenHomeContainer setAppState={setAppState}/>}
      {appState === "MenHomeContainer" && <MenHomeContainer setAppState={setAppState}/>}
      {appState === "KidsHomeContainer" && <KidsHomeContainer setAppState={setAppState}/>}
      {appState === "WomenAllStylesContainer" && <WomenAllStylesContainer setAppState={setAppState}/>}
      {appState === "ProductPageContainer" && <ProductPageContainer setAppState={setAppState}/>}
      {appState === "FaqsContainer" && <FaqsContainer setAppState={setAppState}/>}
      {appState === "ContactUsContainer" && <ContactUsContainer setAppState={setAppState}/>}
      {appState === "ShoppingBagContainer" && <ShoppingBagContainer setAppState={setAppState}/>}
    </>
  );
}

export default App;
