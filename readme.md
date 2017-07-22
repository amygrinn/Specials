# [Specials!](https://specials-a1572.firebaseapp.com/)

### Required programs
* [Visual Studio Code](https://code.visualstudio.com/) (**not** Visual Studio)
* [Android Studio](https://developer.android.com/studio/index.html)
* [Genymotion](https://www.genymotion.com/fun-zone/) (need to create an account)
* [Node](https://nodejs.org/en/) (get LTS - long term service)
* [Git](https://git-scm.com/downloads)

### Helpful documents:
[Android help docs](https://developer.android.com/guide/webapps/index.html)  
[Git tutorial](https://try.github.io/levels/1/challenges/1)  
[css Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)  
[css Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)  

### Source code organization
* android  
    Source files for the android project, which is just a webview for the website.  
    Open this folder with android studio to build the android app. All native code  
    will need to be written in here later as needed
* artifacts *ignore*
    javascript files transpiled from typescript files
* dist *ignore*
    distributable built html project, the actual thing that is stored on the server.
* node_modules *ignore*
    node installed packages required for building, minifying, etc. 
* src
    The actual source code and files

Artifacts, dist, and node_modules are all exluded from the git repository so any changes will not matter and will eventually be lost.

## Starting up

#### Configuration
Run ``` git clone https://github.com/tylergrinn/Specials.git``` in the directory you want the project in.  
Run ``` npm install ``` to populate the node_modules folder with the required packages listed in "package.json"  
Run ``` npm install -g firebase-tools ``` then ``` firebase login ``` then ``` firebase init ``` to set up uploading to the server. Choose the hosting option when asked.

#### Running
Run ``` npm start ``` to run the start script I wrote in the "package.json" file. This will open up your browser with the app and live reload all changes made in the src folder. In chrome, ``` ctrl+shift+i ``` opens up the developer options. You can see the ``` console.log("message"); ``` calls show up here for debugging. Also the top, second to the left, button toggles emulating a mobile phone.  
Run ``` npm run upload ``` to build a production version (minified) of the code and upload it to the firebase server. It will then be available on the android app.

To build the android app, open android studio and open the android folder. Start up an emulator from genymotion then click the green play button in android studio to load it on the phone. Unless any changes are made to the android app you'll only need to build it once and from then on you can just open genymotion.

The firebase server hosting url is https://specials-a1572.firebaseapp.com/