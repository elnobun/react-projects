import Announcement from "./components/Announcement";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Slider from "./components/Slider";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<Announcement />
			<Home />
			<Slider />
			<Categories />
			<Products />
		</div>
	);
}

export default App;
