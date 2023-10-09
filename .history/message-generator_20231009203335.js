const weatherObjects = {
  _weather: ['sun', 'rain', 'frost', 'thunder', 'lightning', 'wind', 'tornado', 'hurricane', 'fog', 'raining frogs', 'chocolate rain', 'heat wave'],
  _clothes: ['a hat', 'a wooly jumper', 'thick socks', 'shorts', 'fake eyelashes', 'no shoes'],
  _action: [], //['jump in puddles', 'stay at home', 'go to the beach', 'watch the cloud', 'climb a tall metal pole', 'go for a run'],

  get weather() {
    if (this._weather.length > 0) {
      return this._weather;
    } else {
      return 'Need at least one type of weather.';
    }
  },

  get clothes() {
    if (this._clothes.length > 0) {
      return this._clothes;
    } else {

    }
  },

  get action() {
    if (this._action.length > 0) {
      return this._action;
    } else {
      console.log('Need at least one type of action.')
      return -1;
    }
  }
};

const messageGenerator = (obj) => {
  const weather = obj.weather;
  const clothes = obj.clothes;
  const action = obj.action;
  console.log(weather, clothes, action)
}

messageGenerator(weatherObjects)