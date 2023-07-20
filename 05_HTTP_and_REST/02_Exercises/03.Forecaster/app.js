function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/forecaster';
  const locationInput = document.getElementById('location');
  const submitBtn = document.getElementById('submit');
  const forecast = document.getElementById('forecast');
  const weatherMapper = {
    'Sunny': '&#x2600',
    'Partly sunny': '&#x26C5',
    'Overcast': '&#x2601',
    'Rain': '&#x2614',
    'Degrees': '&#176'
  }

  submitBtn.addEventListener('click', getWeatherHandler)

  function getWeatherHandler() {
    forecast.style.display = 'block'
    let found = false;

    fetch(BASE_URL + '/locations')
      .then(response => response.json())
      .then(locations => {
        let currentLocation = locationInput.value;
        for (const { code, name } of locations) {
          if (currentLocation === name) {
            found = true;
            getTodayWeatherForecast(code)
            getThreeDayWeatherForecast(code)
          }
        }
        if (!found) {
          const parent = document.getElementById('current')
          createElement('span', 'Error', parent, '', ['forecast-data'])
        }
      })
      .catch((err) => console.log(err))
  }

  function getTodayWeatherForecast(locationCode) {
    fetch(BASE_URL + '/today/' + `${locationCode}`)
      .then(response => response.json())
      .then(todayForecast => {
        const { forecast, name } = todayForecast;
        const { condition, high, low } = forecast;
        const parent = document.getElementById('current');
        const symbol = document.createElement('span');
        symbol.innerHTML = weatherMapper[condition];
        symbol.classList.add("condition", "symbol")
        parent.appendChild(symbol)
        const conditionSpan = createElement('span', '', parent, '', ['condition']);
        createElement('span', name, conditionSpan, '', ['forecast-data']);
        const degreases = createElement('span', '', conditionSpan, '', ['forecast-data']);
        degreases.innerHTML = `${low}${weatherMapper['Degrees']}/${high}${weatherMapper['Degrees']}`
        createElement('span', condition, conditionSpan, '', ['forecast-data']);
      })
      .catch((err) => console.log(err))
  }

  function getThreeDayWeatherForecast(locationCode) {
    fetch(BASE_URL + '/upcoming/' + `${locationCode}`)
      .then(response => response.json())
      .then(threeDaysForecast => {
        const parent = document.getElementById('upcoming');
        const forecastInfo = createElement('div', '', parent, '', ['forecast-info']);

        for (const { condition, high, low } of threeDaysForecast.forecast) {
          const symbol = document.createElement('span');
          const upcomingSpan = createElement('span', '', forecastInfo, '', ['upcoming']);

          symbol.innerHTML = weatherMapper[condition];
          symbol.classList.add("symbol")
          upcomingSpan.appendChild(symbol)
          const degrees = createElement('span', '', upcomingSpan, '', ['forecast-data'])
          degrees.innerHTML = `${low}${weatherMapper['Degrees']}/${high}${weatherMapper['Degrees']}`
          createElement('span', condition, upcomingSpan, '', ['forecast-data'])
        }
      })

  }

  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type)

    if (content && type != 'input') {
      htmlElement.textContent = content;
    }

    if (content && type === 'input') {
      htmlElement.value = content;
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    // if (content && type != 'input') {
    //   htmlElement.value = content;
    // }

    if (id) {
      htmlElement.id = id;
    }

    // ['list', 'item', ...]
    if (classes) {
      htmlElement.classList.add(...classes)
    }

    // { src: 'link to image', href: 'link to site', ... }
    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;

  }
}

attachEvents();


