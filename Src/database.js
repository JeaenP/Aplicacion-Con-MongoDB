const mongosse = require('mongoose')

mongosse.connect('mongodb+srv://Jean:jp2583462@cluster0.ai7ogxe.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('base de datos conectada'))
    .catch(e => console.log(e)); 
