#!/usr/bin/env node

const program = require("commander");
const { prompt } = require("inquirer");
const changeLamda = require("./utils/ChangeLamda");

program.version("0.0.1").description("Mayur lamda halndler");

// questioning

const questions = [
  {
    type: "input",
    name: "path",
    message: "Please enter amplify path :-  ",
  },
];

// command in cli

program
  .command("change")
  .alias("c")
  .description("change the package.json file which create conflict.")
  .action(() => {
    prompt(questions).then((answer) => {
      const path = answer.path;
      changeLamda(path, "Mohit");
    });
  });

program.parse(process.argv);
