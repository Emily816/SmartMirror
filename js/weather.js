// Web URL for Dark Sky API
var darkSkyWWW = "https://api.darksky.net/forecast/";
// Dark Sky API Key
var darkSkyAPIkey = "fff3b0f571cb1520383ddb6659ecac0a";
// Latitude of Home
var lat = 43.1252138;
// Longitude of Home
var lon = -76.1709139;

$(document).ready(function(){
  // Get the json from Dark Sky
  $.getJSON( darkSkyWWW + darkSkyAPIkey + '/' + lat + ',' + lon, function(data) {
    // Get today's minimum temperature from the json and add it to the page
    $("#tempMin").empty().append(Math.round(data.daily.data[0].temperatureMin));
    // Get today's maximum temperature from the json and add it to the page
    $("#tempMax").empty().append(Math.round(data.daily.data[0].temperatureMax));

    // Get current date and time
    var date = new Date($.now());

    // If the current time is earlier than 10am ...
    if (date.getHours() <= 10)
    {
      // Get the daily weather summary from the json and add it to the page
      $('#weatherSummary').empty().append(data.hourly.summary);
    }
    // If the current time is after 10am ...
    else
    {
      // Get the hourly weather summary from the json and add it to the page
      $('#weatherSummary').empty().append(data.hourly.summary);
    }
  });
});
