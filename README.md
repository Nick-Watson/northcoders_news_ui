# Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion website similar to [Reddit](https://www.reddit.com/). Articles are divided into topics and each article has user curated ratings and can be up or down voted using the [API](https://github.com/Nick-Watson/wk07sprint03_northcoders_news_api_feb2017). Users can also add comments about an article which can also be up or down voted. A user can add comments and remove any comments which they have added.

### Prerequisites

Please ensure you have the following installed;

```
Node.js v7.0.0 or higher
```
Available [here](https://nodejs.org/en/download/current/)

## Getting Started

From the command line and in a directory of your choosing;

````````
git clone https://github.com/Nick-Watson/w06-northcoders-news/tree/remote-week ncn

cd ncn

npm install 

npm run dev

````````
Once the webpack has finsihed bundling go to [http://localhost:9090/](http://localhost:9090/) in your browser.

## Tests

The Redux reducer was tested in order to ensure it was functioning correctly. This was done to ensure any bugs that occur will be from a different source and to speed up the development process. To view the tests please follow the instructions below.

From the ncn directory in the command line;

```
npm test
```

## Built With

* [Webpack](https://webpack.js.org/) - Module Bundler
* [React](https://github.com/facebook/react) - User interface framework
* [Redux](https://github.com/reactjs/redux) - Application state manager
* [Axios](https://github.com/mzabriskie/axios) - HTTP client used in React
* [Bulma](https://rometools.github.io/rome/) - CSS framework
* [Mocha](https://mochajs.org/) - Test framework
* [Chai](http://chaijs.com/) - Assertation library
