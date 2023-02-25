let ratingEl = document.querySelector(".card-rating-num");

for(let i=1; i<=5; i++){
    ratingEl.innerHTML+='<span id="card_rating'+i+'" class="card-rating-circle">'+i+'</span>';
}

let displayRatingNum = document.querySelector(".card-rating-num");
let displayNum1 = document.querySelector("#card_rating1");
let displayNum2 = document.querySelector("#card_rating2");
let displayNum3 = document.querySelector("#card_rating3");
let displayNum4 = document.querySelector("#card_rating4");
let displayNum5 = document.querySelector("#card_rating5");
let selectedRating = document.querySelector(".rating-text");
let submitBtn = document.querySelector(".btn-submit");

let rating = 0;
displayRatingNum.addEventListener("click", function(e){
    rating = e.target.textContent;
    e.target.style.backgroundColor = "hsl(25, 97%, 53%)";
    e.target.style.color = "white";

    setTimeout(() => {
        e.target.style.backgroundColor = "hsl(213, 19%, 18%)";
        e.target.style.color = "hsl(217, 12%, 63%)";
    }, 10000);
});

function showRating(){
    document.querySelector(".initial-div").style.display = "none";
    document.querySelector(".thank-you-div").style.display = "block";
    setTimeout(() => {
        document.querySelector(".initial-div").style.display = "block";
        document.querySelector(".thank-you-div").style.display = "none";
    }, 10000);  
    selectedRating.textContent = `You selected ${rating} out of 5`; 
}

submitBtn.addEventListener("click", showRating);