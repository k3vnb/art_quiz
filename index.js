'use strict'

function startQuiz(){
    // change view from beginning page to first question
    $('.start-quiz').on('click', () => {
        console.log('quiz started');
        $('.start-page').hide();
        $('.question-page-one').show();
    })
}

function handleStartQuiz(){
    startQuiz();
}

$(handleStartQuiz)