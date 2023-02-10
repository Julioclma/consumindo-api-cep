$(document).ready(function () {

    //Mask cep
    $("#cep").mask("00000-000");

    $(".close").click(function (e) {
        $("#li-uf").val("");
        $("#li-localidade").val("");
        $("#li-bairro").val("");
        $("#li-logradouro").val("");
    })

    window.consultar = function () {
        let cep = $("#cep").val();
        result = `https://viacep.com.br/ws/${cep}/json`;


        if (cep.length < 9) {
            alert("Insira o CEP completo!")
        } else {

            fetch(result).then(function (response) {

                response.json().then(function (data) {

                    if (data.erro) {
                        alert("CEP Inválido!");
                        $().alert()
                    } else {

                        $("#li-uf").val(data.uf);
                        $("#li-localidade").val(data.localidade);
                        $("#li-bairro").val(data.bairro);
                        $("#li-logradouro").val(data.logradouro);
                        $("#event-modal-btn").click()
                    }



                })

            })


        }

    }

});
