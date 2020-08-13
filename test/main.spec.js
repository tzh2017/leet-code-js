"use strict";
var fs = require("fs");
var chai = require("chai");
var expect = chai.expect;

fs.readdirSync("lib") //
  .map((e) => require(`../lib/${e}`))
  .forEach(({ desc, fn, params }) => {
    describe(desc, function () {
      it("test", function () {
        params().forEach(([input, output]) => {
          expect(fn(input)).to.equal(output);
        });
      });
    });
  });
