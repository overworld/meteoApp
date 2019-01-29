import React, {Component} from 'react';
import Form from "./App";


class result extends Component {

    constructor() {
        super();

    }

    render() {

        let weather = [];

        for (let i = 0; i < this.props.data.weather.length; i++) {
            let picto = 'http://openweathermap.org/img/w/';
            weather.push(
                <div>
                    <span>{this.props.data.name}</span>
                    <br/>
                    <span>{this.props.data.sys.country}</span>
                    <br/>
                    <span>{this.props.data.weather[i].main}</span>
                    <br/>
                    <span>{this.props.data.weather[i].description}</span>
                    <br/>
                    <img src={picto + this.props.data.weather[i].icon + ".png"}/>
                </div>
            )
        }

        return (
            <div className="App">
                {weather}
            </div>
        );
    }

}

export default result;