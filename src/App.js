import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a mi Proyecto"} />
    </div>
  );
}

export default App;
