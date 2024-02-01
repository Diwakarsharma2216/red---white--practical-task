
import AddProductPage from "./page/AddProductPage";
import Product from "./page/Product";



function App() {
  return (
   <>
     {/* <CategoryPage /> */}
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
