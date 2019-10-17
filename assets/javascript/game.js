

var guessGame = {
    wins: 0,
    losses: 0,
    guessesLeft: 0,
    wordBlanks: [],
    chosenWord: [],
    chosenCategory: '',
    guessedLetters: [],
    wordCategories: {
        cities: ['Denver', "Phoenix", "Amarillo"],
        foods: ['Donut', 'Sandwich', 'Oatmeal'],
        videoGames: ['Bayonetta', 'Portal', 'Witcher']
    },
    startGame: function(num){
        this.guessesLeft = num;
        this.chooseCategory();
        this.chooseWord();
        this.makeBlanks(this.chosenWord);
        this.updatePage();
    },
    reset: function(){
        
    },
    picker: function(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    },
    chooseCategory: function(){
        this.chosenCategory = this.picker(Object.keys(this.wordCategories));
    },
    chooseWord: function(){
        let word = this.picker(this.wordCategories[this.chosenCategory]);
        for(let i = 0; i<word.length; i++){
            this.chosenWord.push(word[i].toUpperCase());
        }
    },
    makeBlanks: function(arr){
        for(let i = 0; i<arr.length; i++){
            this.wordBlanks[i] = "_";
        }
    },
    updatePage: function(){
        $('#wins').text(this.wins);

        $('#losses').text(this.losses);

        for(let i=0; i<this.wordBlanks.length; i++){
            $('#word').append(this.wordBlanks[i] + ' ');
        }

        if(guessGame.chosenCategory === 'videoGames'){
            $('#category').text('Video Games');
        }else{
            $('#category').text(guessGame.chosenCategory.charAt(0).toUpperCase() + guessGame.chosenCategory.slice(1));
        };
    },
    letterInWord: function(letter){

    }
};

$(document).ready(function() {

    guessGame.startGame(25);
    console.log(guessGame);    

});