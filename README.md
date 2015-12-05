# Frontend Masters Workshop App

This repo is for the workshop on "Building Modern Single-Page Web Applications" workshop at [Frontend Masters, June 2015](https://frontendmasters.com/workshops/web-apps/).

**note:** the "master" branch contains the *completed* application. If you're just staring the video course you want to start with what's in the "start" branch. To do so, do this:

```
git clone https://github.com/HenrikJoreteg/masters.git
cd masters
git fetch origin
git checkout -b start origin/start
npm install
npm start
```

## Related docs

- Stuff to do [before the workshop](beforeclass.md)
- [Copy/paste snippets](copypaste.md)

## Goals of the workshop

1. Giving you tools, knowledge and confidence to build and deploy an application from scratch.
2. Familiarizing you with basics of:
    - ES6+
    - Node.js/npm
    - Ampersand.js
    - React
    - Webpack
    - Isomorphic Rendering
    - Providing user logins using an OAuth API
    - Consuming an external JSON API
3. Putting your app on the Internet


## Rough Outline

**9:00 Start**

- Short intro talk
- Project setup
- Discuss node, npm, hjs-webpack
- Render basic "hello" content with React
- Intro to React.js
- show build step

** frameworks talk/discussion **

- Adding styles
    - show yeticss.com
    - create styles folder in src
    - import yeticss.com
    - show what happens when you build now
    - show live reloading in action
- Convert ES5 React module to ES6
    - compare them side-by-side

**10:30 - 11:00 morning break**

- Install and use the router
    - public and 'repos' routes
    - start with console.log routes
    - React.render inside method
    - re-deploy
- Introduce ampersand-app pattern
    - demo event signaling via app
- Add layout.js
- Local links/Internal Nav Component

**12:30 - 1:45 Lunch Break**

- Authing with GitHub
    - Understanding Standard OAuth Flows
    - Keeping a "secret" in a static clientside app
    - Gatkeeper Microservice
- Persisting token, modeling 'me'
- Fetching "me" from github
- Binding username

**3:15 - 3:45 Afternoon Break**

- Rendering list of Repos
- Adding Octicons

## Day 2

**9:00 Start**

- Repo Detail Page
- Rendering The Labels
- Creating a Label component
- Editing Mode for Labels
- Deleting Labels
- Updating Labels
- Creating New Labels

**10:30 - 11:00 morning break**

- Configs and Deploys
- Deploying with Surge
- Adding A 404 Page

**12:30 - 1:45 Lunch Break**

- Static Isomorphic Rendering
- Using Standard for Code Style

**3:15 - 3:45 Afternoon Break**

- wrap up discussion
- open questions
- open hacking (see suggestions below)

## Taking it further

I'd encourage you to keep hacking on this and finish whatever features we didn't build. 

In addition, you may want to try adding the following: 

- Add a link to real repo
- Add validation to form
- Add user avatar
- Switch it over to login with firebase
- Write module that fetches "all" repos (using github paging API)
- Add color picker?

## Further study

- [My Book, Human JavaScript](http://humanjavascript.com)
- [Thinking in React](https://facebook.github.io/react/docs/thinking-in-react.html)
- [Reusable React Components](https://facebook.github.io/react/docs/reusable-components.html)
- [Standard Linter](https://github.com/feross/standard)
- [Setting up ESLint, React and ES6](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48)
- [Complete HubTags.com Source](https://github.com/henrikjoreteg/hubtags.com)


## Feedback

Honest feedback is golden. Please take a minute to say what you liked/what you didn't: http://j.mp/masters-feedback

If you liked it maybe even tweet about it :) I'm [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter. 

<3