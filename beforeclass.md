# Stuff to do before the workshop

Hi folks, it'll save us a ton of config/setup time at the beginning if you can get a few things set up and downloaded before the class.

So, if at all possible try to get the following things working before the workshop. If you have trouble, it's not a huge deal, it'll just save us some time.

## Things you'll need

1. node.js and npm installed (version 0.10 or newer should be fine)
2. some kind of terminal or command prompt where you can run commands
3. a text editor of your choice. I'll be using [Sublime Text](http://www.sublimetext.com/) but most any will do.
4. A free account on GitHub.com with at least one "repo" in it. If you don't have one [create one here](https://github.com/) and then follow instructions to create a repo. It doesn't even have to have anything in it, just needs to exist.
5. a browser, yup... duh :)

## Getting set up before class

If you already have node.js, npm, and git installed you should be able to get the app in this repo running by executing the following commands in your terminal:

```
git clone https://github.com/HenrikJoreteg/masters.git
cd masters
npm install
npm start
```

Some of those steps will take some time, but be patient. If at the end of that you open a browser to: http://localhost:3000 and see the text "Hello Frontend Masters!" you're ready for the workshop.

## If that didn't work...

Worry not! We'll sort it out.

1.  If you're not familiar with git, you don't actually need it for the class, you can [simply download](https://github.com/HenrikJoreteg/masters/archive/master.zip) and unzip this project.
2. If you don't already have Node.js installed, please download and run the installer by clicking the Install button on the [Node.js homepage](https://nodejs.org/). This will install both node and npm. If you already have Node.js installed type `node --version` in your terminal or command prompt and verify you're on version 0.10 or above.

Now open a terminal or command prompt and `cd` to the root of the directory where you cloned this project and try running: `npm install`

You should see a spinner and then when it's done downloading, a list of things it installed.

Now run `npm start`, this will start the development server (it won't finish it'll just keep running). Then open http://localhost:3000 in a browser if you see a message that says: "Hello Frontend Masters!" you're ready. 
