import React, { Component } from 'react';
import './App.css';

class WeatherApp extends Component {

    constructor(props){

        super(props);
        this.state = {temp:0, desc:'', icon:'', humidity:0, windSpeed: 0, windDegrees: 0, loading: true}

    }

    componentDidMount(){

        fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=Metric&APIkey=41a900a0bff33f05291580c4ad583fc4')
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                temp: responseData.main.temp,
                desc: responseData.weather[0].description,
                icon: responseData.weather[0].icon,
                windSpeed: responseData.wind.speed,
                windDegrees: responseData.wind.deg,
                humidity: responseData.main.humidity,
                loading: false
             })
        })
        .catch(error => console.log(error));

    }

    render() {

        if (this.state.loading){
            return <p> App is loading </p>;          
        }

        else{
            const imgSrc= 'http://openweathermap.org/img/w/'+this.state.icon+'.png';

            return (
                <div className='App'>
                    <p> Temprature: {this.state.temp} C</p>
                    <p> Description: {this.state.desc} </p>
                    <p> Humidity: {this.state.humidity} </p>
                    <img src={imgSrc} alt="Weather Icon"/>
                    <p> Wind Degrees: {this.state.windDegrees} </p>
                    <p> Wind Speed: {this.state.windSpeed} </p>
                </div>
            )
        }
    }
}

export default WeatherApp;
