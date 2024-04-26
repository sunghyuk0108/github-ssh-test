// fs module 방식 / 백준 경로 '/dev/stdin'
const fs = require("fs");

const [a, b] = fs.readFileSync("../input.txt").toString().split("\n");

// 첫째 줄은 현재 시각
// 두번 째 줄은 요리하는데 필요한 시간
// 출력은 요리가 끝나는 시간을 시와 분 사이에 공백을 두고 출력한다.
const [hour, minute] = a.split(" ").map(Number)
const cookingTime = Number(b);

const ovenWatch = (hour, minute, time) => {
    // sumMinute의 나머지는 분으로 활용
    const hourInMinute = hour * 60;
    // 현재 시각의 분과 cookingTime을 더함
    const sumMinute = minute + time;
    const totalTime = hourInMinute + sumMinute;
    const printMinute = totalTime % 60;
    const printHour = Math.floor(totalTime / 60);

    // 최종 시간이 24시간의 나머지 값을 구하고 나머지는 결국 출력될 시간이됨
    if(printHour >= 24){
        console.log(printHour % 24, printMinute);
    } else {
        console.log(printHour, printMinute);
    }
}

ovenWatch(hour, minute, cookingTime);
