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
import MenAllStylesContainer from './containers/MenAllStylesContainer';
import KidsAllStylesContainer from './containers/KidsAllStylesContainer';
import womenShoes from './data/womenShoes';
import menShoes from './data/menShoes';
import kidsShoes from './data/kidsShoes';
function App() {

  const [appState, setAppState] = useState ("HomePageContainer")
  const [selectedShoe, setSelectedShoe] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [basketList, setBasketList] = useState([])

  const onShoeClick = ((shoe) => {
    setSelectedShoe(shoe)
  })

  const addShoeBasket = (selectedShoe) => {
      const basketListCopy = [...basketList]
      basketListCopy.push(selectedShoe)
      setBasketList(basketListCopy)
  }

  const deleteShoeBasket = (selectedShoe) => {
    const basketListCopy = [...basketList]
    const indexToRemove = basketListCopy.indexOf(selectedShoe)
    basketListCopy.splice(indexToRemove, 1)
    setBasketList(basketListCopy)
  }

  const totalItems = basketList.length

  return (
    <>
      {appState === "HomePageContainer" && <HomePageContainer setAppState={setAppState} totalItems={totalItems}/>}
      {appState === "WomenHomeContainer" && <WomenHomeContainer setAppState={setAppState} totalItems={totalItems}/>}
      {appState === "MenHomeContainer" && <MenHomeContainer setAppState={setAppState} totalItems={totalItems}/>}
      {appState === "KidsHomeContainer" && <KidsHomeContainer setAppState={setAppState} totalItems={totalItems}/>}
      {appState === "WomenAllStylesContainer" && <WomenAllStylesContainer setAppState={setAppState} womenShoes={womenShoes} onShoeClick={onShoeClick} totalItems={totalItems}/>}
      {appState === "MenAllStylesContainer" && <MenAllStylesContainer setAppState={setAppState} menShoes={menShoes} onShoeClick={onShoeClick} totalItems={totalItems}/>}
      {appState === "KidsAllStylesContainer" && <KidsAllStylesContainer setAppState={setAppState} kidsShoes={kidsShoes} onShoeClick={onShoeClick} totalItems={totalItems}/>}
      {appState === "ProductPageContainer" && <ProductPageContainer setAppState={setAppState} selectedShoe={selectedShoe} addShoeBasket={addShoeBasket} totalItems={totalItems} showModal={showModal} setShowModal={setShowModal}/>}
      {appState === "FaqsContainer" && <FaqsContainer setAppState={setAppState} totalItems={totalItems}/>}
      {appState === "ContactUsContainer" && <ContactUsContainer setAppState={setAppState} totalItems={totalItems}/>}
      {appState === "ShoppingBagContainer" && <ShoppingBagContainer setAppState={setAppState} basketList={basketList} deleteShoeBasket={deleteShoeBasket} totalItems={totalItems}/>}
    </>
  );
  }
export default App;
