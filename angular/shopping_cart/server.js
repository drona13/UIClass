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

app.get("/service/customer",function(req,res,next){
    var ids=[];
    
    var query="SELECT * FROM customer";
    req.getConnection(function (err, connection){
        if(err) return next(err);
        connection.query(query,ids,function(err,results){
            if(err){
                console.log(err);
                return next("Mysql error, check your query");
            }
            res.json(results);
        });
    });
});
app.get("/service/customer/:customerid",function(req,res,next){
    var ids=[];
    var customerid=req.params.customerid;
    ids.push(customerid);
    var query="SELECT * FROM customer where customerid=?";
    req.getConnection(function (err, connection){
        if(err) return next(err);
        connection.query(query,ids,function(err,results){
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
});
app.get('/views/home',function(req,res){
    res.redirect('/views/home.html');
});
app.get('/views/game',function(req,res){
    res.redirect('/views/game.html');
});
app.get('/views/electronics',function(req,res){
    res.redirect('/views/electronics.html');
});
app.get('/landing',function(req,res){
    res.send('In landing page');
});
//end of routing
//Launching app on local host:8080;
app.listen(8181,function(){
    console.log('server loaded on port 8181');
});
//CREATING POST SERVICE
//sample for templating services
var url="/service/customer/"
var query="INSERT INTO Customer SET ?";
var data=["customerid","firstname","lastname","address","city","zip","email","phone"];
postService(url,query,data);
//end of post service template
var url="/service/inventorty/"
var query="INSERT INTO inventory SET ?";
var data=[];

postService(url,query,data);

function postService(url,sqlquery,data){
    

app.post('url', function(req,res,next){
    try{
        var reqObj = req.body;
      
        //var query ="SELECT * FROM customer";
        req.getConnection(function(err, conn){
            if(err)
            {
                console.error('SQL Connection error: ', err);
                return next(err);
            }
            else
            {
                var insertSql = sqlquery;
                var insertValues={};
                for (var i=0;i<data.length;i++){
                insertValues[data[i]]=reqObj[data[i]];
                    
                }
                
                    
                    
                    
//                    "customerid" : reqObj.customerid,
//                    "name" : reqObj.name,
//                    "address" : reqObj.address,
//                    "city": reqObj.city,
//                    "zipcode": reqObj.zipcode,
//                    "email": reqObj.email,
//                    "phoneno": reqObj.phoneno
//                  
                
                var query = conn.query(insertSql, insertValues, function (err, result){
                    if(err){
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    console.log(result);
                    var name_Id = result.insertId;
                    res.json({"name":name_Id});

                });
            }
        });
    }
catch(ex){
console.error("Internal error:" +ex);
return next(ex);
}
});
}

