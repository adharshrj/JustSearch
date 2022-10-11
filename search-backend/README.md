# Pokemon Search

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

# Create Pokemon
```bash
curl --location --request POST 'http://localhost:3000/pokemon/create' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  }'
```


# Get All Pokemon
```bash
curl --location --request GET 'http://localhost:3000/pokemon/getAll' \
--data-raw ''
```

# Get Pokemon by Id
```bash
curl --location --request GET 'http://localhost:3000/pokemon/get/:id' \
--data-raw ''
```


# Update User by Id
```bash
curl --location --request PUT 'http://localhost:3000/pokemon/update/:id' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  }'
```


```
# Delete Pokemon by Id
```bash
curl --location --request GET 'http://localhost:3000/pokemon/delete/:id'\
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
