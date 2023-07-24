import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { Header } from "./components";
import { About, Home, NotFound, Suggest } from "./pages";

const App = () => (
	<main role="main">
		<Header />
		<section>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/suggest" element={<Suggest />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</section>
	</main>
);

export default App;
