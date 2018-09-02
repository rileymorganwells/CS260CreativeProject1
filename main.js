$(document).ready(function(){
    $('#main-container').fadeIn(2000);
});

function beginQuiz() {
    $('#main-container').fadeOut(2000);
    $('#quiz-container').delay(2000).fadeIn(2000);
    
    const myQuestions = [
      {
        question: "Which is your preferred method of transportation?",
        answers: {
            a: "Car",
            b: "Train",
            c: "Horse",
            d: "Foot"
        },
        correctAnswer: "b",
        image: "images/q1.png"
        },
      {
        question: "You notice a pretty woman drop her bag. What do you do?",
        answers: {
          a: "Pick it up. After all, you are quite chivalrous",
          b: "Ignore her - you're not interested",
          c: "Pick it up and keep it for yourself",
          d: "Bring it to her - tell her she owes you"
        },
        correctAnswer: "c",
        image: "images/q2.png"
      },
      {
        question: "What is your view of humanity?",
        answers: {
          a: "Humanity's reign is coming to an end",
          b: "Humans, at their core, are evil",
          c: "Humans, at their core, are good",
          d: "Humans are a mix of good and bad - our choices make us who we are"
        },
        correctAnswer: "c",
        image: "images/q3.png"
      },
      {
        question: "Pick a Shakespeare quote",
        answers: {
          a: "\"These violent delights have violent ends\"",
          b: "\"When we are born, we cry that we are come to this great stage of fools\"",
          c: "\"Hell is empty and all the devils are here\"",
          d: "\"For in that sleep of death, what dreams may come?\""
        },
        correctAnswer: "d",
        image: "images/q4.png"
      },
      {
        question: "How does this image make you feel?",
        answers: {
          a: "Excited",
          b: "Nervous",
          c: "At home",
          d: "Angry"
        },
        correctAnswer: "d",
        image: "images/q5.png"
      },
      {
        question: "Your ideal Friday night consists of:",
        answers: {
          a: "Hanging out with your dog - people are the worst",
          b: "Spending time with your significant other",
          c: "Curling up in bed with a good book",
          d: "Having a blast - regardless of the consequences"
        },
        correctAnswer: "d",
        image: "images/q6.png"
      },
      {
        question: "Which technology do you find most intriguing?",
        answers: {
          a: "Machine learning/AI",
          b: "Self-driving cars",
          c: "Firearms",
          d: "Robotics"
        },
        correctAnswer: "d",
        image: "images/q7.png"
      },
      {
        question: "If you lived in the Old West, you would be:",
        answers: {
          a: "The indian",
          b: "The cowgirl",
          c: "The outlaw",
          d: "The sheriff"
        },
        correctAnswer: "d",
        image: "images/q8.png"
      },
      {
        question: "You find yourself in a maze. What's at the end?",
        answers: {
          a: "Life's great meaning",
          b: "Nothing",
          c: "I'd never make it to the end...",
          d: "Another maze"
        },
        correctAnswer: "d",
        image: "images/q9.png"
      },
      {
        question: "What is your number one priority in life?",
        answers: {
            a: "Happiness",
            b: "Family",
            c: "Power",
            d: "Belief"
        },
        correctAnswer: "b",
        image: "images/q10.png"
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
            `<label class="btn btn-lg bwbtn">
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.answers[letter]}
             </label><br>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <img src="${currentQuestion.image}" class="img-slide"/>
             <div class="question"><h2>${currentQuestion.question}</h2></div>
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
      
      if (currentSlide === slides.length - 1) {
        document.querySelectorAll(".radio-btns").forEach(function(elem) {
            elem.removeEventListener("click",showNextSlide);
            elem.addEventListener("click", showResults);
          });
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
        currentSlide = 0;
        var curr = "Question " + (currentSlide + 1) + " of " + myQuestions.length;
        document.getElementById("current-question").innerHTML = curr;
        document.getElementById("current-question").style.display = "inline-block";
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
  
    // display quiz
    buildQuiz();
  
    const restartButton = document.getElementById("restart");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    restartButton.addEventListener("click", restartQuiz);
  }