[![CC BY 4.0][cc-by-shield]][cc-by]
# recroomstudio-proxy
A proxy to resolve youtube links for [Rec Room Studio (Not out yet)](https://recroom.com/studio)

Use the button below to easliy deploy the code on the cloud for free :D

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAlexa-RR%2Frecroomstudio-proxy%2Ftree%2Fmain)



If you use this project in your room you must credit this repository <3

This proxy was built with simplicity in mind so it dosen't have alot of features.

## Deployment

### Prerequisites:
- Nodejs version v18.x.x or higher
- A public facing domain with SSL


### Setup:
```
git clone https://github.com/Alexa-RR/recroomstudio-proxy.git
cd recroomstudio-proxy
npm install
node run index.js
```

This will open a webserver on port `5030` by default, the port can be changed by creating a `.env` file in the root folder and adding `PORT=` followed by the port number you want



## Usage

Make a request to `https://mydomain/?url=https://youtube.com/watch?v=VIDEO_ID` to receive a redirect to a direct mp4 youtube link (either 720P or 360P) 

## License

This work is licensed under a
[Creative Commons Attribution 4.0 International License][cc-by].

[![CC BY 4.0][cc-by-image]][cc-by]

[cc-by]: http://creativecommons.org/licenses/by/4.0/
[cc-by-image]: https://i.creativecommons.org/l/by/4.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg
