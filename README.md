# yt-tools

## Resources and tools for collect and analyze Youtube

This repository centralizes some tools and scripts useful to collect data on Youtube.

### Resources and tools for collect and analyze Youtube
Use youtube-dl to collect video/audio/subtitle without use Youtube API key (https://youtube-dl.org/)
- Download subtitles
```youtube-dl --sub-lang 'pt' --write-sub --write-auto-sub --skip-download --output "%(id)s.%(ext)s" -a ../../videos.txt```

### Node scripts to request Youtube Data API with some examples

#### Installation

Install the dependencies and run app.js

```sh
$ npm install
$ npm start
```

Obtaining authorization credentials (API Key) to request data (https://developers.google.com/youtube/registering_an_application)

## License

MIT

**Free Software, Hell Yeah!**
