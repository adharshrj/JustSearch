# MongoElastic

# ENV
```bash
    MONGOURL = "Your mongo url"
```

# Elastic
```bash
    Default = http://localhost:9200
```

## API Endpoints
```bash
    #MONGO
    POST - https://{URL}/pokemon/create
    GET - https://{URL}/pokemon/getAll
    GET - https://{URL}/pokemon/get/:id
    PUT - https://{URL}/pokemon/update/:id
    DELETE - https://{URL}/pokemon/delete/:id

    #ELASTIC
    POST - https://{URL}/elasticSearch/sync
    GET - https://{URL}/elasticSearch/:index/:type
```

# Create User
```bash
curl --location --request POST 'http://localhost:3000/pokemon/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user",
    "age": "100",
    "cars": [ "carid1" , "carid2" ]
}'
```

# Create Car
```bash
curl --location --request POST 'http://localhost:3000/car/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "brand": "BMW",
    "model": "M7"
}'
```

# Get All Users
```bash
curl --location --request GET 'http://localhost:3000/user/getAll' \
--data-raw ''
```

# Get All Cars
```bash
curl --location --request GET 'http://localhost:3000/car/getAll' \
--data-raw ''
```

# Get User by Id
```bash
curl --location --request GET 'http://localhost:3000/user/get/:id' \
--data-raw ''
```

# Get Car by Id
```bash
curl --location --request GET 'http://localhost:3000/car/get/:id' \
--data-raw ''
```

# Update User by Id
```bash
curl --location --request PUT 'http://localhost:3000/user/update/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "user",
    "age": "100",
    "cars": [ "carid1" , "carid2" ]
}'
```

# Update Car by Id
```bash
curl --location --request PUT 'http://localhost:3000/car/update/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "brand": "BMW",
    "model": "M7"
}'
```
# Delete User by Id
```bash
curl --location --request GET 'http://localhost:3000/user/delete/:id' \
--data-raw ''
```

# Delete Car by Id
```bash
curl --location --request GET 'http://localhost:3000/car/delete/:id' \
--data-raw ''
```

# Elastic Sync
```bash
curl --location --request POST 'http://localhost:3000/elasticSearch/sync'\
--data-raw ''
```

# Elastic Search
```bash
curl --location --request GET 'http://localhost:3000/elasticSearch/:index/:type/_doc?q="yourquery"'\
--data-raw ''
```
