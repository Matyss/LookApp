import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import persistState from 'redux-localstorage';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

//Material-UI config
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//Components imported
import Main from './components/Main';
import HistoryLookup from './components/HistoryLookup';

injectTapEventPlugin();

const createStoreWithMiddleware = composeWithDevTools(
	persistState(),
	applyMiddleware(ReduxPromise)
)(createStore);

const NoMatch = () =>
	<div>
		<h3>Sorry, page not found</h3>
	</div>;

ReactDOM.render(
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<div>
					<Switch>
						<Route path="/history" component={HistoryLookup} />
						<Route path="/" exact component={Main} />
						<Route component={NoMatch} />
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	</MuiThemeProvider>,
	document.getElementById('root')
);
