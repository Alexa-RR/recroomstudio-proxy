const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const ytdl = require('ytdl-core')
const port = process.env.PORT || 5030;
const app = express();
var axios = require('axios');


app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs')

app.get('/', async function (req, res) {
    
    try {
        if(!req.query.url){
            res.status(400);
            res.send('Missing url');
            return;
        }
        const url = await ytdl.getInfo(req.query.url)
        let format = ytdl.filterFormats(url.formats, 'audioandvideo');
        let video = ytdl.chooseFormat(format, { quality: 'highestvideo' })
        res.redirect(video.url)
        
    } catch (e) {
        console.error(e)
        res.set('Content-Type', 'text/html');
        res.status(500);
        res.send('url invalid');
    }
})
app.listen(port, () => {
    console.log(`Running on port ${port}.`);
});
