const covidData = (state = [], action) => {
  switch (action.type) {
    case 'FETCHDATA':
      return Object.entries(action.payload)[0];
    default:
      return state;
  }
};

export default covidData;
