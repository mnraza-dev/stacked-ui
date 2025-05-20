#!/usr/bin/env node

import * as fs from 'fs'

console.log("Hello from my CLI!")
const file = process.argv[2]
if (file && fs.existsSync(file)) {
  console.log("File contents:", fs.readFileSync(file, 'utf-8'))
} else {
  console.log("No file found or file path missing.")
}
