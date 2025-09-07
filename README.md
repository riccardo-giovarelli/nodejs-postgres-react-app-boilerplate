# nodejs-postgresql-react-app-boilerplate 

Web App Boilerplate with _Node.js_ backend, _PostgreSQL_ database, _React_ frontend in a _Docker_ development environment with the support of _Adminer_ database manager.

## Table of contents

- [nodejs-postgresql-react-app-boilerplate](#nodejs-postgresql-react-app-boilerplate)
  - [Table of contents](#table-of-contents)
  - [Version](#version)
  - [Prerequisites](#prerequisites)
  - [Web App Structure](#web-app-structure)
    - [Mermaid diagram](#mermaid-diagram)
  - [Environment](#environment)
    - [First run :hammer:](#first-run-hammer)
    - [Run :point\_right:](#run-point_right)
    - [Stop :hand:](#stop-hand)
  - [Development server](#development-server)
    - [App url](#app-url)
    - [Adminer url](#adminer-url)
  - [Frontend routes](#frontend-routes)
    - [Signin](#signin)
    - [Signup](#signup)
    - [Dashboard](#dashboard)
    - [User profile](#user-profile)
  - [Screenshot](#screenshot)
    - [Dashboard](#dashboard-1)
    - [User profile page](#user-profile-page)
  - [Authors](#authors)
  - [License](#license)
  - [Badges](#badges)


## Version
1.0.0

## Prerequisites
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)

## Web App Structure

### [Mermaid](https://mermaid.js.org/) diagram

```mermaid
flowchart TD
    NGINX <--> FEid1([Frontend]) -- Tech --> FE-T-LIST["`TypeScript
    React
    React Router
    Zustand
    Material UI
    i18next
    Axios`"]
    NGINX <--> BE([Backend]) -- Tech --> BE-T-LIST["`Node.js
    TypeScript
    nodemon
    Express
    node-postgres
    `"]
    BE <--> DBid1[(Database)] -- Tech --> DB-T-LIST["`PostgreSQL`"]
```

## Environment

### First run :hammer:

1 - From the folder `backend`:

```bash
  yarn
```

2 - From the project root:

```bash
  docker compose up --build
```

3 - From the folder `backend`:

```bash
  yarn migrate up
```

### Run :point_right:

From the project root:

```bash
  docker compose up
```

### Stop :hand:

From the project root:

```bash
  docker compose stop
```

## Development server
### App url
`http://localhost:8000/`

### Adminer url

`http://localhost:8080/`

## Frontend routes

### Signin

`/signin`


### Signup

`/signup`


### Dashboard

`/`


### User profile

`/profile`

## Screenshot

### Dashboard

![Dashboard screenshot](images/dashboard.png "Dashboard")

### User profile page

![User profile page screenshot](images/user_profile_page.png "User profile page")

## Authors

| Riccardo Giovarelli | [![LinkedIn](https://img.shields.io/badge/Linkedin-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/riccardo-giovarelli) [![github](https://img.shields.io/badge/github-181717.svg?logo=github&logoColor=white)](https://github.com/riccardo-giovarelli) |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## License

[MIT](https://opensource.org/license/mit)


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff)](https://www.docker.com/)
[![Postgres](https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?logo=yarn&logoColor=fff)](https://yarnpkg.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![NodeJS](https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)](https://expressjs.com/)
[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat-square)](https://nodemon.io/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Zustand](https://img.shields.io/badge/Zustand-582D3E.svg?logoColor=white)](https://zustand.docs.pmnd.rs/)
[![i18next](https://img.shields.io/badge/i18next-26A69A?logo=i18next&logoColor=fff&style)](https://www.i18next.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=fff)](https://axios-http.com/)
[![Adminer](https://img.shields.io/badge/Adminer-34567C.svg?logoColor=white)](https://www.adminer.org/)





