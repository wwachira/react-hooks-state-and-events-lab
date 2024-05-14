import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  //defaul logic value to always render light mode
  const appClass = false ? "App dark" : "App light"
//the button is meant to toggle
//itemData is passed on as props
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
