# Before Getting Started

### Tech Stack Used :

- Front-End
  - React (with Redux and React-Routers-dom)
  - ReactStrap
  - Bootstrap CSS
- Back-End
  - Node.js
  - Express.js (With JWT)
  - MongoDB (mongoose)

---

## Steps to run it locally :-

1. Fork the repo and clone it or Download the ZIP.
2. Make sure `npm & node` installed in your local machine, if Yes then Open a cmd/terminal tab.
3. (In Root) Run `npm install`, again Run `cd client && npm install` to install packages in both server and client.
4. In `config/default.json` file add your mongoURI and jwtSecret.
5. (In Root) Run `npm start` It will start at server at default `PORT 5000` or Run `npm run server` to use nodemon.
6. Open another cmd/terminal tab, (In Root) Run `cd client && npm start` to start React UI on `PORT 3000`.

## Steps to Deploy in heroku :-

1. Make sure `heroku cli & git` installed in your PC and signup an account on heroku website.
2. (In Root) Open cmd/terminal Run `heroku login` , next Run `heroku create`, it will create a APP with random name.
3. Add all the changes and make a commit in your git Repo then Run `heroko git:remote -a app_name_here` .
4. Check Production step written in `server.js` file and script `heroku-postbuild` in `package.json` file.
5. Lastly Run `git push heroku master`, after successful Build & deploy, open `https://app_name_here.herokuapp.com/` to see the application running.

---


