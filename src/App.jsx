import {
	Route,
	RouterProvider,
	Routes,
	createBrowserRouter,
	createRoutesFromChildren,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Routing from "./layout/Routing";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
	return (
		<>
		<Navbar />
		<div className="app-container">
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="project" element={<Project />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Routes>
			
		</div>
		
		<Footer />
		</>
	);
};

export default App;
