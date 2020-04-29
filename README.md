# Coronavirus Analysis - WIP

`covid19-stat-20` is a small side project sparked by not only the ongoing pandemic, but the data surrounding it as well.

While there are current sources for Covid-19 statistics, they tend to fall short of in-depth analysis or customization. This is intended to expand on that.

## Initial Approach

The project was recently started, simply with vanilla JavaScript but may be shifting towards Python3 or Angular(v.9) soon in order to conveniently expand some of the capabilities.

## Setup

Currently leveraging Python3 module to run a local HTTP Web server to avoid CORS issues when making requests to the APIs due to the modular JS design.

If you have Python3 and want to run a local server, simply run:

```shell
python3 -m http.server --directory ${PATH_TO_DIRECTORY} ${DESIRED_PORT}
```

## References

[WorldoMeter - Coronavirus]("https://www.worldometers.info/coronavirus/")

[COVID Tracking Project]("https://covidtracking.com/")

[COVID-19 Tracker - Postman Documentation]("https://documenter.getpostman.com/view/4074074/SzS7Pkup?version=latest")

....
