var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    
    getInitialState: function() {
        return{
            isLoading: false    
        }
    },
    
    handleSearch: function(location){
        var that = this;
        
        this.setState({isLoading: true});
        //promise
        openWeatherMap.getTemp(location).then(function(temp) {           
            that.setState({
                isLoading: false,
                location: location,
                temp: temp,
            });
        }, function(err){ 
            that.setState({isLoading: false});
            alert(err);           
        });
    },
    
    render: function() {
        var {isLoading, temp, location} = this.state;
        
        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }
        
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;