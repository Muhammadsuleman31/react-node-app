import express from "express"
import path from 'path';
import {fileURLToPath} from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname + "public")))


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.listen(process.env.PORT || 5000, () => {
    console.log("Server listening on 5000");
  });


  