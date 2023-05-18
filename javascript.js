const inputTotalPreguntes = document.querySelector("input.countPreguntes")


let triviaUrls = []
let totalPreguntes = 20

const puntsRespostes = {
    totalRespostes: 0,
    correcte: 0,
    incorrecte: 0
}

let respostaCorrecte;
let index = 0;

//Selector de dificultat
const selectDificultat = document.querySelector('select.difficulty')

//Container començament trivia
const startContainer = document.querySelector('div.startTrivia')


//Container pregunta
const preguntaContainer = document.querySelector("div.question")

//Titul "Selecciona dificultat"
const titulDifficultat = document.querySelector("div.selectDificultat")

//Rectangle container
const rectangleContainer = document.querySelector("div.rectangle-container")

//Button restart
const buttonRestart = document.querySelector("button.restart")

//Input nom
const divInici = document.querySelector("div.inici")
// divInici.classList.remove("hidden")
const inputNom = document.querySelector("input.inputNom")

//Spinner
const spinner = document.querySelector("div.spinner")

//Rectangle respostes
const rectangleA = document.querySelector("div#a");
const rectangleB = document.querySelector("div#b");
const rectangleC = document.querySelector("div#c");
const rectangleD = document.querySelector("div#d");

//Lloc a no va la grafica
let canvas = document.getElementById('grafica');
// canvas.classList.add("hidden")

window.onload = function () {
    buttonRestart.classList.add("hidden")
    selectDificultat.value = "empty"
    startContainer.classList.add('hidden')
    preguntaContainer.classList.add("hidden")
    rectangleContainer.classList.add("hidden")
    divInici.classList.remove("hidden")
    inputNom.classList.remove("hidden")
    inputTotalPreguntes.classList.add("hidden")
    spinner.classList.add("hidden")


    inputNom.value = ""

    canvas.classList.add("hidden")
}

inputNom.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        crearCookie(event)
        seleccioDifficultat()
    }
})

function seleccioDifficultat() {
    divInici.classList.add("hidden")
    startContainer.classList.remove("hidden")
    inputTotalPreguntes.classList.remove("hidden")

    selectDificultat.addEventListener('change', function () {


        if (selectDificultat.value != "empty") {
            totalPreguntes = inputTotalPreguntes.value
            setUrl()
            startTrivia()
            getQuestionByIndex(0)
        } else {
            startContainer.classList.remove("hidden")
            preguntaContainer.classList.add("hidden")



            rectangleContainer.classList.add("hidden")
            document.querySelector("div.preguntaContainer").innerHTML = "Select a difficulty"
        }
    })
}

function setUrl() {
    if (totalPreguntes <= 0) {
        totalPreguntes = 20
    }
    triviaUrls = {
        easy: `https://opentdb.com/api.php?amount=${totalPreguntes}&difficulty=easy&type=multiple`,
        medium: `https://opentdb.com/api.php?amount=${totalPreguntes}&difficulty=medium&type=multiple`,
        hard: `https://opentdb.com/api.php?amount=${totalPreguntes}&difficulty=hard&type=multiple`,
        default: `https://opentdb.com/api.php?amount=${totalPreguntes}&type=multiple`
    };
}

function crearCookie() {
    var nombre = event.target.value;
    var valor = 0; // Inserta al final del trivia el total de las respuestas
    var expiracion = 365; // Las cookies duran 1 año

    var fechaExpiracion = new Date();
    fechaExpiracion.setDate(fechaExpiracion.getDate() + expiracion);

    var cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        let cookieActual = cookies[i].trim();
        if (cookieActual.startsWith(nombre + "=")) {
            console.log("Hola de nou manin, " + event.target.value);
            return;
        }
    }

    var cookie = encodeURIComponent(nombre) + "=" + encodeURIComponent(valor) + ";expires=" + fechaExpiracion.toUTCString() + ";path=/;SameSite=none; secure";
    document.cookie = cookie;
    console.log("S'ha generat correctament(" + event.target.value + ")")


}




function triviaGenerator() {
    console.clear();
    const apiUrl = triviaUrls[selectDificultat.value];
    console.log(`${selectDificultat.value} Trivia`);
    console.log(apiUrl)
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const preguntaContainers = data.results;
            preguntaContainers.forEach((preguntaContainer, index) => {
                console.log(`preguntaContainer ${index + 1}: ${preguntaContainer.preguntaContainer}`);
                console.log(`Categoría: ${preguntaContainer.category}`);
                console.log(`Dificultad: ${preguntaContainer.difficulty}`);
                console.log(`Respuesta correctea: ${preguntaContainer.correcte_answer}`);
                console.log(`Respuestas incorrecteas: ${preguntaContainer.incorrecte_answers.join(", ")}`);
                console.log("--------------------------");
            });
        })
}


function getQuestionByIndex(index) {
    if (selectDificultat.value != "empty") {
        const apiUrl = triviaUrls[selectDificultat.value];


        fetch(apiUrl, {
            cache: 'force-cache',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                try {
                    const pregunta = data.results[index];
                    if (pregunta === undefined) {
                        throw new Error('The trivia finalized');
                    }

                    preguntaContainer.classList.remove("hidden")
                    rectangleContainer.classList.add("hidden")
                    spinner.classList.add("hidden")


                    preguntaContainer.innerHTML = `${pregunta.question}`
                    rectangleContainer.classList.remove("hidden")



                    //TODO randomitzar a on apareixen les respostes perque no apareguin sempre en el mateix lloc
                    // let answers = [preguntaContainer.correcte_answer, preguntaContainer.incorrecte_answers[0], preguntaContainer.incorrecte_answers[1], preguntaContainer.incorrecte_answers[2]]
                    // let answersRnd = shuffleAnswers(answers)

                    let answers = [pregunta.correct_answer, pregunta.incorrect_answers[0], pregunta.incorrect_answers[1], pregunta.incorrect_answers[2]]
                    respostaCorrecte = pregunta.correct_answer;

                    answers = shuffleAnswers(answers)

                    rectangleA.innerHTML = answers[0]
                    rectangleB.innerHTML = answers[1]
                    rectangleC.innerHTML = answers[2]
                    rectangleD.innerHTML = answers[3]

                    rectangleA.addEventListener('click', checkAnswer)
                    rectangleB.addEventListener('click', checkAnswer)
                    rectangleC.addEventListener('click', checkAnswer)
                    rectangleD.addEventListener('click', checkAnswer)

                    // console.log("--------------------------");
                    console.log(`Pregunta ${index + 1}: ${pregunta.question}`);
                    // console.log(`Categoría: ${pregunta.category}`);
                    // console.log(`Dificultad: ${pregunta.difficulty}`);
                    // console.log(`Respuesta correctea: ${pregunta.correct_answer}`);
                    // console.log(`Respuestas incorrecteas: ${pregunta.incorrect_answers.join(", ")}`);
                    // console.log("--------------------------");

                } catch (error) {
                    //console.error(error);
                    triviaFinalized()
                }


            })


    } else {
        console.log("empty")
    }
}

function checkAnswer() {
    rectangleContainer.classList.add("hidden")
    startContainer.classList.add('hidden')
    preguntaContainer.innerHTML = "Carregant pregunta..."
    spinner.classList.remove("hidden")

    puntsRespostes.totalRespostes++

    if (event.target.innerHTML == respostaCorrecte) {
        // console.log("correcte")
        puntsRespostes.correcte++
    } else {
        // console.log("Incorrecte")
        puntsRespostes.incorrecte++
    }

    index++
    getQuestionByIndex(index)
}

function triviaFinalized() {
    //TODO mostrar grafica
    spinner.classList.add("hidden")
    rectangleContainer.classList.add("hidden")
    preguntaContainer.classList.add('hidden')
    startContainer.classList.add('hidden')

    canvas.classList.remove("hidden")
    mostrarGrafic()
}

function shuffleAnswers(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}



function startTrivia() {
    rectangleContainer.classList.add("hidden")
    startContainer.classList.add('hidden')
    preguntaContainer.classList.remove('hidden')
    spinner.classList.remove("hidden")

    console.log("The trivia started")
}


function mostrarGrafic() {

    buttonRestart.classList.remove("hidden")
    buttonRestart.addEventListener('click', function () {
        location.reload()
    })

    //Grafica
    var contadorcorrectee = puntsRespostes.correcte;
    var contadorIncorrectee = puntsRespostes.incorrecte;

    // Creacio de la grafica
    var ctx = canvas.getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['correctees', 'Incorrectees'],
            datasets: [{
                label: 'Respostes Totals',
                data: [contadorcorrectee, contadorIncorrectee],//Aqui van els contadors
                backgroundColor: ['green', 'red']
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: puntsRespostes.to,
                    title: {
                        display: true,
                        text: 'Numero de respostes'
                    }
                }
            }
        }
    });
}
