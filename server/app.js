const express = require('express');
const app = express();

/**
 * server
 */
app.listen(3030, () => {
    // server connect
    console.log('Example app listening on port 3030!');
});

/**
 * parser
 */
app.use(express.json());
app.use(express.urlencoded( {extended : true } ));

/**
 * routing controllor
 */
const commonRoute = require('./router/common');
const naverLoginRoute = require('./router/login/naver');
app.use('/', commonRoute);
app.use('/naverlogin', naverLoginRoute);


