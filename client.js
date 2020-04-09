var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  node: ['http://localhost:9200']
});

module.exports = client;