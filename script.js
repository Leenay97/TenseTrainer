let exBlock = document.querySelector('.example');
let condition = document.querySelector('.condition');
let nextButton = document.querySelector('.next-button')
let input = document.querySelector('.input');
let hideButton = document.querySelector('.hide-ul')
let list = document.querySelector('ul');
let lastAnswer = document.querySelector('.last-answer');
let rulesButton = document.querySelector('.rules-button');
let rules = document.querySelector('.rules');

let verbs = ['eat/eats/eating', 'walk/walks/walking', 'run/runs/running', 'hunt/hunts/hunting', 'sleep/sleeps/sleeping', 'draw/draws/drawing', 'have breakfast/has breakfast/having breakfast', 'shave/shaves/shaving', 'have a shower/has a shower/having a shower', 'drive to work/drives to work/driving to work', 'have a break/has a break/having a break', 'play football/plays football/playing football', 'go out/goes out/going out', 'visit relatives/visits relatives/visiting relatives', 'wear clothes/wears clothes/wearing clothes', 'do housework/does housework/doing housework', 'go to parties/goes to parties/going to parties', 'watch TV/watches TV/watching TV', 'play cards/plays cards/playing cards', 'feed pets/feeds pets/feeding pets']
let nounsAm = ['I'];
let nounsIs = ['he', 'she', 'it', 'Ricardo', 'Patrick', 'Polina', 'Mei', 'Valentina'];
let nounsAre = ['they', 'we', 'you', 'students', 'my friends', 'dogs', 'doctors'];
let choose = [];
let group;
let started = 0;
let firstSent;
let task;
let rightAnsw = '';
let helpDo = [];
let helpTobe = [];
let helpEnjoy = 'enjoy';
let splitForm;
let helpHaveto = 'have to';
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
let rnd = Math.floor(Math.random() * number.length);
let currNumber = number[rnd];
let k = 1;

rulesButton.addEventListener('click', ()=>{
    rules.classList.toggle('hidden');
})

hideButton.addEventListener('click', () => {
    list.classList.toggle('hidden');
    if (k == 1) {
        hideButton.innerHTML = 'Hide Answers'
        hideButton.classList.add('show');
        k=0;
    } else if (k == 0) {
        hideButton.innerHTML = 'Show Answers'
        hideButton.classList.remove('show');
        k=1;
    }
})

function Example() {
    let subj = Math.floor(Math.random() * 3);
    if (subj == 0) {
        choose.push(nounsAm[0]);
        console.log(choose);
        group = 1;
    } else if (subj == 1) {
        choose.push(nounsIs[Math.floor(Math.random() * nounsIs.length)]);
        console.log(choose);
        group = 2;
    } else if (subj == 2) {
        choose.push(nounsAre[Math.floor(Math.random() * nounsAre.length)]);
        console.log(choose);
        group = 3;
    }
    choose.push(verbs[Math.floor(Math.random() * verbs.length)])

    if (group == 1) {
        firstSent = choose[0] + ' ' + choose[1].split('/')[0];
        helpDo = ['do', "do not"];
        helpTobe = ['am', "am not"];
        splitForm = 0;
    } else if (group == 2) {
        firstSent = choose[0] + ' ' + choose[1].split('/')[1];
        helpDo = ['does', "does not"];
        helpTobe = ['is', "is not"];
        helpEnjoy = 'enjoys';
        helpHaveto = 'has to'
        splitForm = 1;
    } else if (group == 3) {
        firstSent = choose[0] + ' ' + choose[1].split('/')[0];
        helpDo = ['do', "do not"];
        helpTobe = ['are', "are not"];
        splitForm = 0;
    }
    exBlock.innerHTML = firstSent;
}

function Excercise() {
    if (number.length == 0) {
        exBlock.innerHTML = "It's time to check!"
        condition.innerHTML = 'You did great!'
        input.classList.add('blocked');
        return false;
    }
    console.log(currNumber);
    switch (currNumber) {
        case 1:
            task = "Обычно +";
            rightAnsw = choose[0] + ' usually ' + choose[1].split('/')[splitForm];
            break;
        case 2:
            task = "Обычно -";
            rightAnsw = choose[0] + ' ' + helpDo[1] + ' usually ' + choose[1].split('/')[0];
            break;
        case 3:
            task = "Обычно ?";
            rightAnsw = helpDo[0] + ' ' + choose[0] + ' usually ' + choose[1].split('/')[0];
            break;

        case 4:
            task = "Сейчас +";
            rightAnsw = choose[0] + ' ' + helpTobe[0] + ' ' + choose[1].split('/')[2] + ' now';
            break;
        case 5:
            task = "Сейчас -";
            rightAnsw = choose[0] + ' ' + helpTobe[1] + ' ' + choose[1].split('/')[2] + ' now';
            break;
        case 6:
            task = "Сейчас ?";
            rightAnsw = helpTobe[0] + ' ' + choose[0] + ' ' + choose[1].split('/')[2] + ' now';
            break;

        case 7:
            task = "Скоро +";
            rightAnsw = choose[0] + ' ' + helpTobe[0] + ' ' + choose[1].split('/')[2] + ' soon';
            break;
        case 8:
            task = "Скоро -";
            rightAnsw = choose[0] + ' ' + helpTobe[1] + ' ' + choose[1].split('/')[2] + ' soon';
            break;
        case 9:
            task = "Скоро ?";
            rightAnsw = helpTobe[0] + ' ' + choose[0] + ' ' + choose[1].split('/')[2] + ' soon';
            break;

        case 10:
            task = "Собирается +";
            rightAnsw = choose[0] + ' ' + helpTobe[0] + ' going to ' + choose[1].split('/')[0];
            break;
        case 11:
            task = "Собирается -";
            rightAnsw = choose[0] + ' ' + helpTobe[1] + ' going to ' + choose[1].split('/')[0];
            break;
        case 12:
            task = "Собирается ?";
            rightAnsw = helpTobe[0] + ' ' + choose[0] + ' going to ' + choose[1].split('/')[0];
            break;

        case 13:
            task = "Жалоба +";
            rightAnsw = choose[0] + ' ' + helpTobe[0] + ' always ' + choose[1].split('/')[2];
            break;

        case 14:
            task = "Решил сейчас +";
            rightAnsw = choose[0] + ' will ' + choose[1].split('/')[0];
            break;
        case 15:
            task = "Решил сейчас -";
            rightAnsw = choose[0] + " will not " + choose[1].split('/')[0];
            break;

        case 16:
            task = "Решил сейчас ?";
            rightAnsw = 'Will ' + choose[0] + ' ' + choose[1].split('/')[0];
            break;

        case 17:
            task = "Любит (enjoy) +";
            rightAnsw = choose[0] + ' ' + helpEnjoy + ' ' + choose[1].split('/')[2];
            break;
        case 18:
            task = "Любит (enjoy) -";
            rightAnsw = choose[0] + ' ' + helpDo[1] + ' ' + 'enjoy' + ' ' + choose[1].split('/')[2];
            break;
        case 19:
            task = "Любит (enjoy) ?";
            rightAnsw = helpDo[0] + ' ' + choose[0] + ' ' + 'enjoy' + ' ' + choose[1].split('/')[2];
            break;

        case 20:
            task = "Умеет +";
            rightAnsw = choose[0] + ' can ' + choose[1].split('/')[0];
            break;
        case 21:
            task = "Умеет -";
            rightAnsw = choose[0] + " can not " + choose[1].split('/')[0];
            break;
        case 22:
            task = "Умеет ?";
            rightAnsw = 'Can ' + choose[0] + ' ' + choose[1].split('/')[0];
            break;

        case 23:
            task = "Можно +";
            rightAnsw = choose[0] + ' may ' + choose[1].split('/')[0];
            break;
        case 24:
            task = "Можно -";
            rightAnsw = choose[0] + " may not " + choose[1].split('/')[0];
            break;
        case 25:
            task = "Можно ?";
            rightAnsw = 'May ' + choose[0] + ' ' + choose[1].split('/')[0];
            break;

        case 26:
            task = "Должен +";
            rightAnsw = choose[0] + ' must ' + choose[1].split('/')[0];
            break;
        case 27:
            task = "Должен -";
            rightAnsw = choose[0] + " must not " + choose[1].split('/')[0];
            break;
        case 28:
            task = "Должен ?";
            rightAnsw = 'Must ' + choose[0] + ' ' + choose[1].split('/')[0];
            break;

        case 29:
            task = "Нужно +";
            rightAnsw = choose[0] + ' ' + helpHaveto + ' ' + choose[1].split('/')[0];
            break;
        case 30:
            task = "Нужно -";
            rightAnsw = choose[0] + ' ' + helpDo[1] + " have to " + choose[1].split('/')[0];
            break;
        case 31:
            task = "Нужно ?";
            rightAnsw = helpDo[0] + ' ' + choose[0] + " have to " + choose[1].split('/')[0];
            break;

        case 32:
            task = "Следует +";
            rightAnsw = choose[0] + ' should ' + choose[1].split('/')[0];
            break;
        case 33:
            task = "Следует -";
            rightAnsw = choose[0] + " should not " + choose[1].split('/')[0];
            break;
        case 34:
            task = "Следует ?";
            rightAnsw = 'Should ' + choose[0] + ' ' + choose[1].split('/')[0];
            break;

        case 35:
            task = "Хотел бы +";
            rightAnsw = choose[0] + ' would like to ' + choose[1].split('/')[0];
            break;
        case 36:
            task = "Хотел бы -";
            rightAnsw = choose[0] + " would not like to " + choose[1].split('/')[0];
            break;
        case 37:
            task = "Хотел бы ?";
            rightAnsw = 'Would ' + choose[0] + ' like to ' + choose[1].split('/')[0];
            break;

        case 38:
            task = "Если +";
            rightAnsw = 'If ' + choose[0] + ' ' + choose[1].split('/')[splitForm] + `, smth will happen`;
            break;
        case 39:
            task = "Если -";
            rightAnsw = 'If ' + choose[0] + ' ' + helpDo[1] + ' ' + choose[1].split('/')[0] + `, smth won't happen`;
            break;
        case 40:
            task = "Если ?";
            rightAnsw = 'If ' + choose[0] + ' ' + choose[1].split('/')[splitForm] + `, will smth happen`;
            break;
    }
    condition.innerHTML = task;
}

function buttonClick() {
    if (started == 0) {
        Example();
        Excercise();
        nextButton.innerHTML = 'Next!';
        input.classList.remove('blocked')
        console.log('sda')
    } else {
        // if (input.value == '') return;
        document.querySelector(`.a${currNumber}`).children[0].innerHTML = rightAnsw;
        document.querySelector(`.a${currNumber}`).children[0].classList.add('active');

        document.querySelector(`.a${currNumber}`).children[1].innerHTML = input.value;
        if (input.value.toLowerCase() == rightAnsw.toLowerCase()) {
            document.querySelector(`.a${currNumber}`).children[1].classList.add('true');
        } else {
            document.querySelector(`.a${currNumber}`).children[1].classList.add('active');
        }

        lastAnswer.innerHTML =`<div class="label">Last answer</div>${rightAnsw}`;
        number.splice(rnd, 1);
        rnd = Math.floor(Math.random() * (number.length - 1));
        currNumber = number[rnd];
        Excercise();
        input.value = '';
    }
    started++;
}

document.addEventListener("keypress", () => {
    if (event.key === "Enter") buttonClick();
});

nextButton.addEventListener("click", () => {
    buttonClick();
});




