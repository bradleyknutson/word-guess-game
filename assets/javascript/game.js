

var gameObject = {
    wordBlanks: [],
    chosenWord: '',
    chosenCategory: '',
    wordCategories: {
        cities: ['Denver', "Phoenix", "Amarillo"],
        foods: ['Donut', 'Sandwich', 'Oatmeal'],
        videoGames: ['Bayonetta', 'Portal', 'Witcher']
    },
    startGame: function(){
        this.chooseCategory();
        this.chooseWord();
        this.makeBlanks(this.chosenWord);
    },
    picker: function(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    },
    chooseCategory: function(){
        this.chosenCategory = this.picker(Object.keys(this.wordCategories));
    },
    chooseWord: function(){
        this.chosenWord = this.picker(this.wordCategories[this.chosenCategory]);
    },
    makeBlanks: function(str){
        for(let i = 0; i<str.length; i++){
            this.wordBlanks[i] = "_";
        }
        console.log(this.wordBlanks);
    }
};


gameObject.startGame();