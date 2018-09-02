$(document).ready(function(){
    $('#main-container').fadeIn(3000);
});

function beginQuiz() {
    $('#main-container').fadeOut(2000);
    $('#quiz-container').delay(2000).fadeIn(2000);

    // var Questions = [
    //     ['Which is your preferred means of transportation?','Car','Train','Horse','Foot'],
    //     ['Question 2','1','2','3','4']
    // ];
    
    const myQuestions = [
      {
        question: "Who is the strongest?",
        answers: {
          a: "Superman",
          b: "The Terminator",
          c: "Waluigi, obviously",
          d: "Riley"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the best site ever created?",
        answers: {
          a: "SitePoint",
          b: "Simple Steps Code",
          c: "Trick question; they're both the best",
          d: "rileymorganwells.github.io"
        },
        correctAnswer: "c"
      },
      {
        question: "Where is Waldo really?",
        answers: {
          a: "Antarctica",
          b: "Exploring the Pacific Ocean",
          c: "Sitting in a tree",
          d: "Minding his own business, so stop asking"
        },
        correctAnswer: "d"
      },
      {
        question: "Which is your preferred means of transportation?",
        answers: {
            a: "Car",
            b: "Train",
            c: "Horse",
            d: "Foot"
        },
        correctAnswer: "b"
      }
    ];
  
    function buildQuiz() {
      // we'll need a place to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label class="btn btn-primary btn-lg">
               <input type="radio" name="question${questionNumber}" value="${letter}">

                ${currentQuestion.answers[letter]}
             </label><br>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      $('.active-slide').removeClass('active-slide');

      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
        } 
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
      resultsContainer.style.display = "inline-block";
      //quizContainer.innerHTML = resultsContainer.innerHTML;
        //   previousButton.style.display = "none";
        //   submitButton.style.display = "none";
      restartButton.style.display = "inline-block";
      document.getElementById("current-question").style.display = "none";
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      $('.slide input').removeClass('radio-btns');
      slides[n].classList.add("active-slide");
      $('.active-slide input').addClass('radio-btns');
      document.querySelectorAll(".radio-btns").forEach(function(elem) {
		elem.addEventListener("click", showNextSlide);
	  });
      currentSlide = n;

      var curr = "Question " + (currentSlide + 1) + " of " + myQuestions.length;
      document.getElementById("current-question").innerHTML = curr;

      if (currentSlide === 0) {
        // previousButton.style.display = "none";
      } else {
        // previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        // nextButton.style.display = "none";
        // submitButton.style.display = "inline-block";
        document.querySelectorAll(".radio-btns").forEach(function(elem) {
            elem.removeEventListener("click",showNextSlide);
            elem.addEventListener("click", showResults);
          });
      } else {
        // nextButton.style.display = "inline-block";
        // submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }

    function restartQuiz() {
        resultsContainer.style.display = "none";
        slides[currentSlide].classList.remove("active-slide");
        $('.slide input').removeClass('radio-btns');
        slides[0].classList.add("active-slide");
        $('.active-slide input').addClass('radio-btns');
        document.querySelectorAll(".radio-btns").forEach(function(elem) {
            elem.addEventListener("click", showNextSlide);
        });
        restartButton.style.display = "none";
        // nextButton.style.display = "inline-block";
        currentSlide = 0;
        var curr = "Question " + (currentSlide + 1) + " of " + myQuestions.length;
        document.getElementById("current-question").innerHTML = curr;
        document.getElementById("current-question").style.display = "inline-block";
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    // const submitButton = document.getElementById("submit");
  
    // display quiz
    buildQuiz();
  
    // const previousButton = document.getElementById("previous");
    // const nextButton = document.getElementById("next");
    const restartButton = document.getElementById("restart");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    // submitButton.addEventListener("click", showResults);
    // previousButton.addEventListener("click", showPreviousSlide);
    // nextButton.addEventListener("click", showNextSlide);
    restartButton.addEventListener("click", restartQuiz);

  }