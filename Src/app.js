const express = require('express');
const app = express();
const Task = require('./model/Task');


//CONFIGURACION 
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

//EJECUCION ANTES DE LAS RUTAS MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', async (req, res) => {
    const Tasks = await Task.find();
    console.log(Tasks);
    res.render('index', {Tasks});
    
})

//RUTA 

app.post('/create', async (req, res) => {
    const newTask = new Task({
        task: req.body.task,
        description: req.body.description
    });
    await newTask.save();
    res.redirect('/');
})


//ARCHIVOS ESTATICOS
app.use(express.static(__dirname + '/public'));

module.exports = app;
