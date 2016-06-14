var cadClientController = (function() {
    
    function init() {
        _sendForm();
    }
    
    function _sendForm() {
        var formulario = document.getElementById("form-cliente");
        
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            _storeInLocalStorage(_getValuesFromForm());
            alert('Dados salvos com sucesso!');
        });
    }
    
    function _getValuesFromForm() {
        var nome = document.getElementById("name").value;
        var cpf = document.getElementById("cpf").value;
        var sexo = document.getElementById("sexo").value;
        var datanasc = document.getElementById("datanasc").value;
        
        return cliente = {
            'nome': nome,
            'cpf': cpf,
            'sexo': sexo,
            'datanasc': datanasc
        };
    }
    
    function _storeInLocalStorage(cliente) {
        
    }
    
    return {
        'init': init
    }
})();

cadClientController.init();