const express = require("express");
const cors = require("cors");

const { getHouses, deleteHouse, createHouse, updateHouse } = require('./controller.js');

const app = express();

app.use(express.json());
app.use(cors());

const SERVER_PORT = 4004;

app.listen(SERVER_PORT, () => console.log(`Server listening on port: ${SERVER_PORT}`));

const baseURL = '/api/houses';

app.get(baseURL, getHouses);
app.post(baseURL, createHouse);
app.delete(`${baseURL}/:id`, deleteHouse);
app.put(`${baseURL}/:id`, updateHouse);
