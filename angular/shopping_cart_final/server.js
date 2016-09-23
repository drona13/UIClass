var express =require ('express');
var bodyParser=require('body-parser');
var mysql=require('mysql');
var connection  = require('express-myconnection');
var app=express();
//setting up the static filed for hosting
app.use(bodyParser.json());//to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ //to support URL-encoded bodies
    extended:true
}))
app.use(express.static(__dirname +'/'));
console.log("Static files initialized...")
//routing
app.use(connection(mysql,{
        host     : 'localhost',
        user     : 'ui',
        password : 'ui1234',
        database : 'shopping_cart'
    },'request'));

app.get("/service/inventory_type",function(req,res,next){
    
    
    var query="SELECT name FROM inventory_type";
    req.getConnection(function (err, connection){
        if(err) 
            return next(err);
        connection.query(query,function(err,results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);
        });
    });
});

app.get('/',function(req,res){
    res.redirect('/views/index.html');
})
 app.get('/index',function(req,res){
    res.redirect('/views/index.html');
});

//end of routing
//Launching app on local host:8080;
app.listen(8282,function(){
    console.log('server loaded on port 8282');
});
