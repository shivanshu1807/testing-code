require('dotenv').config();

const bodyParser = require('body-parser');
const connectToMongo = require('./db');
const cors = require('cors');
const multer = require('multer');


connectToMongo();




app.use('/api/auth', require('./routes/auth'));
app.use('/api/image', require('./routes/imagePrediction'));

app.get('/', (req, res) => {
    res.send('canCare : smarter predictions safer tomorrow');
});

app.listen(PORT, () => {
    console.log(`canCare backend listening on http://localhost:${PORT}`);
})
