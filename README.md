# Trains in motion

In this task you will be creating a React application that listens to a WebSocket and displays the data from it on the worldmap.

1) Create a React app that is able to display a world map. The map should span the full window. The Initial center position should be set to [60.1697452,24.9397973]

2) Connect the app to DigiTraffic MQTT stream. Availble at ws://rata-mqtt.digitraffic.fi:9001 Topic:train-locations/#. DigiTraffic provides open data from the Finnish railroad network. Documentation is available here: goo.gl/YSygy5
```
// example message
{
 "trainNumber":9388,
 "departureDate":"2019-01-21",
 "timestamp":"2019-01-21T11:54:07.000Z",
 "location":
   {"type":"Point",
    "coordinates":[25.097739,60.380157]
   },
 "speed":0
} 
```
Parse the incoming data and store it appropriately, ready to be consumed in the next step. 

3) For each unique trainNumber, create a marker on the map displaying the location of the train. Set the train number as the label for the train. Update the position of the marker whenever its position is updated. In the end you should have an application that displays a fullscreen map, automatically connects to Digitraffic MQTT and starts displaying train positions on the map.
