const express = require('express');

const app = express();


const { magic8Responses, generateRandomRes } = require('./Random');

app.get('/', (req, res) => {
  res.status(200).send(`Hello, world!`);
});
app.get('/terminator', (req, res) => {
  res.send(`I'll be back`);
});

app.get('/emeril', (req, res) => {
  res.send(`Bam!`);
});

app.get('/steve-mcgarrett', (req, res) => {
  res.send(`Bam!`);
});

app.get('/Taylor', (req, res) => {
  res.send(`Clear eyes, full hearts, can't Lose`);
});

app.get('/Homer-Simpson', (req, res) => {
  res.send(`D'Oh`);
});

app.get('/Bruce-Banner', (req, res) => {
  res.send(`Don't make me angry!`);
});

app.get('/JJ-Evans', (req, res) => {
  res.send(`Dy-no-myte!`);
});

app.get('/Batman', (req, res) => {
  res.send(`To the Batmobile!`);
});

app.get('/Hannibal-Smith', (req, res) => {
  res.send(`I love it when a plan comes together!`);
});

app.get('/Fraiser', (req, res) => {
  res.send(`I'm listening!`);
});

app.get('/Regis', (req, res) => {
  res.send(`Is that your final answer?`);
});

app.get(`/Rosie`, (req, res) => {
  res.send(`Be right back!`);
});

app.get('/magic8', (req, res) => {
  res.send(`<h1>${generateRandomRes(magic8Responses)}</h1>`);
});


module.exports = app;
