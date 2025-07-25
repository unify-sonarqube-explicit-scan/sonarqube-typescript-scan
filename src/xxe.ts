import * as fs from 'fs';
const libxmljs = require('libxmljs');

const xml = fs.readFileSync('xxe.xml', 'utf8');
libxmljs.parseXmlString(xml, {
  noblanks: true,
  noent: true, // Noncompliant: expands entities, can lead to XXE
  nocdata: true,
});
