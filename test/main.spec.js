"use strict";
var fs = require("fs");
var chai = require("chai");
var expect = chai.expect;

fs.readdirSync("lib") //
  .map((e) => require(`../lib/${e}`))
  .forEach(({ name, fn, params }) => {
    describe(name, function () {
      params().forEach(({ args, target }, i) => {
        it(`test case ${i + 1}`, function () {
          let result = fn(...args);
          expect(result).to.deep.equal(target);
        });
      });
    });
  });
