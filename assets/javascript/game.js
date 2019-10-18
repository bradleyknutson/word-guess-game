

var guessGame = {
    letters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
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
        this.wordBlanks = [];
        this.chosenWord = [];
        this.chosenCategory = '';
        this.guessedLetters = [];
        $(document).keypress(function (e) { 
            if(guessGame.letters.includes(e.key.toLowerCase())){
                guessGame.guessLetter(e.key);
                guessGame.updatePage();
            }
        });
        this.guessesLeft = num;
        this.chooseCategory();
        this.chooseWord();
        this.makeBlanks(this.chosenWord);
        this.updatePage();

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
        // update wins
        $('#wins').text(this.wins);

        // Update losses
        $('#losses').text(this.losses);

        // Adds blanks, spaces, and letters to word ID
        $('#word').text('');
        for(let i=0; i<this.wordBlanks.length; i++){
            $('#word').append(this.wordBlanks[i] + ' ');
        }

        //updates guessedLetters
        $('#guessedLetters').text('');
        for(let i=0; i<this.guessedLetters.length; i++){
            $('#guessedLetters').append(this.guessedLetters[i] + ' ');
        }

        //update category
        if(guessGame.chosenCategory === 'videoGames'){
            $('#category').text('Video Games');
        }else{
            $('#category').text(guessGame.chosenCategory.charAt(0).toUpperCase() + guessGame.chosenCategory.slice(1));
        }
    },
    guessLetter: function(letter){
        if(!this.guessedLetters.includes(letter.toUpperCase())){
            if(this.chosenWord.includes(letter.toUpperCase())){
                //updates wordBlanks
                for(let i = 0; i<this.chosenWord.length; i++){
                    if(this.chosenWord[i] === letter.toUpperCase()){
                        this.wordBlanks[i] = letter.toUpperCase();
                    }
                }
                if(this.wordBlanks.toString() === this.chosenWord.toString()){
                    this.endGame('win');
                }
            }else{
                this.guessedLetters.push(letter.toUpperCase());
                this.guessesLeft--;
                if(this.guessesLeft === 0){
                    this.endGame('loss');
                }
            }
        }

    },
    endGame: function(str){
        $(document).unbind("keypress");
        if(str === 'win'){
            this.wins++;
            $('#newGame').show();
        }else if(str === 'loss'){
            this.losses++;
            $('#newGame').show();
        }
    }
};

$(document).ready(function() {

    $('#newGame').on('click', function(){
        guessGame.startGame(10);
        $('#newGame').hide();
    })



});