const express = require('express');
const  app = express();
const port = 2600;

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    var dateTime = new Date();
    var osRelease = os.Release();
    var osTotalMem = os.totalmem();
    var osArch = os.arch();
    res.render('views/index', {
        dateTime : dateTime,
        osRelease: osRelease,
        osTotalMem: osTotalMem,
        osArch : osArch
    })

app.listen(port, () => console.info(`Listening on port %{port}`));


});
