import React, {Component} from 'react';
import Form from './form';
import Result from './result';

import './App.css';

class App extends Component {

    constructor() {
        super();

        this.state = {

            data: null
        }
    }


    onData(data) {


        let url = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=47662866449dfa871ce12fb8f6394f78";
        let url2 = "https://api.openweathermap.org/data/2.5/weather?lat=";
        console.log('DATA TYPE', data.type);
        if (data.type === "geo") {
            navigator.geolocation.getCurrentPosition((position) => {
                fetch(url2 + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=47662866449dfa871ce12fb8f6394f78").then(rawData => {
                    rawData.json().then(value => {
                        console.log("Json value", value);
                        this.setState({
                            data: value
                        });
                    });
                })
            });

        } else (

            fetch(url).then(rawData => {
                rawData.json().then(value => {
                    console.log("Json value", value);
                    this.setState({
                        data: value
                    });
                });
            })
        );
        console.log("data", data);


    }

    render() {
        return (
            <div className="App">

                <Form onData={data => this.onData(data)}/>
                {this.state.data && <Result data={this.state.data}/>}
            </div>

        );
    }
}

export default App;
