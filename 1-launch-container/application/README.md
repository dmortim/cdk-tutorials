# Setup from scratch
```
npm init
npm i express winston sequelize 
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