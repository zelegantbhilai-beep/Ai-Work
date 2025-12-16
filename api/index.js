
// Vercel Serverless Function Entry Point
// This file bridges Vercel's API handling with our existing Express server.
const app = require('../server/server.js');

module.exports = app;
