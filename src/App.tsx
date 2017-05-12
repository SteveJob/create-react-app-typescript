import * as React from 'react';
import './App.css';
const logo = require('./logo.svg');

import Header from './scripts/components/Header';

class App extends React.Component<{}, null> {
    render() {
        return (
            <div className="App">
                <Header hasUser="Steve"/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
            </div>
        );
    }
}

export default App;
