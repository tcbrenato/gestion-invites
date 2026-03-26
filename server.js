const express = require('express');
const app = express();
const PORT = 3000;

// Sert les fichiers du dossier public
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`✅ Serveur lancé sur : http://localhost:${PORT}`);
});