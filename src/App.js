import "./App.css";
import Github from "./components/signin/Github";
import Google from "./components/signin/Google";

function App() {
	return (
		<div className="App">
			<Google />
			<Github />
		</div>
	);
}

export default App;
