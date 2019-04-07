'use strict'

const STORE = [
    [
        {
            url: 'https://target.scene7.com/is/image/Target/GUEST_e83abb04-f8d2-4b15-a09a-8c2c241b3d7b?wid=488&hei=488&fmt=webp',
            artist: 'Mondrian',
            feedbackStatement: '<strong>Piet Mondrian</strong> (1872 – 1944), was a Dutch painter and theoretician who is regarded as one of the greatest artists of the 20th century. He is known for being one of the pioneers of 20th century abstract art, as he changed his artistic direction from figurative painting to an increasingly abstract style, until he reached a point where his artistic vocabulary was reduced to simple geometric elements.',
            wikipediaURL: 'https://en.wikipedia.org/wiki/Piet_Mondrian',
            answers: ['Mondrian', 'Dali', 'Warhol', 'Kandinsky'],
            answered: false,
            correct: false
        },
        {
            url: 'https://www.schirn.de/fileadmin/SCHIRN/Ausstellungen/2017/Magritte/Schirn_Presse_Magritte_L_Heureux_donateur_1966.jpg',
            artist: 'Magritte',
            feedbackStatement: "<strong>Renee Magritte</strong> (1898 – 1967) was a Belgian Surrealist artist. He became well known for creating a number of witty and thought-provoking images. Often depicting ordinary objects in an unusual context, his work is known for challenging observers' preconditioned perceptions of reality. His imagery has influenced Pop art, minimalist and conceptual art.",
            wikipediaURL: 'https://en.wikipedia.org/wiki/Ren%C3%A9_Magritte',
            answers: ['Dali', 'DuChamp', 'Magritte', 'Paul Klee'],
            answered: false,
            correct: false
        },
        {
            url: 'https://www.christies.com/img/LotImages/2018/NYR/2018_NYR_16718_0011_000(claude_monet_la_seine_a_lavacourt).jpg',
            artist: 'Monet',
            feedbackStatement: "<strong>Oscar-Claude Monet</strong> (1840 – 1926) was a French painter, a founder of French Impressionist painting & prolific practitioner of the movement's philosophy of expressing one's perceptions before nature, especially in landscape painting.The term 'Impressionism is derived from the title of his painting Impression, soleil levant (Impression, Sunrise), which was exhibited in 1874.",
            wikipediaURL: 'https://en.wikipedia.org/wiki/Claude_Monet',
            answers: ['VanGogh', 'Renoir', 'Rembrandt', 'Monet'],
            answered: false,
            correct: false
        },
        {
            url: 'https://imagenes.museothyssen.org/sites/default/files/imagen/obras/1977.77_tension-suave-no-85.jpg',
            artist: 'Kandinsky',
            feedbackStatement: "<strong>Wassily Kandinsky</strong> (1866 – 1944) was a Russian painter and art theorist. Kandinsky is generally credited as the pioneer of abstract art.",
            wikipediaURL: 'https://en.wikipedia.org/wiki/Wassily_Kandinsky',
            answers: ['Picasso', 'Kandinsky', 'Jackson Pollack', 'Frida Kahlo'],
            answered: false,
            correct: false
        },
        {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Rembrandt_-_Rembrandt_and_Saskia_in_the_Scene_of_the_Prodigal_Son_-_Google_Art_Project.jpg/220px-Rembrandt_-_Rembrandt_and_Saskia_in_the_Scene_of_the_Prodigal_Son_-_Google_Art_Project.jpg',
            artist: 'Rembrandt',
            feedbackStatement: "<strong>Rembrandt Harmenszoon van Rijn</strong> (1606 – 1669) was a Dutch draughtsman, painter and printmaker. An innovative and prolific master, he is generally considered one of the greatest visual artists in the history of art and the most important in Dutch art history. Unlike most Dutch masters of the 17th century, Rembrandt's works depict a wide range of style and subject matter, from portraits and self-portraits to landscapes, genre scenes, allegorical and historical scenes, biblical and mythological themes as well as animal studies. His contributions to art came in a period of great wealth and cultural achievement that historians call the Dutch Golden Age",
            wikipediaURL: 'https://en.wikipedia.org/wiki/Rembrandt',
            answers: ['Monet', 'Rembrandt', 'DaVinci', 'Banksy'],
            answered: false,
            correct: false
        }
    ],
    {
        currentQuestion: 0,
        correctCounter: 0,
        incorrectCounter: 0
    }
]

function generateGameStats(gameStats){
    return `
        <div class="status">
            <div class="progress-counter">
                Question ${gameStats.currentQuestion + 1 < 6 ? gameStats.currentQuestion + 1 : 5} of ${STORE[0].length}
            </div>
            <div class="score-counter">
                ${gameStats.correctCounter} Correct ${gameStats.incorrectCounter} Incorrect
            </div>
        </div>
    `
}

function handleNextQuestion(){
    $('.quiz-container').on('click', '.next-question', (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();
        console.log('next question clicked');
        STORE[1].currentQuestion++
        $('.next-question').hide();
        getStatus();
        showQuestions();
    })
}

function showQuestions(){
    console.log('x')
    const currentQuestion = STORE[0][STORE[1].currentQuestion];
    $('.quiz-question').html(generateNewQuestion(currentQuestion))
    $('.question-page').show();

    $('.quiz-container').on('click', `#submit-form-${currentQuestion.artist}`, () => {
        event.preventDefault();
        event.stopImmediatePropagation();
        console.log('form submitted');
        const answer = $('input[name="quiz-answer"]:checked').val('')[0].id;
        handleSubmitAnswer(answer);
    });

}

function handleRestartQuiz(){

    $('.take-quiz-again').click(() => {
        event.preventDefault();
        event.stopPropagation();
        console.log('take quiz again clicked');
        STORE[1].currentQuestion = 0;
        STORE[1].correctCounter = 0;
        STORE[1].incorrectCounter = 0;

        $('.quiz-container').html(`
            <div class="start-page quiz-card">
                <h2>Welcome to Art Quiz</h2>
                <img class="title-img" src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg/800px-Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg" alt="Picasso's 'Girl with a Mandolin''" />
                <h4>Can you match the famous artwork with it's artist?</h4>
                <button class="start-quiz blue-btn">Click to Start</button>
            </div>
            <div class="question-page question-page-one quiz-card">
            <div class="status">
            </div>
            <h2 class="quiz-title">Name the Artist</h2>
            <div class="quiz-question">

            </div>
        </div>
        `)
        startQuiz();
        console.log(STORE[1])
    })
}

function generateResultsFeedback(){
    if (STORE[1].correctCounter === STORE[0].length){
        return `
            <h2>PERFECT SCORE!!!</h2>
            <p>You have a master's eye</p>
            `
    } else if (STORE[1].correctCounter > STORE[1].incorrectCounter){
        return `
            <h2>GREAT JOB!!!</h2>
            <p>You know art!</p>
        `
    } else {
        return `
            <h2>NICE TRY!</h2>
            <p>There's lots of great art out there, keep learning!</p>
        `
    }
}

function handleGetResults(){
    $('.get-results').click(() => {
        console.log('get results clicked');
        $('.quiz-card').html(`
            <div class="results-card">
                <h2>Your Results:</h2>
                <div class="results-card-score-counter">
                    <div>${STORE[1].correctCounter} Correct</div>
                    <div>${STORE[1].incorrectCounter} Incorrect</div>
                </div>
                <img class="results-img" src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2015/08/3049767-poster-p-2-spy-the-unsung-psychedelic-pop-art-landscapes-of-roy-lichtenstein.jpg" alt="Roy Lichtenstein painting" />
                ${generateResultsFeedback()}
                <button class="take-quiz-again blue-btn">Take the Quiz Again!</button>
            </div>
            `)   
            handleRestartQuiz();
    })
}

function generateNewQuestion(question){
    return `
        <img src=${question.url} alt="famous painting" height="100">
        <form id="question-form">
            <h4><strong>Choose One:</strong></h4>
            <div class="input-container">
                <div>
                    <input type="radio" name="quiz-answer" id="${question.answers[0]}">
                    <label for="${question.answers[0]}">${question.answers[0]}</label>
                </div>
                <div>
                    <input type="radio" name="quiz-answer" id="${question.answers[1]}">
                    <label for="${question.answers[1]}">${question.answers[1]}</label>
                </div>
                <div>
                    <input type="radio" name="quiz-answer" id="${question.answers[2]}">
                    <label for="${question.answers[2]}">${question.answers[2]}</label>
                </div>
                <div>
                    <input type="radio" name="quiz-answer" id="${question.answers[3]}">
                    <label for="${question.answers[3]}">${question.answers[3]}</label>
                </div>
            </div>
            <button type="submit" id="submit-form-${question.artist}" class="form-submit-btn">Submit</button>
        </form>
        <div class="feedback-div">

        </div>
        <button class="next-question blue-btn">Next Question</button>
        <button class="get-results blue-btn">Get Results</button>
    `
}

function handleSubmitAnswer(answer){
    event.preventDefault();
    event.stopPropagation();
    console.log('answer being handled');
    const currentQuestion = STORE[0][STORE[1].currentQuestion];
    const correctAnswer = currentQuestion.artist;
    currentQuestion.answered = true;
    $('form').hide();


    if ([STORE[1].currentQuestion] < STORE[0].length - 1){
        $('.next-question').show();
    } else {
        $('.get-results').show();
    }

    // $('#question-form').hide()
    if (answer === correctAnswer) {
        STORE[1].correctCounter++
        $('.feedback-div').html(
            `
                <h2>Correct!</h2>
                <p>${currentQuestion.feedbackStatement}</p>
            `
        )
    } else {
        console.log('incorrect answer')
        STORE[1].incorrectCounter++
        $('.feedback-div').html(
            `
                <h2>Incorrect!</h2>
                <p>${currentQuestion.feedbackStatement}</p>
            `
        )
    }
    getStatus();
    handleNextQuestion();
    handleGetResults();
}



//getStatus keeps track of current question and score
function getStatus(){
    $('.status').html(generateGameStats(STORE[1]));
}

function startQuiz(){
    
    // change view from beginning page to first question
    $('.quiz-container').on('click', '.start-quiz', () => {
        event.preventDefault();
        event.stopPropagation();
        console.log('quiz started');
        $('.start-page').hide();
        getStatus();
        showQuestions();
    })
}


$(startQuiz)