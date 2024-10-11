import { Footer } from "./Components/Footer";
import Main from "./Components/Main";
import Message from "./Components/Message";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import StoreDetail from "./Components/StoreDetail";

function App() {
  return (
      <>
        <Navbar />
        <Main />
        <StoreDetail/>
        <Message />
        <Products />
        <Footer />
      </>
  );
}

export default App;
