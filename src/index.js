import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {
    constructor (props) {
        super(props);

        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (err) => console.log(err.code, err.message)
        );
        
    }



    render() {


    
        return (
        <div>
            Latitude: {this.state.lat}
         <SeasonDisplay/>   
        </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
