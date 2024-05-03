// fs module 방식 / 백준 경로 '/dev/stdin'
const fs = require("fs");

const [a, b, c] = fs.readFileSync("../input.txt").toString().split(" ").map(Number);
// const dices = fs.readFileSync("../input.txt").toString().split(" ").map(Number);

//같은눈 3개 = 10,000 + 같은 눈  * 1000
//같은눈 2개 = 1,000 + 같은 눈 * 100
//모두 다른 눈 = 가장 큰 눈 * 100

// 주사위 갯수가 더 늘어나더라도 모두 비교하게 만들어보기
const cashCalculator = (first, second, third) => {
    let cash = 0;
    if(first === second && first === third){
        // 주사위 3개가 모두 동일한 경우
        cash = first * 1000 + 10000;
        console.log(cash);
    } else if (first === second || first === third || second === third) {
        // 주사위 2개만 같은 경우
        cash = first === second || first === third ? first * 100 + 1000 : second * 100 + 1000;
        console.log(cash);
    } else {
        // 모두 다른 경우
        const highestNum = Math.max(first, second,third);
        cash = highestNum * 100
        console.log(cash);
    }
}

cashCalculator(a, b ,c)