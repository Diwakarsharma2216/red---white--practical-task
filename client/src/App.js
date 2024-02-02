
import Navbar from "./compoent/Navbar";
import AddProductPage from "./page/AddProductPage";
import CartPage from "./page/CartPage";
import CategoryPage from "./page/CategoryPage";
import Product from "./page/Product";



function App() {
  return (
   <>
    <Navbar />
    
      <AddProductPage /> 
       
 
      <hr
        style={{
          margin:"15px",
          borderColor: 'red', // Replace with your desired color
          borderWidth: '2px', // Replace with your desired border width
        }}
      />
    


    
    

<Product />


{/* <CartPage /> */}
   </>
     
  );
}

export default App;
