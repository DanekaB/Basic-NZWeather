import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import * as React from 'react';
import './App.css';

interface IState {
  results: any,
  get_weather: any,
  weather: any[],
  temp:any[],
  city: any,
  country: any,
}

export default class App extends React.Component<{}, IState> {

  constructor(props: any) {
    super(props)
    this.state = {
      results: "",
      get_weather: this.getWeather.bind(this),
      weather: [],
      temp: [],
      city: "",
      country: "NZ",
    }
  }
  
  public getWeather (base64String: string) {
    const city = this.state.city;
    const country = this.state.country;

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&APPID=a633439c14b3c7b4a4e47fbf336c0af6', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      },
    })
    .then((response : any) => {
      if (!response.ok) {
        this.setState({weather: [], temp: [], results: "City not recognised"})
      }
      else {
        response.json().then((data:any) => this.setState({
          weather: data.weather,
          temp: [data.main],
          results: "",}))
      }
      return response
    })
  }

  public handleChange = (city: any) => (event:any) => {
    this.setState({
      city: event.target.value,
    });
  };
  
  public render(){

    return (
      <div className="container-fluid">
      <div className= "CardContent">
        <Card>
          <CardContent>
          <h1>
            Kia Ora, please enter the city you wish to search...
          </h1>
          <div className="textfield">
            <TextField 
              id="city"
              value={this.state.city}
              onChange={this.handleChange('city')}
              margin="normal"
            />
            <button onClick={this.state.get_weather}>Get weather</button>
          </div>
          </CardContent> 
            <div className="results"> 
            {
            this.state.results === "City not recognised" ? 
            <p>{this.state.results}</p> : <p>{this.state.results}</p> }
            <ul className="results">{this.state.weather.map((d:any) => <li key ={d.description}>{d.description}</li>)}
            </ul> 
            <ul className="results">{this.state.temp.map((d:any) => <li key ={d.temp_min}>Minimun Temperature: {d.temp_min}</li>)}
            </ul>
            <ul className="results">{this.state.temp.map((d:any) => <li key ={d.temp_max}>Maximum Temperature: {d.temp_max}</li>)}
            </ul>  
        </div>
        </Card>
    </div>
    </div>
    )
  }
  
};



