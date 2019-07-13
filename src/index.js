import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    state = {lat: null, errMessage: ''};

    componentDidMount () {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errMessage: err.message})
        );
    }


    render() {
        return (
        <div>
            {this.state.errMessage ? `Error: ${this.state.errMessage}` : this.state.lat ? `Latitude: ${this.state.lat}` : <div>Loading...</div>}
         <SeasonDisplay/>   
        </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
