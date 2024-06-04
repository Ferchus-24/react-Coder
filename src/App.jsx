import { Navbar } from "./components/Navbar";
import { ItemListContainer } from "./components/ItemListContainer";
import "./css/main.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
    </div>
  );
};

export default App;
