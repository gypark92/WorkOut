const toggle = document.getElementById("Toggle")

const 첫글자대문자 = "첫글자대문자"
const 전체소문자 = "전체소문자"
const 모두대문자 = "모두대문자"
const 토글가능상태 = [첫글자대문자, 전체소문자, 모두대문자]
const 초기인덱스 = 토글가능상태.indexOf(전체소문자);
let 토글상태 = 토글가능상태[초기인덱스]
let 클릭횟수 = 초기인덱스;

let animals = initializeAnimals();
updateListView(animals);

toggle.addEventListener("click", function () {
    클릭횟수++;
    const 다음상태 = 다음상태계산(클릭횟수)
    animals = translateWords(다음상태, animals);
    updateListView(animals);
})

function initializeAnimals() {
    return translateWords(토글상태, loadAnimals())
}

function updateListView(values) {
    const list = document.querySelectorAll('.ani')
    list.forEach((li, index) => li.textContent = values[index])
}

function loadAnimals() {
    const list = document.querySelectorAll('.ani')
    return Array.prototype.slice.call(list).map(li => li.textContent)
}

function translateWords(상태, words) {
    if (토글가능상태.indexOf(상태) === -1) {
        console.error("에러");
        throw new Error("옳바른 상태값이 아닙니다.");
    }

    if (상태 === 전체소문자) {
        return words.map(item => item.toLowerCase())
    }

    if (상태 === 모두대문자) {
        return words.map(item => item.toUpperCase())
    }

    if (상태 === 첫글자대문자) {
        return words.map(item => {
            let 소문자 = item.toLowerCase()
            const firstChar = 소문자.charAt(0).toUpperCase();
            const restString = 소문자.substring(1);
            return firstChar + restString;
        })
    }

    return [];
}

function 다음상태계산(클릭횟수) {
    return 토글가능상태[클릭횟수 % 토글가능상태.length]
}



const 가용상태 = ["가마니", "배고픔", "추움", "졸림"];
let 상태 = 가용상태[0];
//  상태 = "졸림";
상태 = 가용상태[1];
// 상태 = 가용상태[2];
// 상태 = 가용상태[3]
let 행동 = 상태에따른행동결정(상태);
프린트(행동);


function 프린트(행동) {
    console.warn(행동);
}

function 상태에따른행동결정(상태) {
    let 행동 = "";

    if (상태 === 가용상태[1]) {
        행동 = "밥먹"

    } else if (상태 === 가용상태[3]) {
        행동 = "꿀잠"

    } else if (상태 === 가용상태[2]) {
        행동 = "히터"

    }
    return 행동
}