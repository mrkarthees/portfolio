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

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromChildren(
			<Route path="Kartheeswaran/" element={<Routing />}>
				<Route index element={<Home />} />
				<Route path="Kartheeswaran/project" element={<Project />} />
				<Route path="Kartheeswaran/about" element={<About />} />
				<Route path="Kartheeswaran/contact" element={<Contact />} />
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
