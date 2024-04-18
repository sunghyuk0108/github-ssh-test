// fs module 방식 / 백준 경로 '/dev/stdin'
const fs = require("fs");

const [a, b] = fs.readFileSync("../input.txt").toString().split(" ");

// M을 기준으로 H가 변하는 관계를 잘 생각해야될 듯
const H = Number(a);
const M = Number(b);

if (M < 45) {
    if (H === 0) {
        console.log(H + 23, 60 - 45 + M);
    } else {
        console.log(H - 1, 60 - 45 + M);
    }
} else {
    console.log(H, M - 45);
}

console.log(H, M);
/* readline 모듈 방식 **/
/*
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
*/
