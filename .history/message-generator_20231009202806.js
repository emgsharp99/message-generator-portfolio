const weatherObjects = {
  _weather: ['sun', 'rain', 'frost', 'thunder', 'lightning', 'wind', 'tornado', 'hurricane', 'fog', 'raining frogs', 'chocolate rain', 'heat wave'],
  _clothes: ['a hat', 'a wooly jumper', 'thick socks', 'shorts', 'fake eyelashes', 'no shoes'],
  _action: ['jump in puddles', 'stay at home', 'go to the beach', 'watch the cloud', 'climb a tall metal pole', 'go for a run'],

  get weather() {
    if 
  }
};

const messageGenerator = (weatherObjects) => {
  const weather = weatherObjects._weatherTypes;
  const clothes = weatherObjects._clothes;
  const action = weatherObjects._action;
  const randomWeather = weatherObjects.weatherTypes[Math.floor(Math.random(weatherObjects.weatherTypes.length))];
  console.log(randomWeather) 
}