#!/usr/bin/env node
const space = 0
const yargs = require('yargs')
const { _: positional, $0, ...args } = yargs.argv

let out = Object.keys(args).length === 0
  ? positional
  : args

console.log(JSON.stringify(out, null, space))
