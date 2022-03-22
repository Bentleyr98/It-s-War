
//Generate a list of cards in a deck.
const card_deck = ['D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK', 'DA',
'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK', 'SA', 
'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK', 'HA',
'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK', 'CA']

//Divide into two decks.
const player_deck = []
const computer_deck = []

//Randomly divide into the computer and player decks
//Add half to computer deck
let start = 0;
while (start < 26) {
  let randomValue = card_deck[Math.floor(Math.random() * card_deck.length)];
  const index = card_deck.indexOf(randomValue);
  if (index > -1) {
    card_deck.splice(index, 1); 
  };
  computer_deck.push(randomValue);
  start++;
};

//Add the rest of the cards to the player deck.
for (card of card_deck) {
    player_deck.push(card);
      };

//Clear card deck
card_deck.splice(0, card_deck.length); 

//Set variables for card values
var computer = "";
var player = "";

//Using a queue, draw one card at a time.
function draw(computer_deck, player_deck) {
  computer = computer_deck.shift();
  player = player_deck.shift();
};

//Get value to compare
function getValue(string) {
  let result = string.slice(1);
  return result;
}

//Compare cards, and insert cards into the winning deck
function compare(c, p) {
  if (c == 'J') {
    c = 11;
    } else if (c == 'Q'){
      c = 12;
    } else if (c == 'K'){
      c = 13;
    } else if (c == 'A'){
      c = 14;
    } else if (c == '10'){
      c = 10;
     } else {
      console.log()
    }
    
    if (p == 'J'){
      p = 11;
    } else if (p == 'Q'){
      p = 12;
    } else if (p == 'K'){
      p = 13;
    } else if (p == 'A'){
      p = 14;
    } else if (p == '10'){
      p = 10;
     } else {
      console.log();
    };
    
    //Check to make sure it is a number then compare
    if (!isNaN(c) == true & !isNaN(p) == true){
      if (c > p) {
      console.log(c  + "is greater then " + p);
      computer_deck.push(computer);
      computer_deck.push(player);
    } else if (c < p) {
      console.log(c  + "is lesser then " + p);
      player_deck.push(computer);
      player_deck.push(player);
      } else {
        console.log(c  + "it's a tie" + p);
      computer_deck.push(computer);
      player_deck.push(player);
      };
    };
  };

//Condition for end of game and start game
if (computer_deck.length == 52) {
  const cwinner = document.getElementById('winner');
  cwinner.textContent = "Computer Wins!!";
} else if (player_deck.length == 52) {
  const pwinner = document.getElementById('winner');
  pwinner.textContent = "Player Wins!!";
} else {
  document.querySelector("#draw").addEventListener("click", function () {
    //Computer setup
    const outputElement1 = document.getElementById('comCards');
    const output1 = computer_deck.length;
    let html = output1.toString();
    outputElement1.textContent = "Cards in Deck: " + html;
  
    //Player setup
    const outputElement = document.getElementById('pCards');
    const output2 = player_deck.length;
    let html2 = output2.toString();
    outputElement.textContent = "Cards in Deck: " + html2;
  
    //Change images
    let cImageElement = document.getElementById('comImage');
    let Image = "images/cards/back_card.png";
    cImageElement.setAttribute('src', Image);
    cImageElement.setAttribute('width', 275);
    cImageElement.setAttribute('alt', 'Back of card');
  
    let pImageElement = document.getElementById('pImage');
    pImageElement.setAttribute('src', Image);
    pImageElement.setAttribute('width', 275);
    pImageElement.setAttribute('alt', 'Back of card');
    if (computer_deck.length == 52) {
      const cwinner = document.getElementById('winner');
      cwinner.textContent = "Computer Wins!!";
    } else if (player_deck.length == 52) {
      const pwinner = document.getElementById('winner');
      pwinner.textContent = "Player Wins!!";
    } 
  
  });
  
  document.querySelector("#flip").addEventListener("click", function () {
    draw(computer_deck, player_deck);
  //Set up images
    //Computer image
    let cImageElement = document.getElementById('comImage');
    let cImage = "images/cards/" + computer + ".png";
    cImageElement.setAttribute('src', cImage);
    cImageElement.setAttribute('width', 250);
    cImageElement.setAttribute('alt', 'Your card is ' + computer);
  
    //Player image
    let pImageElement = document.getElementById('pImage');
    let pImage = "images/cards/" + player + ".png";
    pImageElement.setAttribute('src', pImage);
    pImageElement.setAttribute('width', 250);
    pImageElement.setAttribute('alt', 'Your card is ' + computer);
  
    //Compare cards
    let cp = getValue(computer);
    let pp = getValue(player);
    compare(cp,pp);
  });

};





