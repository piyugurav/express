const express = require("express");
const db = require("../db");
const util=require("../utils");
var app = express();
app.use(express.json());


app.get('/',(Request,Response)=>{
    const connection = db.connect();
  
    var queryText = `select * from employee`;
    connection.query(queryText,(err,result)=>{
        connection.end();
        Response.send(util.createResult(err,result));

      
               

    });

});

app.get('/:id',(Request,Response)=>{
    const connection = db.connect();
 
    var id = Request.params.id;
    var queryText = `select name,address,email from employee where id=${id}`;
    
    connection.query(queryText,(err,result)=>{
        connection.end();
        if(err==null)
        {
            Response.send(result);
                }
                else
                {
                        Response.send(err);
                }

    });

});

app.put('/:id',(Request,Response)=>{
    const connection = db.connect();
 
    var id = Request.params.id;
    var name =Request.body.name;

    var queryText = `update employee set name ='${name}' where id=${id}`;
    
    connection.query(queryText,(err,result)=>{
        connection.end();
        if(err==null)
        {
            Response.send(result);
                }
                else
                {
                        Response.send(err);
                }

    });

});
app.delete('/:id',(Request,Response)=>{
    const connection = db.connect();
 
    var id = Request.params.id;
   

    var queryText = `delete from employee where id=${id}`;
    
    connection.query(queryText,(err,result)=>{
        connection.end();
        if(err==null)
        {
            Response.send(result);
                }
                else
                {
                        Response.send(err);
                }

    });

});

app.post('/',(Request,Response)=>{
    const connection = db.connect();
 
    const { id ,name,address,email} = Request.body;
  
    var queryText = `insert into employee values (${id},'${name}','${address}','${email}')`;
    
    connection.query(queryText,(err,result)=>{
        connection.end();
        if(err==null)
        {
            Response.send(result);
                }
                else
                {
                        Response.send(err);
                }

    });

});
module.exports=app;

