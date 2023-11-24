const express = require('express');
const app = express();

app.use(express.static('public'));


// GET-Route für die Willkommensseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = 80s;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});