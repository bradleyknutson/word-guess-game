

var gameObject = {
    wordCategories: {
        cities: ['Denver', "Phoenix", "Amarillo"],
        foods: ['Donut', 'Sandwich', 'Oatmeal']
    },
    chooseWord: function(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }
};

