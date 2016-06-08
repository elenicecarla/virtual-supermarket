var ListController = {
    
    init: function(params) {
        ListController.setForm();
        ListController.displayNames();
    },
    
    setForm: function () {
        var form = document.getElementById('form-name');
        form.addEventListener('submit', ListController.eventSubmitHandler);
    },
    
    eventSubmitHandler: function (event) {
        event.preventDefault(); //we need this to avoid the form submittion to a server
        var inputName = document.getElementById('name');
        ListController.addName(inputName.value);
        inputName.value = "";
    },
    
    addName: function(name) {
        ListService.addName(name);
        HTMLService.displayAddedName(name);
    },
    
    displayNames: function() {
        var names = ListService.getList();
        names.forEach(HTMLService.displayAddedName);
    }
    
};

//initialization
ListController.init();