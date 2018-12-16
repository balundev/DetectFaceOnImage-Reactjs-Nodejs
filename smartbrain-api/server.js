const express    = require('express'),
      bodyParser = require('body-parser'),
      bcrypt     = require('bcrypt-nodejs'),
      cors       = require('cors'),
      knex       = require('knex');
      app        = express();

// database conf
const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'lol123123',
        database : 'smart-brain'
    }
});

// app config
app.use(bodyParser.json());
app.use(cors());



app.get('/',(req,res)=>{
    res.send(database.users);
});

app.post('/signin',(req,res)=>{
    db.select('email', 'hash').from('login').where('email', '=', req.body.email)
        .then(data=>{
           const validation = bcrypt.compareSync(req.body.password, data[0].hash);
           if(validation){
              return db.select('*').from('users').where('email', '=', req.body.email)
                   .then(user => {
                       res.json(user[0])
                   })
                   .catch(err=>{
                       res.status(400).json('unable to get user')
                   })
           }
        })
        .catch(err=>{
            res.status(400).json('wrong credentials')
        })
});

app.post('/register',(req,res)=>{
    const {email, name, password } = req.body;
    bcrypt.hash(password,null, null, function (err,hash) {
        db.transaction(trx => {
            trx.insert({
                hash: hash,
                email: email
            })
                .into('login')
                .returning('email')
                .then(loginEmail=>{
                   return trx('users')
                        .returning('*')
                        .insert({
                            email: loginEmail[0],
                            name:name,
                            joined: new Date()
                        })
                        .then(user=>{
                            res.json(user[0])
                        })
                })
                .then(trx.commit)
                .catch(trx.rollback)
        })
            .catch(error=>{
                res.status(400).json('Unable to register')
            })
    });
});

app.get('/profile/:id',(req,res)=>{
    const {id} = req.params;
    db.select('*').from('users').where({id: id})
        .then(user=>{
            if(user.length) {
                res.json(user[0]);
            }else{
                res.status(400).json('user not found');
            }
    })
});

app.put('/image',(req,res)=>{
    const {id} = req.body;
    db('users').where('id', '=', id)
        .increment('entries',1)
        .returning('entries')
        .then(entries=>{
            res.json(entries[0]);
        })
        .catch(err => res.status(400).json('unable to get entries'))
});

app.listen(3000, ()=>{
    console.log('server just started');
});