# Elastic Search for Pokemon

# Elastic
```bash
    Default = http://localhost:9200
```

## API Endpoints
```bash
    #ELASTIC
    POST - https://{URL}/elastic/sync
    GET - https://{URL}/elastic/:index/:type
```

# Elastic Search
```bash
curl --location --request GET 'http://localhost:3000/elastic/:index/:type/_doc?q="yourquery"'\
--data-raw ''
```
