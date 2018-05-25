var emailsField = document.querySelector('#emails'),
    btnValidate = document.querySelector('#validar'),
    valids = document.querySelector('#valid'),
    invalids = document.querySelector('#invalid');

btnValidate.addEventListener('click', function() {
    var boxLine = emailsField.value.split('\n');

    boxLine.forEach(function(email){
        var reg = /(\w+)\@(\w+)\.[a-zA-Z]/g;

        if(reg.test(email)) {
            valids.value += email + '\n';
        } else {
            invalids.value += email + '\n';
        }
    });
});