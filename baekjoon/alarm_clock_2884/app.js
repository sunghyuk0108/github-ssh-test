// fs module 방식 / 백준 경로 '/dev/stdin'
const fs = require("fs");

const [a, b] = fs.readFileSync("../input.txt").toString().split(" ");

// M을 기준으로 H가 변하는 관계를 잘 생각해야될 듯
const H = Number(a);
const M = Number(b);

// M이 45보다 작은 경우와 큰 경우 출력되는 값을 생각하고 시간이 0이하일 경우를 생각하면될 듯.
// 다른 방법으로는 시간을 아예 분으로 환산하고 진행해도 될 듯.
if (M < 45) {
    if (H === 0) {
        console.log(H + 23, 60 + M - 45);
    } else {
        console.log(H - 1, 60 + M - 45);
    }
} else {
    console.log(H, M - 45);
}
