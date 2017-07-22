import React from 'react';


export default class GoogleMap extends React.Component {
    render() {

        // this.refs.map vvvvvvvv
        return (
            <div ref="map"></div>
        );
    }

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
}