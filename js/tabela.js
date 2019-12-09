$("#proximo-jogo").click(function() {
    $("#rodada-escolhida").text("2º RODADA");
    $("#texto01").text("ABC");
    $("#jogo-anterior").addClass("lista-jogos__navegacao--setas-ativa");
});

$("#jogo-anterior").click(function() {
    $("#rodada-escolhida").text("1º RODADA");
    $("#jogo-anterior").removeClass("lista-jogos__navegacao--setas-ativa");
});
