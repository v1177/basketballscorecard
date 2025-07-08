let pointsSum1 = document.getElementById("score1");
let pointsSum2 = document.getElementById("score2");

function threePoints() {
    let num1 = 3;
    pointsSum1.textContent = Number(pointsSum1.textContent) + num1;
}

function twoPoints() {
    let num2 = 2;
    pointsSum1.textContent = Number(pointsSum1.textContent) + num2;
}

function onePoint() {
    let num3 = 1;
    pointsSum1.textContent = Number(pointsSum1.textContent) + num3;
}

function threePointsNum2() {
    let num1 = 3;
    pointsSum2.textContent = Number(pointsSum2.textContent) + num1;
}

function twoPointsNum2() {
    let num2 = 2;
    pointsSum2.textContent = Number(pointsSum2.textContent) + num2;
}

function onePointNum2() {
    let num3 = 1;
    pointsSum2.textContent = Number(pointsSum2.textContent) + num3;
}

function resetPoints() {
    pointsSum1.textContent = 0
    pointsSum2.textContent = 0
}

