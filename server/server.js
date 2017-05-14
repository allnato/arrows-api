/**
 * Author: Allendale S. Nato
 */

const express = require('express');
const MobileAPIRouter = require('./routes/mobile_api');

const port = process.env.PORT || 3000;
var app = express();

app.use('/arrows/mobile/api', MobileAPIRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});