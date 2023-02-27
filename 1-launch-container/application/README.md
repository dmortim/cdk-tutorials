# Setup from scratch
```
npm init
npm i express winston sequelize body-parser
npm i --save-dev typescript @types/express @types/node sqlite3
npx tsc --init
```

# Required Env Vars
```
ENVIRONMENT = local | dev | test | prod
PORT=3000 default: 3000

# If connecting to remote DB (i.e. 'Environment' Env var is not set to local)
DB_NAME=
DB_HOST=
DB_USER=
DB_PORT=
DB_PASSWORD=
```


# Run

```
npx tsc && node ./dist/server.js
```


# Docker

```
# Set env vars
export ENVIRONMENT="local"
export DB_USER="ChangeMe"
export DB_NAME="ChangeMe"
export DB_HOST="ChangeMe"
export DB_PORT="ChangeMe"
export DB_PASSWORD="ChangeMe"
export PORT=3000

# build
docker build -t application:latest . 

# run detached exposing port 3000
docker run -tdp 3000:3000 application:latest
```