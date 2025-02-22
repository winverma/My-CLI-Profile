#!/usr/bin/env node
const { links, info } = require("../config.json");
const {
  getBlankLine,
  getTopBorder,
  getLinkLine,
  getTitleLine,
  getBottomBorder,
  getSeperator
} = require("./builder");

const card = [
  getTopBorder(),
  getBlankLine(),
  getTitleLine(info.name),
  getTitleLine(info.title),
  getBlankLine(), 
  getSeperator(),
  getBlankLine(), 

  ...links.map((link) => getLinkLine(link.name, link.url)),

  getBlankLine(),
  getBlankLine(),
  getBottomBorder(),
].join("\n");

console.log(card);
