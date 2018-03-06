//Budget Controller
var budgetController = (function() {

      // some code

})();

//UI Controller
var UIController = (function() {

    // Some code

})();


//Global app controller
var controller = (function(budgetCtrl, UICtrl) {

    var crtlAddItem = function() {

      // 1. Get the filed input data

      // 2. add item to budget controller

      // 3.add itme to UI

      // 4. Calculate the budget
      // 5. display budget

      console.log('working.');

    }

    document.querySelector('.add__btn').addEventListener('click', crtlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            crtlAddItem();
        }

    });

})(budgetController, UIController);
