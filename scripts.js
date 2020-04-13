function logarMensagem() {
    console.log("Executei a função.")
}

function buscarTodasAvaliacoes() {
    window.location.replace("http://localhost:8080/usuarios/avaliacoes")

}

function buscaListadeAvaliacoes() {

    $.getJSON("http://localhost:8080/usuarios/123/avaliacoes", function (data) {
        var items = [];

        console.log(data);

        $.each(data, function (key, val) {
            items.push("<tr>" +
                "<td>" + val.comentario + "</td>" +
                "<td>" + val.notaAvaliacao + "</td>" +
                "</tr>");
        });

        // TRANSFORMAR EM TABLE

        $("<table/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });

    function buscaListadeDespesas() {

        $.getJSON("http://localhost:8080/usuarios/123/despesas", function (data) {
            var items = [];

            console.log(data);

            $.each(data, function (key, val) {
                items.push("<tr>" +
                    "<td>" + val.valor + "</td>" +
                    "<td>" + val.vencimento + "</td>" +
                    "<td>" + val.tipoDispesa + "</td>" +
                    "</tr>");
            });

            // TRANSFORMAR EM TABLE

            $("<table/>", {
                "class": "my-new-list",
                html: items.join("")
            }).appendTo("body");
        });
        function buscaListaDependentes() {

            $.getJSON("http://localhost:8080/usuarios/123/dependentes", function (data) {
                var items = [];

                console.log(data);

                $.each(data, function (key, val) {
                    items.push("<tr>" +
                        "<td>" + val.nome + "</td>" +
                        "<td>" + val.renda + "</td>" +
                        "<td>" + val.parentesco + "</td>" +
                        "</tr>");
                });

                // TRANSFORMAR EM TABLE

                $("<table/>", {
                    "class": "my-new-list",
                    html: items.join("")
                }).appendTo("body");
            });

            function buscaListaObjetivos() {

                $.getJSON("http://localhost:8080/usuarios/123/objetivos", function (data) {
                    var items = [];

                    console.log(data);

                    $.each(data, function (key, val) {
                        items.push("<tr>" +
                            "<td>" + val.nome + "</td>" +
                            "<td>" + val.valorTotal + "</td>" +
                            "<td>" + val.numeroInvestimento + "</td>" +
                            "</tr>");
                    });

                    // TRANSFORMAR EM TABLE

                    $("<table/>", {
                        "class": "my-new-list",
                        html: items.join("")
                    }).appendTo("body");
                });


                function buscaListaSugestoes() {

                    $.getJSON("http://localhost:8080/sugestoes", function (data) {
                        var items = [];

                        console.log(data);

                        $.each(data, function (key, val) {
                            items.push("<tr>" +
                                "<td>" + val.titulo + "</td>" +
                                "<td>" + val.descricao + "</td>" +
                                "<td>" + val.tipoSugestao + "</td>" +
                                "</tr>");
                        });

                        // TRANSFORMAR EM TABLE

                        $("<table/>", {
                            "class": "my-new-list",
                            html: items.join("")
                        }).appendTo("body");
                    });
                }
            }
        }
    }
}
