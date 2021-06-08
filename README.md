# Marvel - Backend

[![](http://image.noelshack.com/fichiers/2021/23/2/1623179184-cover-marvel.png)](https://marvel-react-app.netlify.app/)

## Overview

**Server** <br />
Heroku : https://marvel-backend-claire.herokuapp.com/ <br />
API used : https://developer.marvel.com/

**Online demo** <br />
Client : https://marvel-react-app.netlify.app/ <br />
Github : https://github.com/clairelct/REACT-Marvel-frontend

## Packages

- [Axios](https://github.com/axios/axios)
- [CORS](https://github.com/expressjs/cors#readme)
- [Express](https://github.com/expressjs/express)
- [md5](https://github.com/pvorb/node-md5)
- [uid2](https://www.npmjs.com/package/uid2?activeTab=versions)
- [Dotenv](https://www.npmjs.com/package/dotenv)

## Architecture

Route characters

- **get characters** : axios request to Marvel API.
- **get characters by id** : axios request to Marvel API.
- **get comics related to a character** : axios request to Marvel API.

Route comics

- **get comics** : axios request to Marvel API.

## Running the project

Be sure, you have installed all dependencies and applications to run React project on your computer : [Getting Started with React](https://reactjs.org/docs/getting-started.html).

Clone this repository :

```
git clone https://github.com/clairelct/Marvel-backend.git
cd Marvel_backend
```

Install packages :

```
npm i
```

When installation is complete, run it :

```
npx nodemon index.js
```
