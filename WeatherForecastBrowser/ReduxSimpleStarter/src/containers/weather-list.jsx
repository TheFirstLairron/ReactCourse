import React from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';

class WeatherList extends React.Component {
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hPa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }

    renderWeather(city) {
        const NAME = city.city.name;
        const TEMPS = city.list.map(weather => weather.main.temp);
        const PRESSURES = city.list.map(weather => weather.main.pressure);
        const HUMIDITY = city.list.map(weather => weather.main.humidity);

        const { lon, lat } = city.city.coord;


        return (
            <tr key={NAME}>
                <td>
                    <GoogleMap lon={lon} lat={lat}/>
                </td>
                <td>
                    <Chart data={TEMPS} color="orange" units="K"/>
                </td>
                <td>
                    <Chart data={PRESSURES} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={HUMIDITY} color="black" units="%"/>
                </td>
            </tr>
        )
    }
}

function mapStateToProps({ weather }) {
    return {
        weather
    }
}

export default connect(mapStateToProps)(WeatherList);