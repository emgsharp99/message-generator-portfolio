const weatherObjects = {
  _weatherTypes: ['sun', 'rain', 'frost', 'thunder', 'lightning', 'wind', 'tornado', 'hurricane', 'fog', 'raining frogs', 'chocolate rain', 'heat wave'],
  clothes: ['a hat', 'a wooly jumper', 'thick socks', 'shorts', 'fake eyelashes', 'no shoes'],
  action: ['jump in puddles', 'stay at home', 'go to the beach', 'watch the cloud', 'climb a tall metal pole', 'go for a run']
};

const messageGenerator = (weatherObjects) => {
  const weather = weatherObjects.weatherTypes;
  const clothes = weatherObjects.clothes;
  const action = weatherObjects.action
  const randomWeather = weatherObjects.weatherTypes[Math.floor(Math.random(weatherObjects.weatherTypes.length))];
  console.log(randomWeather) 
}