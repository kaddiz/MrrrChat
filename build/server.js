const express                  = require('express');
const React                    = require('react');
const ReactDom                 = require('react-dom/server');
const { match, RouterContext } = require('react-router');
const routes                   = require('./routes');
const { Provider }             = require('react-redux');
const configureStore           = require('./redux/configureStore');

const app = express();

const socket                   = require('./socket.js');

app.use((req, res) => {
  const store = configureStore();

  match({ routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (redirectLocation) { // Если необходимо сделать redirect
        return res.redirect(301, redirectLocation.pathname + redirectLocation.search);
      }
      if (error) { // Произошла ошибка любого рода
        return res.status(500).send(error.message);
      }
      if (!renderProps) { // Мы не определили путь, который бы подошел для URL
        return res.status(404).send('Not found');
      }

      const componentHTML = ReactDom.renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      );

      return res.end(renderHTML(componentHTML));
    }
  );
});

function renderHTML(componentHTML) {
  return `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MrrrChat</title>
        <link rel="stylesheet" href="bundle.css">
      </head>
      <body>
        <div id="root">${componentHTML}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}

const PORT = process.env.PORT || 3000;

var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection', socket);

http.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
