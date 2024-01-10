const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const mysql = require('mysql')

const convert = express()
convert.use(cors())
convert.use(bodyparser.json())
convert.use(express.json())
convert.use(bodyparser.urlencoded({extended: true}))
convert.use(express.static('public'))

let con = mysql.createConnection({
    host: "localhost",
    port:"3306",
    user:"root",
    password:"madhu@2020",
    database:"datadb",
})
con.connect(function(error){
    if(error){
        console.log('db is not connected',error)   
    
    }
    else{
        console.log("db is connected")
    }
     })

     convert.post('/insert3d', (request, response) => {
        const { image, layoutimage, name, description, location, status, date} = request.body;
        
        const sql = "INSERT INTO threedimage (image,layoutimage, name, description, location, status, date) VALUES ( ?, ?, ?, ?, ?, ?, ?)";
        
        con.query(sql, [ image, layoutimage, name, description, location, status, date], (error, result) => {
            if (error) {
                response.send({ "status": "error" });
                console.log(error)
            } else {
                response.send({ "status": "inserted" });
            }
        });
    });

    convert.get('/getall3d',(request,response)=>{
        let sql = 'select * from threedimage'
        con.query(sql,(error,result)=>{
            if (error) {
                response.send(error)
            }
            else{
                response.send(result)
            }
        })
    })

    convert.post('/delete3d',(request,response)=>{
        let id = request.body.id
        let sql = 'delete from threedimage  where id=?'
        con.query(sql,[id],(error,result)=>{
            if (error) {
                response.send(error)
            }
            else{
                response.send({"status":"deleted"})
            }
        })
    })
    convert.get('/getupdate/:id',(request,response)=>{
        let {id} = request.params;
        let sql = "SELECT * FROM threedimage  WHERE id=?"
        con.query(sql,[id],(error,result)=>{
            if (error) {
                response.send(error);
            }
            else{
                response.send(result);
                }
        })
    })
    convert.put('/updatebuild/:id',(request,response)=>{
        let {id} = request.params
        let {image,layoutimage, name, description, location, status, date}=request.body;
        const sql = 'UPDATE threedimage  SET image=?, layoutimage=?,name=?, description=?, location=?, status=?, date=? WHERE id=?';
    con.query(sql,[image, layoutimage,name, description, location, status, date, id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            response.send(error)
        }
        else{
            response.send({"status":"updated"})
        }
    })
    })
    convert.get('/getbyid/:id', (request, response) => {
        const id = parseInt(request.params.id);
        let sql = 'SELECT * FROM threedimage WHERE id = ?';
    
        con.query(sql, [id], (error, result) => {
            if (error) {
                response.send(error);
            } else {
                response.send(result);
            }
        });
    });
     convert.post('/register', (request, response) => {
        let {username, category, email, password } = request.body;
        
        let sql = "INSERT INTO register (username, category, email, password) VALUES (?, ?, ?, ?)";
        
        con.query(sql, [username,category, email, password], (error, result) => {
            if (error) {
                response.send({ "status": "error" });
                console.log(error)
            } else {
                response.send({ "status": "inserted" });
            }
        });
    });
     convert.post('/insert', (request, response) => {
        let {username, email, password,category, gender, age, address, city, country, phonenumber, educationlevel, courseofinterest } = request.body;
        
        let sql = "INSERT INTO education (username, email, password, category, gender, age, address, city, country, phonenumber, educationlevel, courseofinterest) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        
        con.query(sql, [username, email, password,category, gender, age, address, city, country, phonenumber, educationlevel, courseofinterest], (error, result) => {
            if (error) {
                response.send({ "status": "error" });
                console.log(error)
            } else {
                response.send({ "status": "inserted" });
            }
        });
    });
    
     convert.post('/login',(request,response)=>{
        let{email,password}=request.body
        let sql='select * from education where email=?'
        con.query(sql,[email],(error,result)=>{
            if(error){
                response.send({"status":"error"})
            }
            else if(result.length>0){
                let dbemail=result[0].email
                let dbpassword=result[0].password
                let id=result[0].id
                let category=result[0].category
                if(dbemail===email && dbpassword===password){
                    response.send({"status":"success","id":id,"category":category})
                }
                else{
                    response.send({"status":"invalid"})
                } 
            }
            else{
                response.send({"status":"empty-set"})
            }
        })
    
    })
    convert.post('/log',(request,response)=>{
        let{email,password}=request.body
        let sql='select * from register where email=?'
        con.query(sql,[email],(error,result)=>{
            if(error){
                response.send({"status":"error"})
            }
            else if(result.length>0){
                let dbemail=result[0].email
                let dbpassword=result[0].password
                let id=result[0].id
                let category=result[0].category
                if(dbemail===email && dbpassword===password){
                    response.send({"status":"success","id":id,"category":category})
                }
                else{
                    response.send({"status":"invalid"})
                } 
            }
            else{
                response.send({"status":"empty-set"})
            }
        })
    
    })
    // title,lesson,students,rating,imageurl
    convert.post('/inserting', (request, response) => {
        const { image, title, lesson, students, rating} = request.body;
        
        const sql = "INSERT INTO course ( image, title, lesson, students, rating) VALUES ( ?, ?, ?, ?, ?)";
        
        con.query(sql, [ image,title, lesson, students, rating], (error, result) => {
            if (error) {
                response.send({ "status": "error" });
                console.log(error)
            } else {
                response.send({ "status": "inserted" });
            }
        });
    });
    convert.post('/deletee',(request,response)=>{
        let id = request.body.id
        let sql = 'delete from course where id=?'
        con.query(sql,[id],(error,result)=>{
            if (error) {
                response.send(error)
            }
            else{
                response.send({"status":"deleted"})
            }
        })
    })
    convert.get('/getalll',(request,response)=>{
        let sql = 'select * from course'
        con.query(sql,(error,result)=>{
            if (error) {
                response.send(error)
            }
            else{
                response.send(result)
            }
        })
    })
    convert.get('/getupdate/:id',(request,response)=>{
        let {id} = request.params;
        let sql = "SELECT * FROM course WHERE id=?"
        con.query(sql,[id],(error,result)=>{
            if (error) {
                response.send(error);
            }
            else{
                response.send(result);
                }
        })
    })
    convert.put('/update/:id',(request,response)=>{
        let {id} = request.params
        let {image, title, lesson, students, rating}=request.body;
        const sql = 'UPDATE course SET image=?, title=?, lesson=?, students=?,  rating=? WHERE id=?';
    con.query(sql,[image, title, lesson, students, rating, id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            response.send(error)
        }
        else{
            response.send({"status":"updated"})
        }
    })
    })
    convert.listen(3005,()=>{
        console.log(`server started at 3005`)
    })
    