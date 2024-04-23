// fs module 방식 / 백준 경로 '/dev/stdin'
const fs = require("fs");

const [a, b] = fs.readFileSync("../input.txt").toString().split("\n");

// 첫째 줄은 현재 시각
// 두번 째 줄은 요리하는데 필요한 시간
// 출력은 요리가 끝나는 시간을 시와 분 사이에 공백을 두고 출력한다.
const [hour, minute] = a.split(" ").map(Number)
const cookingTime = Number(b);

console.log(hour, minute, cookingTime, '입력');
const ovenWatch = (hour, minute, time) => {
    const sumMinute = minute + time;
    // sumMinute의 나머지는 분으로 활용
    const outputHour = Math.floor(sumMinute / 60);
    const outputMinute = sumMinute % 60;
    console.log(outputHour, outputMinute)
}

ovenWatch(hour, minute, cookingTime);
// const cookingMinute = Number(b);

// b가 60보다 크면


// console.log(H, M);
