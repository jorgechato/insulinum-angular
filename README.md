# Angular Power

## Install
```zsh
$ git clone https://github.com/orggue/insulinum-angular.git
$ cd insulinum-angular
$ sudo npm install
$ bower install
```

## Run
```zsh
$ gulp serve        #for production
$ gulp serve:dist   #for deploy enviroment
$ node index.js     #for deploy enviroment
```

## Prepare deploy
```zsh
$ gulp              #or $ gulp serve:dist
```

## Heroku
```zsh
$ git push origin deploy
```

### Folder structure
```zsh
├── bower.json              #Package manager
├── dev
├── dist                    #Dist folder only to deploy, not working on it
│ ├── assets
│ │ ├── colors.json
│ │ └── img
│ │ ├── image.jpg
│ │ └── logobeta.png
│ ├── favicon.ico
│ ├── fonts
│ │ ├── emoticons.eot
│ │ ├── emoticons.svg
│ │ ├── emoticons.ttf
│ │ ├── emoticons.woff
│ │ ├── fontawesome-webfont.eot
│ │ ├── fontawesome-webfont.svg
│ │ ├── fontawesome-webfont.ttf
│ │ ├── fontawesome-webfont.woff
│ │ └── loader.svg
│ ├── images
│ │ ├── emojis@2x.png
│ │ ├── emojis.png
│ │ └── loader.svg
│ ├── index.html
│ ├── landing.html
│ ├── scripts
│ │ ├── app-69d3f792.js
│ │ ├── dashboard
│ │ │ └── my
│ │ ├── lib
│ │ └── vendor-3e4e003e.js
│ ├── styles
│ │ ├── app-4211c43e.css
│ │ ├── media
│ │ ├── vendor
│ │ └── vendor-2187052c.css
│ └── views
├── gulp                    #Gulp folder to automatize services
│ ├── build.js
│ ├── inject.js
│ ├── markups.js
│ ├── scripts.js
│ ├── server.js
│ ├── styles.js
│ └── watch.js
├── gulpfile.js             #MAin gulp file
├── index.js                #Nodejs server just in production
├── package.json            #npm dependencies
├── Procfile                #heroku node app procfile
├── protractor.conf.js
├── README.md
└── src                     #Developer folder
├── assets                  #images, fonts, sounds ...
│ ├── colors.json
│ └── img
│ ├── image.jpg
│ └── logobeta.png
├── favicon.ico
├── images                  #Only images to emoji library 
│ ├── emojis@2x.png
│ ├── emojis.png
│ └── loader.svg
├── scripts                 #Javascrip files
│ ├── app.js                #Main angular file
│ ├── dashboard             #Differents angular parts in each folder, this one is for dashboard 
│ │ └── my                  #Dashboard for a normal user
│ │ ├── chart.js
│ │ ├── filters.js
│ │ ├── main.controller.js
│ │ └── main.controller.spec.js
│ └── lib                   #Javascrip build by ours
│ │ └── demo.js
│ └── vendor                #Javascrip external libraries, filters...         
├── styles                  #css or Stylus files
│ ├── 01import.styl
│ ├── base.styl
│ ├── header.styl
│ ├── index.styl
│ ├── main-content.styl
│ ├── media
│ │ └── my-insulinum.styl
│ ├── my-insulinum.styl
│ ├── poster-header.styl
│ └── vendor
│ ├── nprogress.css
│ └── vendor.styl
└── views                   #Templates
├── index.html
└── landing.html
```
