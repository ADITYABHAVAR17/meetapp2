// This file is used to serve the React app on the server.
const express = require('express');
const path = require('path');
const app = express();  
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, './zoom-clone-app/build')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './zoom-clone-app/build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
// Compare this snippet from zoom-clone-app/src/components/Video.js:



