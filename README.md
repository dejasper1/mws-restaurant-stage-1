# Restaurant Reviews Application 
---

## Description

For this project I converted a static webpage to a mobile-ready web application. This was accomplished by adding accessibility features, converting the design to be responsive on different sized displays, and making the siite content accessible for screen reader use. I also added a service worker to enhance the offline experience for users. 

## Setup
1. Download or clone this repository.
2. Sign up for a free API key with [Mapbox](https://www.mapbox.com/). This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `config.MY_KEY` located in the restaurant_info.js file and the main.js file with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 
3. In the main project folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and is likely already installed on your computer. Instructions are provided below to implement a simple server via Python. 

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software. With your server running, the site will be viewable at: `http://localhost:8000`.

## Built with 
* [Mapbox](https://www.mapbox.com/)
* [leafletjs](https://leafletjs.com/) 

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**


