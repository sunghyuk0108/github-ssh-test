// fs module 방식 / 백준 경로 '/dev/stdin'
const fs = require("fs");

const [a, b] = fs.readFileSync("../input.txt").toString().split("\n");

// 첫째 줄은 현재 시각
// 두번 째 줄은 요리하는데 필요한 시간
// 출력은 요리가 끝나는 시간을 시와 분 사이에 공백을 두고 출력한다.
const [currentHour, currentMinute] = a.split(" ").map(Number)
const cookingTime = Number(b);

const ovenWatch = (hour, minute, time) => {
    // 분으로 환산함
    const totalTime = hour * 60 + minute + time;
    // totalTime 나머지 값은 분으로 활용
    const printMinute = totalTime % 60;
    // 소수점 이하 버림
    const printHour = Math.floor(totalTime / 60);

    if(printHour >= 24){
        console.log(printHour % 24, printMinute);
    } else {
        console.log(printHour, printMinute);
    }
}

ovenWatch(currentHour, currentMinute, cookingTime);
