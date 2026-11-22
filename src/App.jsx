import { useState } from "react";
import Header from "./component/Header";
import NoticeArea from "./component/NoticeArea"
import FlavorList from "./component/FlavorList";
import OrderSummary from "./component/OrderSummary"
import "./App.css";


function App() {
  const [flavors, setFlavors] = useState([
    { name: "Vanilla", isSoldOut: true, scoopsSelected: 0,  availableScoops:0 },
    { name: "Chocolate", isSoldOut: false, scoopsSelected: 0 ,availableScoops:5},
    { name: "Strawberry", isSoldOut: false, scoopsSelected: 0 ,availableScoops:2},
    { name: "Pistachio", isSoldOut: false, scoopsSelected: 0 ,availableScoops:4},
    { name: "Cookie Dough", isSoldOut: false, scoopsSelected: 0 ,availableScoops:6},
  ]);
  const scoopLimit=5;
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const totalScoops = flavors.reduce((sum, item) => {
    return sum + item.scoopsSelected;
  }, 0);
  const pricePerScoop = 5;
  const totalPrice = totalScoops * pricePerScoop;

  return (
    <>
    <Header/>
    <div className="notice-area">
    <NoticeArea
    totalScoops={totalScoops}
    scoopLimit={scoopLimit}/>
    </div>
   <div className="flavor-list"> 
    <FlavorList
    flavors={flavors}
    showOnlyAvailable={showOnlyAvailable}
    setShowOnlyAvailable={setShowOnlyAvailable}
    setFlavors={setFlavors}
    totalScoops={totalScoops}
    scoopLimit={scoopLimit}
    /></div>
    <div className="order-summary">
    <OrderSummary
    totalScoops={totalScoops}
    totalPrice={totalPrice}
    />
    </div>
    </>
  );
}

export default App;
