import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromChildren,
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Routing from "./layout/Routing";
import Error from "./components/Error";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromChildren(
			<Route path="Kartheeswaran/" element={<Routing />}>
				<Route path="home" element={<Home />} />
				<Route path="project" element={<Project />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<Error />} />
			</Route>
		)
	);
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
