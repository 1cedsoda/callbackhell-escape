const wait = require('wait-for-stuff');
class Blocker {
  constructor() {this.block ={'active': true}}
  block() {this.block.active = true}
  release() {this.block.active = false}
  wait() {wait.for.value(this.block, 'active', false)}
}
module.exports = Blocker
