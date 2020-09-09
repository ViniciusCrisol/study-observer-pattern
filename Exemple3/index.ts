interface Subject {
  registerObservers(o: Observer);
  removeObservers(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  setTemperature(temp: number) {
    console.log('WeatherStation: new temperature meansured: ' + temp);
    this.temperature = temp;
    this.notifyObservers();
  }

  registerObservers(o: Observer) {
    this.observers.push(o);
  }

  removeObservers(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObservers(this);
  }

  update(temperature: number) {
    console.log('TemperatureDisplay: I need to update my display.');
    // Logic would be here!
  }
}

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObservers(this);
  }

  update(temperature: number) {
    if (temperature > 25) {
      console.log('Fan: its not here, turning myself on...');
      // Logic would be here!
    } else {
      console.log('Fan: its nice, turning myself off...');
      // Logic would be here!
    }
  }
}

let weatherStation = new WeatherStation();

let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);

weatherStation.setTemperature(20);
weatherStation.setTemperature(30);
