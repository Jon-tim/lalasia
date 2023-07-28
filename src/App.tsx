import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Navbar from "./components/large/Navbar";
import Footer from "./components/large/Footer";
import SingleProduct from "./pages/SingleProduct";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/products"
					element={<Products />}
				/>
				<Route
					path="/products/:id"
					element={<SingleProduct />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/articles"
					element={<Articles />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
