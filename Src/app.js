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

app.post('/delete', async (req, res) => {
    await Task.findByIdAndDelete(req.body.id)
    res.redirect('/');
});

app.post('/edit', async (req, res) => {
    const Tasks = await Task.findById(req.body.id);
    res.render('edit', {Tasks});
});

app.post('/put', async (req, res) => {
    const Tasks = await Task.find();
    const ntask = req.body.task
    const ndescription = req.body.description
    
    console.log(req.body.id)
    console.log(req.body.ntask)
    console.log(req.body.ndescription)
    await Task.findByIdAndUpdate(req.body.id, {ntask, ndescription})
    res.redirect('/')
});






//ARCHIVOS ESTATICOS
app.use(express.static(__dirname + '/public'));

module.exports = app;
