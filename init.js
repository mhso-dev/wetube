import "./db";
import app from "./app";
import dovenv from "dotenv";

dovenv.config();

import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

const handleListening = () => console.log(`✅  Listening on : http//localhost:${PORT}`);

app.listen(PORT, handleListening);