import * as React from "react";
import {connect} from "react-redux";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import logo from "../logo.svg";
import {Container} from "rsuite";

class Home extends React.PureComponent {
	render() {
		return (
			<React.Fragment>
				<header className="App-header">
					{/*<img src={logo} className="App-logo" alt="logo"/>*/}
					<p>
						Edit <code>src/App.tsx</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</React.Fragment>
		);
	}
}

export default connect()(Home);
