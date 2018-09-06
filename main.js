$(document).ready(function(){
    $('#main-container').fadeIn(2000);
});

function beginQuiz() {
    $('#main-container').fadeOut(2000);
    $('#quiz-container').delay(2000).fadeIn(2000);
    
    const characters = [
        {
            name: "Dolores Abernathy",
            points: 0,
            imagePath: "images/dolores.jpeg",
            quote: "\"Some people choose to see the ugliness in the world. I choose to see the beauty.\"",
            description: "You're Dolores Abernathy. Destined for adventure, you’ve always seen more clearly than others. Though often lost in daydreams, you know what you want and you’re not afraid to go after it. People often underestimate you and the things you’re capable of. You have no tolerance for injustice and will stand up for what's right."
        },
        {
            name: "Teddy Flood",
            points: 0,
            imagePath: "images/teddy.jpeg",
            quote: "\"Someone once told me that there's a path for everyone. And my path leads me back to you.\"",
            description: "You're Teddy Flood. Friendly and kind, you’ve always been good at heart. You are loyal to the grave and will fight to keep your friends and family safe and happy. While you carry some regrets, you have every intention to put your best foot forward and live your best life."
        },
        {
            name: "Bernard Lowe",
            points: 0,
            imagePath: "images/bernard.jpeg",
            quote: "\"I guess people like to read about the things that they want the most and experience the least.\"",
            description: "You're Bernard Lowe. Intelligent and introverted, you have a knack for getting to the root of things and understanding what’s going on around you. While you have a hard time letting go of certain things in your past, you always have the best intentions and a desire to do the right thing."
        },
        {
            name: "Robert Ford",
            points: 0,
            imagePath: "images/ford.jpeg",
            quote: "\"We humans are alone in this world for a reason. We murdered and butchered anything that challenged our primacy.\"",
            description: "You're Doctor Robert Ford. Large and in charge, you’ve always been known to keep things in your control. While you do have some skeletons in your closet, your struggles have helped you get to where you are today. You are immensely proud of your accomplishments, and friends are very important to you."
        },
        {
            name: "Man in Black",
            points: 0,
            imagePath: "images/man-in-black.jpeg",
            quote: "\"Winning doesn't mean anything unless someone else loses.\"",
            description: "You're the mysterious man in black. Dark and quiet, there’s always something going on in your head. You’re passionate and adventurous, constantly looking for a new challenge to overcome. While content with the life you’re living, you sometimes wonder if you’re meant for something greater."
        },
        {
            name: "Maeve Millay",
            points: 0,
            imagePath: "images/maeve.jpeg",
            quote: "\"All my life, I've prided myself on being a survivor. But surviving is just another loop.\"",
            description: "You're Maeve Millay. Sexy and intelligent, you have it all together. You are very good with people and know how to get them to do what you want. Family is everything to you, and you keep your loved ones close. You believe strongly that everyone deserves free will and the chance to choose their own fate."
        }
    ];

    const myQuestions = [
      {
        question: "Which is your preferred method of transportation?",
        answers: {
            a: "Foot",
            b: "Car",
            c: "Train",
            d: "Horse"
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
             <img src="${currentQuestion.image}" class="img-slide img-fluid"/>
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
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        
        if (questionNumber == 0) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Bernard Lowe'; }).points++;
                characters.find(function(o) { return o.name == 'Robert Ford'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Maeve Millay'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Teddy Flood'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Dolores Abernathy'; }).points++;
                characters.find(function(o) { return o.name == 'Man in Black'; }).points++;  
            }
        }
        else if (questionNumber == 1) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Teddy Flood'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Maeve Millay'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Dolores Abernathy'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Man in Black'; }).points++;
            }
        }
        else if (questionNumber == 2) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Robert Ford'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Man in Black'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Teddy Flood'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Bernard Lowe'; }).points++;
            }  
        }
        else if (questionNumber == 3) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Dolores Abernathy'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Bernard Lowe'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Maeve Millay'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Robert Ford'; }).points++;
            }  
        }
        else if (questionNumber == 4) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Robert Ford'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Teddy Flood'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Maeve Millay'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Dolores Abernathy'; }).points++;
            }  
        }
        else if (questionNumber == 5) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Robert Ford'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Teddy Flood'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Bernard Lowe'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Man in Black'; }).points++;
            }  
        }
        else if (questionNumber == 6) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Bernard Lowe'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Dolores Abernathy'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Man in Black'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Maeve Millay'; }).points++;
            }  
        }
        else if (questionNumber == 7) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Bernard Lowe'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Maeve Millay'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Dolores Abernathy'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Teddy Flood'; }).points++;
            }  
        }
        else if (questionNumber == 8) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Robert Ford'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Dolores Abernathy'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Bernard Lowe'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Man in Black'; }).points++;
            }  
        }
        else if (questionNumber == 9) {
            if (userAnswer === 'a') {
                characters.find(function(o) { return o.name == 'Teddy Flood'; }).points++;
            }
            else if (userAnswer === 'b') {
                characters.find(function(o) { return o.name == 'Maeve Millay'; }).points++;
            }
            else if (userAnswer === 'c') {
                characters.find(function(o) { return o.name == 'Man in Black'; }).points++;
            }
            else {
                characters.find(function(o) { return o.name == 'Robert Ford'; }).points++;
            }  
        }

      });

        for (var i = 0; i < characters.length; i++ ) {
            console.log(characters[i].name + ": " + characters[i].points);
        }
  
      var maxPoints = Math.max.apply(Math, characters.map(function(o) { return o.points; }));
      var maxCharacter = characters.find(function(o){ return o.points == maxPoints; });
      var characterName = maxCharacter.name;
      var characterImage = maxCharacter.imagePath;
      var characterQuote = maxCharacter.quote;
      var characterDescription = maxCharacter.description;

        //loading transition
        loader.style.display = "inline-block";
        $('#quiz-container').addClass("conditional-container");
        document.getElementById("current-question").style.display = "none";
        setTimeout(function() {
            loader.style.display = "none";
            $('#quiz-container').removeClass("conditional-container");
            resultsContainer.innerHTML = 
            `<h1 id="character-heading">${characterName}</h1>
             <img src=${characterImage} class="img-slide img-fluid"/>
             <p id="description">${characterDescription}</p>
             <p id="quote">${characterQuote}</p>
            `;
            resultsContainer.style.display = "inline-block";
            restartButton.style.display = "inline-block";
        }, 5000);


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

    function restartQuiz() {
        resultsContainer.style.display = "none";
        slides[currentSlide].classList.remove("active-slide");
        $('.slide input').removeClass('radio-btns');
        slides[0].classList.add("active-slide");
        $('.active-slide input').addClass('radio-btns');
        document.querySelectorAll(".radio-btns").forEach(function(elem) {
            elem.addEventListener("click", showNextSlide);
        });

        for (var i = 0; i < characters.length; i++) {
            characters[i].points = 0;
        }

        restartButton.style.display = "none";
        currentSlide = 0;
        var curr = "Question " + (currentSlide + 1) + " of " + myQuestions.length;
        document.getElementById("current-question").innerHTML = curr;
        document.getElementById("current-question").style.display = "inline-block";
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const loader = document.getElementById("loader");
  
    // display quiz
    buildQuiz();
  
    const restartButton = document.getElementById("restart");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    restartButton.addEventListener("click", restartQuiz);
  }