import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Articles from "./pages/Articles";
import About from "./pages/About";

function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}

export default App;
