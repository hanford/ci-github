#!/usr/bin/env node

const { argv } = require('optimist')
const assert = require('assert')
const github = require('./github')
const Github = github.create()
const { comment, link } = argv

assert(comment, '--comment must be defined!')

if (link) {
  Github.comment(`<a href='${link}' target='_blank'>${comment}</a>`)
} else {
  Github.comment(comment)
}
