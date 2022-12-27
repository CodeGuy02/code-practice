const express = require('express');
const os = require('os');
const app = express();
const port = 2600;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('', (req,res) => {
    var dateTime = new Date();
    var osRelease = os.release();
    var osTotalMem = os.totalmem();
    var osArch = os.arch();
    var osPlatform = os.platform();
    res.render('index', {
        dateTime : dateTime,
        osPlatform : osPlatform,
        osRelease : osRelease,
        osTotalMem : osTotalMem,
        osArch : osArch
    })
});

app.listen(port, () => console.info(`Listening on port ${port}`));
