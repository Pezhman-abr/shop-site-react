import { Navigate, Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import DetailsPage from "./pages/DetailsPage"
import CheckoutPage from "./pages/CheckoutPage"
import PageNotFound from "./pages/404"
import ProductsProvider from "./context/ProducContext"
import CardProvider from "./context/CardContext"
import Layout from "./layout/layout"


function App() {


  return (
  <CardProvider>
    <ProductsProvider>
      <Layout>
        <Routes>
          <Route index element={<Navigate to="/products" replace/>} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/*" element={<PageNotFound />}/>
        </Routes>
      </Layout>
    </ProductsProvider>
  </CardProvider>

  )
}

export default App
