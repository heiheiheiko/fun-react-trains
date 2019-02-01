import { Client } from "paho-mqtt"
import store from "../redux/store";
import { addTrain, updateTrain } from "../redux/actions";

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
    const state = store.getState();
    const payloadTrain = JSON.parse(message.payloadString);
    console.log(payloadTrain);
    const storeTrain = state.trains.find((train) => (train.trainNumber === payloadTrain.trainNumber))

    if (storeTrain) {
      store.dispatch(updateTrain(payloadTrain));
    } else {
      store.dispatch(addTrain(payloadTrain));
    }
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
