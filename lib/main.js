$(document).ready(function () {
    $('#fale-conosco-form').validate()

    $('#telefone').mask('(00) 0000-0000')

    $('#fale-conosco-form').submit(function (e) { 
        e.preventDefault();
        
        $('#nome').val('')
        $('#email').val('')
        $('#telefone').val('')
        $('#mensagem').val('')

        alert('mensagem enviada!')
    });
});