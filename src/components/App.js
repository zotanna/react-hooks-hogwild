import React from "react";
import Nav from "./Nav";
import HogList from "./HogList"
import hogs from "../porkers_data";
import "../../src/index.css"

function App() {
	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogs}/>
		</div>
	);
}

export default App;