///////////require packages/////////////////
require('dotenv').config();
const express = require('express'),
  bdParser = require('body-parser');
/////////// variables///////////////////////
const app = express();  
const port = 8890 || process.env.PORT;
//////////////////middleware//////////////////////////
app.use(
  bdParser.urlencoded({extended: false})
);
app.use(bdParser.json());
////////////////////////////////////////////
app.get('/',(req,res)=>{
  res.send({
    greetings: "hello world",
    body: req.body,
    checking: "yea"
  })
});
app.listen(port,()=>{
  console.log(`Sever listening at port:${port}`)
});

