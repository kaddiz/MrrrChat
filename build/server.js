const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});