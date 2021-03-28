"use strict";
var fs = require("fs");
var chai = require("chai");
var expect = chai.expect;

fs.readdirSync("lib") //
  .map((e) => require(`../lib/${e}`))
  .filter((e) => !e.ignore)
  .forEach(({ name, fn, params }) => {
    describe(name, function () {
      params().forEach(({ args, target }, i) => {
        it(`test case ${i + 1}`, function () {
          const result = fn(...args);
          expect(result).to.deep.equal(target);
        });
      });
    });
  });
