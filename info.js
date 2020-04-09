var client = require('./client.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});