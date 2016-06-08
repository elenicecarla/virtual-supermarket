var ListController = {
    
    var tbClientes: [],


    adicionar: function(){

        var cliente = JSON.stringify({
            Id: 1,
            Cpf: $("#cpf").val(),
            Nome: $("nome").val(),
            Sexo: $("#sexo").val(),
            Nascimento: $("#datanasc").val()
        });

        tbClientes.push(cliente);
        //localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
        alert("Registro adicionado.");
        return true;
    },

    init: function(params) {
        ListController.setForm();
    },
    
    setForm: function () {
        var form = document.getElementById('form-cliente');
        form.addEventListener('submit', ListController.eventSubmitHandler);
    },
    
    eventSubmitHandler: function (event) {
        event.preventDefault(); //we need this to avoid the form submittion to a server
        console.log("YES");
        ListController.adicionar();
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

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);