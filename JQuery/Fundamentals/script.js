
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

/*######################## NAVEGANDO ENTRE ELEMENTOS ###################*/
//Selecionar elemento anterior
$('.botao').parent()    //Seleciona o elemento que vem antes no caso: <ul></ul>
$('.botao').parent().parent()   //Retorna: <div></div>

//Busca e seleciona elemento específico
$('#divCorpo').find('.botao')   //Retorna :
                                //<li class="botao">Item 1</li>
                                //<li class="botao">Item 2</li>
                                //<li class="botao">Item 3</li>
                                //<li class="botao">Item 4</li>
$('#divCorpo').find('.botao').eq(0)    //Retorna primeiro elemento: <li class="botao">Item 1</li>

//Buscar o elemento mais próximo dentro da estrutura que se relaciona. Se tiver fora do escopo nãõ encontra
$('.botao').closest("#divCorpo")   //Retorna: <div id="divCorpo"></div>

//Buscar elemento fora da estrutura que engloba. É preciso sair para o elemento que se realciona com o outro elemento:
$('.botao').closest("#divCorpo").find("#divQualquer")   //Retorna: <div id="divQualquer"></div>

//DICA: Não usar parent, pois o código pode ser alterado e não ser mais o elemento anterior, preferir find()

/*######################## CSS, Styling e Dimensões ###################*/

//Adiciona ao elemento uma classe style que foi construida pelo usuário
$('h1').addClass("fundovermelho") 

//Remove classe do elemento
$('h1').removeClass("fundovermelho")

//Verificar se o elemento possui a classe específica Ex.: if($('h1').hasClass("fundovermelho")){};
$('h1').hasClass("fundovermelho")

//Adicionar atributo CSS específico em um elemento html passando 2 parametros
$('h1').css("color", "#000FFF");

//Adicionando vários atributos num elemento html, caso precise de muitos elementos é mais ideal que construa uma classe style e aplique ao elemento como a classe "fundovermelho"
$('h1').css("font-size", "16px").css("background-color", "#FF0000");    

/*######################## Guardando dados em um elemento ###################*/

//O JQuery permite adicionar qualquer propriedade que o usuário especificar, no caso do exemplo, foi add uma propriedade 'data-idade' com valor de '90'. Mas esses dados são gravados no HTML
$('input').attr('data-idade', '90');    // Cenário: <input type="text" name="nome"> 
                                        //Resultado: <input type="text" name="nome" data-idade="90">

//O Jquery , no entanto, permite adicionar propriedades ao proprio jquery (Memória do computador)
$('input').data('idade', '90'); // Cenário: <input type="text" name="nome"> 
                                //Resultado: <input type="text" name="nome">
                                //Ao buscar pelo parametro no JQuery: $('input').data('idade'); Resp-> 90

/*########################  ###################*/