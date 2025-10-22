const express = require("express")
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

//routes
const taskRoutes = require("./routes/task.routes")

// Load environment variables from .env file
dotenv.config();


const server = express();
// Enable CORS for all routes and origins
server.use(cors());

// Middleware
server.use(express.json());

server.use("/tasks", taskRoutes);

const databaseURI = process.env.MONGO_ATLAS_URI ? process.env.MONGO_ATLAS_URI : process.env.MONGO_LOCAL_URI;

// Database name (can be provided separately or included in the connection string)
const databaseName = process.env.MONGO_DB_NAME || undefined;

//connect to MongoDB; if databaseName is provided, pass it as an option so you can override the DB name
mongoose.connect(databaseURI, databaseName ? { dbName: databaseName } : {})
    .then(() => {
        console.log(`Connected to MongoDB${databaseName ? ` (db: ${databaseName})` : ''}`);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const port = process.env.PORT || 8090;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});