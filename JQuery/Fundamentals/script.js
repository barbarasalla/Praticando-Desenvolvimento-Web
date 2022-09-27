// $().acao             [formas de utilizar o jquery] ação acontece no elemento indicado e pode não ser uma ação do próprio jquery
// $.acao               [formas de utilizar o jquery] ação é própria do jquery e em referencia ao geral
// jquery.().acao       [formas de utilizar o jquery] o mesmo do anterior, porém trocando o $ pelo jquery

/*  a função $(document).ready(function) realiza o mesmo que o onload no js, indicando o que deve ser carregado por último na pg. 
ela pode ser simplificada para: $(function() { }) ou pode usar: fuction tudoCarregado(){ } $(document).ready(tudoCarregado)      */
$(document).ready(function(){
    alert("a página foi completamente carregada!")
});     
