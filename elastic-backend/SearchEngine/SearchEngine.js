const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

const phraseSearch = async (_index, _type, phrase, multi_match_fields, highlight_fields) => {
  const hits = [];

  // only string values are searchable
  const searchResult = await client
    .search({
      index: _index,
      type: _type,
      body: {
        query: {
          multi_match: {
            fields: multi_match_fields,
            query: phrase,
            type: 'phrase_prefix',
            //lenient: true
          },
        },
        highlight: highlight_fields,
      },
    })
    .catch((e) => console.log('error', e));
  if (
    searchResult &&
    searchResult.body &&
    searchResult.body.hits &&
    searchResult.body.hits.hits &&
    searchResult.body.hits.hits.length > 0
  ) {
    hits.push(...searchResult.body.hits.hits);
  }

  return {
    hitsCount: hits.length,
    hits,
  };
};

module.exports = {
  phraseSearch
};