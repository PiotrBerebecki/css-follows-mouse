const express = require('express');
const path = require('path');

app.use(app.static(path.join('__DIRNAME', '../public')));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Open http://localhost:${port} in your browser`);
});
