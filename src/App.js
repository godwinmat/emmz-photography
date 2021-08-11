import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import home from "./pages/Home/Home";
import work from "./pages/Work/Work";
import contact from "./pages/Contact/Contact";

import Children from "./pages/Children/children";
import Portrait from "./pages/Portrait/portrait";
import Wedding from "./pages/Wedding/wedding";
import Creative from "./pages/Creative/creative";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={home} />
				<Route path="/work" exact component={work} />
				<Route path="/contact" exact component={contact} />
				<Route path="/work/creative" exact component={Creative} />
				<Route path="/work/portrait" exact component={Portrait} />
				<Route path="/work/children" exact component={Children} />
				{/* <Route path="/work/event" exact component={Event} />  */}
				<Route path="/work/wedding" exact component={Wedding} />
			</Switch>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;
