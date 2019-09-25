const express = require('express');
const app = express();

/**
 * routing controllor
 */
app.use('/', require('./api/common'));

app.listen(3030, () => {
    // server connect
    console.log('Example app listening on port 3030!');
});
