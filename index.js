const express= require ('express');
const app=express();
const cors = require('cors')


app.use(cors());
app.use(express.json())
const port=5000
app.get ('/', (req, res)=>{
    res.send("hello node with nodemon");
    
});
const users=[
    {id:0, name: "Mark zuckerberg", email: "mark@gmail.com"},
    {id:1, name:"Steve Jobs", email: "steve@gmail.com"},
    {id:2, name:"Jeff Bezos", email: "jeff@gmail.com"},
    {id:3, name:"jack Ma", email: "jack@gmail.com"}  
]

//query
app.get('/users',(req, res)=>{
    const search=req.query.search;
    if(search){
        const searchResult=users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);

    }
    else{
        res.send(users);
    }

});

//post method
app.post('/users', (req, res)=>{
    const newuser= req.body
    newuser.id=users.length
    users.push(newuser)
    res.json(newuser)
});

//dynamic api
app.get('/users/:id',(req, res)=>{

    const id=req.params.id;
    const user=users[id];
    res.send(user);

});
app.listen(port, ()=>{
    console.log('listening to port', port);
})