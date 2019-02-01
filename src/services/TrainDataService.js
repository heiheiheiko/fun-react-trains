import { Client } from "paho-mqtt"

class TrainDataService {
  constructor(){
    const hostname = "rata-mqtt.digitraffic.fi";
    const port = 9001;
    const randomizedNumber = parseInt(Math.random() * 10000, 10)
    const clientId = `trains-in-motion-${randomizedNumber}`;

    this.topic = "train-locations/#";
    this.client = new Client(hostname, port, clientId);
    this.client.onConnectionLost = this.onConnectionLost;
    this.client.onMessageArrived = this.onMessageArrived;
  }

  onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log(`onConnectionLost: ${responseObject.errorMessage}`);
    }
  }

  onMessageArrived(message) {
    console.log(`onMessageArrived: ${message.payloadString}`);
  }

  fetchData(){
    this.client.connect({
      onSuccess: () => this.client.subscribe(this.topic)
    });
  }

  stopFetchingData(){
    this.client.disconnect();
  }
}

export default TrainDataService;
