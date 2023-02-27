# Setup from scratch
```
npm init
npm i express winston sequelize body-parser
npm i --save-dev typescript @types/express @types/node sqlite3 nodemon ts-node
npx tsc --init
```

# Run locally

```
npm i
export ENVIRONMENT=local
export PORT=3000 
```

```
npm run local
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