const fs = require('fs');
const solc = require('solc');
const path = require ('path');
const ProjectPath = path.resolve(__dirname, 'Contracts', 'Project.sol');
const source = fs.readFileSync( ProjectPath, 'utf8');
module.exports = solc.compile(source,1).contracts[':Project'];