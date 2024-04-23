// fs module 방식 / 백준 경로 '/dev/stdin'
const fs = require("fs");

const [a, b] = fs.readFileSync("../input.txt").toString().split("\n");


// readline 모듈 방식
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input = input.map((item) => +item);
  //함수로 입력 받아서 답 제출하면됨
  solution(input[0], input[1]);
  process.exit();
});