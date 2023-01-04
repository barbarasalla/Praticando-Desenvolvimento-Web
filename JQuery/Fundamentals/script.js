
/*########################### $ vs $() #############################*/
// $().acao             [formas de utilizar o jquery] ação acontece no elemento indicado e pode não ser uma ação do próprio jquery
// $.acao               [formas de utilizar o jquery] ação é própria do jquery e em referencia ao geral
// jquery.().acao       [formas de utilizar o jquery] o mesmo do anterior, porém trocando o $ pelo jquery


/*######################### $(document).ready() ##########################*/
/*  a função $(document).ready(function) realiza o mesmo que o onload no js, indicando o que deve ser carregado por último na pg. 
ela pode ser simplificada para: $(function() { }) ou pode usar: fuction tudoCarregado(){ } $(document).ready(tudoCarregado)      */
/*  $(document).ready(function(){
     alert("a página foi completamente carregada!");
    });  */


/*######################### Evitando conflito ocm outras bibliotecas ###################*/
/*Utilizada para evitar conflitos entre bibliotecas do jquery. Dessa forma, é atribuido o jquery a uma variavel e a partir dessa ação será sempre necessário realizar a referencia da variavel todas as vezes que for utilizar essa biblioteca:     */

/*  var $j = jQuery.noConflict();
    $j(document).ready(function(){
        alert("a página foi completamente carregada!")
    })      */

/*########################### Selecionando Elementos do HTML ######################*/
//Seleção de elementos html
$(function(){
    $("button") //Selecionar todos button
    $('ul li.botao')   //selecionar todos ul li da classe(.) botao
});
//Para saber se determinado elemento existe no código:
if($('.botao').length>0){
    alert("Tem botão na página!")
}
// Explicação: quando faz a a busca ele procura por um array, exemplo:
$('sdasdushd') //Resposta: [], significa que o array está vazio, logo não existe nenhum desse elemento
//Posso também guardar algum elemento numa variavel para chamar depois a partir da definição da variavel:
var itemqueeuquero = $('.botao');
itemqueeuquero;

/*################# Manipulando Atributos de uma TAG ##################*/
//Alterar atributo de algum elemento (inclui width, src e tudo mais..)
$(function(){
    $('#site').attr('href', 'https://www.bing.com/?cc=br');
});
//Se quiser apenas verificar através do navegador qual atributo que existe deve utilizar a mesma expressão sem o elemento modificador
$(function(){
    $('#site').attr('href');
});

/*####################### SELEÇÕES E MANIULAÇÃO DE SELECIONADOS ###############################*/
//Selecionar elementos e alterar o conteúdo dentro 
$(function(){
    $('#teste').html("Texto mudado");
});
$(function(){
    $('#teste').html('<button>Botão OK</button>');
});
//Selecionar elemento dentro de outro elemento
$(function(){
    $('#teste').find('#objetoDentroTeste');
});
//Selecionar elemento dentro de outro elemento e add uma classe dentro dele
$(function(){
    $('#teste').find('#objetoDentroTeste').addClass('estiloBackground');
});