//var nome = prompt("qual o seu nome?")

//alert ("Seja bem vindo! " + nome)  

//var idade = prompt("quantos anos vc tem?")

//var curso = prompt("qual curso vc faz?")

//alert ("Seu nome é " + nome + " vc tem " + idade + " anos, e esta cursando " + curso)

//alert ("digite dois numeros para eu fazer uma multiplicação")

//var numero1 = prompt ("digite o primeiro numero")
//var numero2 = prompt ("digite o segundo numero")
//alert ("o resultado da multiplicação desses numeros é " + numero1 * numero2)

//alert ("Olá boa noite! Digite dois Números para que eu possa fazer operaçoes matemáticas.")
//var n1 = Number(prompt ("digite um numero"))
//var n2 = Number(prompt ("digite um segundo numero"))

//alert ("a soma desses numeros é = " +(n1+n2) + ". A subtração desses numeros é = " + (n1-n2) + ". A multiplicação desses numeros é =" + n1*n2 + ". A divisão desses numeros é = " + n1/n2 + ".")


/*

alert("a soma desses numeros é = " + (n1+n2))
alert("a subtração desses numeros é = " + (n1-n2))
alert("a multiplicação desses numeros é = " + (n1*n2))
alert("a divisão desses numeros é = " + (n1/n2))

alert("O dobro de " + n1 + " é  = " + (n1*2) + ", o triplo de " + n1 + " é = " + (n1*3) +"." )




var nome = prompt("Qual o nome do aluno?")
var n1 = Number(prompt ("digite a primeira nota! "))
var n2 = Number(prompt ("Ok. Primeira nota é " + n1 + ". Qual a segunda nota?"))
var media = ((n1+n2)/2)
alert ("A média final será " + media +".")

if(media >= 6){
    alert("Aluno " + nome + " APROVADO.")
}

else{
    alert("Aluno " + nome + "  REPROVADO.")
}



var idade = prompt("qual a sua idade?")
if(idade >=18){
    alert ("MAIOR DE IDADE")

}

else{
    alert("MENOR DE IDADE")
}





var nome = prompt("qual nome do aluno?")
var nota = prompt("qual a nota do aluno " + nome)

if (nota >=60){
    alert ("O aluno "+ nome + " esta APROVADO!")
}

else{
    alert ("O aluno " + nome + " esta REPROVADO!")
}




var peso = prompt ("Qual seu peso em kg?")
var altura = prompt ("qual a sua altura ?")
var imc = (peso/(altura * altura)).toFixed(2)
alert ("seu IMC é " + imc + ".")

if (imc <16 ){
    alert("Magreza grau III.")
}
else if(imc >=16 && imc <=16.9 ){
    alert("Magreza grau II.")
}
else if(imc >=17 && imc <=18.4 ){
    alert("Magreza grau I.")
}
else if(imc >=18.5 && imc <=24.9 ){
    alert("Eutrofia.")
}
else if(imc >=25 && imc <=29.9 ){
    alert("Pré-obesidade.")
}
else if(imc >=30 && imc <=34.9 ){
    alert("Obesidade moderada (grau I).")
}
else if(imc >=35 && imc <=39.9 ){
    alert("Obesidade severa (grau II).")
}
else if(imc >=40){
    alert("Obesidade muito severa(grau III).")
}
alert ("( ͡° ͜ʖ ͡°)")

*/

//var listaDeCursos = ["Programação","Infermagem","Farmacia","medicina","fisioterapia","letras","quimica"]

/*
alert(listaDeCursos[0])
alert(listaDeCursos[1])
alert(listaDeCursos[2])
alert(listaDeCursos[3])
alert(listaDeCursos[4])
alert(listaDeCursos[5])
alert(listaDeCursos[6])
*/

//listaDeCursos.forEach(curso =>alert(curso))

/*
for(var i=0; i<=6;i++){
    alert(listaDeCursos[i])
}

for(var i=90; i>=0;i--){
    alert(listaDeCursos[i])
}

for(var i=90; i>=0;i-=5){
    alert(listaDeCursos[i])
}

*/


/*
//PROMPT INICIAL PARA COLETAR QUANTAS NOTAS SERÃO UTILIZADAS NO CALCULO
var qtdeNotas = Number (prompt("Quantas notas serão alaiadas?"))

//CRIACAO DO ACUMULADOR QUE VAI SOMAR TODAS AS NOTAS
var acumuladorNotas = 0;

//ESTRUTURA DE REPETIÇÃO QUE IRÁ RODAR UMA VEZ PARA CADA NOTA
for(var i=1; i<= qtdeNotas; i++){

    //PROMPT PARA PERGUNTAR A NOTA DO ALUNO ATUAL
    var nota = Number (prompt("digite a nota " + [i]))

    //VARIAVEL RECEBE O VALOR DELA MESMA MAIS A NOTA DO ALUNO ATUAL
    acumuladorNotas = acumuladorNotas + Number(nota)
}

//CRIAR UM ALERTA COM A DIVISAO DO VALOR ACUMULADO PELA QUANTIDADE DE NOTAS
alert("A média é: " +(acumuladorNotas / Number(qtdeNotas)))

var qtNotas=Number(prompt("quantas notas serao avaliadas?"))
var acumulador = 0 
for(var i=1; i<=qtNotas; i++){
    var nota =Number(prompt("digite a nota " + i))
    acumulador = (acumulador + nota)
}
var resultado = acumulador/ qtNotas
alert ("A media é " + resultado)
*/
/*
var listaDeAlunos = ["Maylon","Arthur","Ryan","Raphael","Maria","Gabriel","Macoly","Dalton","Patrick"]

//foreach =para cada, roda a lista toda
//listaDeAlunos.forEach(nome => alert(nome + (" é Aluno de Programação.")))

var indicedoAluno = Number(prompt("digite o indice do aluno que deseja buscar."))
alert(listaDeAlunos[indicedoAluno])


var numero = prompt("digite um numero.")

for(var n=0; n<=9; n++){
alert(n + "x" + numero + "=" + n*numero)
}
*/

//var listadeJogos = ["FIFA","Call of Duty","red Dead","CS"]

//var novoJogo = prompt("digite um jogo para adicionar")

//push serve para ADICIONAR um NOVO REGISTRO em uma LISTA
//listadeJogos.push(novoJogo)

//listadeJogos.pop() //REMOVE O ULTIMO ELEMENTO DA LISTA
//listadeJogos.shift() // REMOVE O PRIMEIRO ELEMENTO DA LISTA
//listadeJogos.splice(2, 1) // REMOVE 1 ELEMENTO A PARTARTIR DO INDICE 2
//listadeJogos.reverse() //inverte a ordem
//var indice = listadeJogos.indexOf("FIFA")// informa o indice do jogo FIFA
//listadeJogos.forEach(jogo => alert("estou jogando " + jogo))// informa que estou jogando todos os jogos da lista

//alert(listadeJogos[4])
//alert (indice)
/*
var listadeJogos = ["FIFA","Call of Duty","red Dead","CS"]

var qtdeJogosNovos = prompt("quantos jogos vc quer adicionar?")

for(var i=0; i<qtdeJogosNovos; i++){
    var jogo = prompt("digite o nome do jogo.")
    listadeJogos.push(jogo)
    
}

alert (listadeJogos)

var horario = new Date().getHours()

if(horario >=6 && horario <12){
    alert("Olá, Bom Dia!")
}

else if(horario >=12 && horario <18){
    alert("Olá, Boa Tarde!")
}

else if(horario >=18 || horario <6){
    alert("Olá, Boa noite.")
    }

var saldo = (15000)


while (operacao != 4){
    var operacao = prompt("Por favor digite o numero correspondente a operação que deseja executar.\n1- Saldo\n2- Extrato\n3- Transferencia\n4- Sair do Sistema")
    
    if(operacao == 1){
       alert("Seu saldo agora é R$" + saldo)
    }

    if(operacao == 2){
        alert("Operação indisponivel no momento, DESCULPE O TRANSTORNO!")
    }

     if(operacao == 4 ){
        alert("Obrigado por Ultilizar o Sistema.")
    }

    if(operacao == 3){
      var varlorTransf = Number(prompt("Por Favor digite o Valor que deseja transferir."))
      if(saldo < varlorTransf){
        alert("Não foi possivel executar a Operação, Saldo INSUFICIENTE!")
      }
      else {
        saldo = (saldo - varlorTransf)
        alert("Você Transferiu R$ " + varlorTransf + " O seu saldo Atual é R$ " + saldo + ".")
      }
    }
    
}





function rotinaDiaria(){
    alert("acordar")
    alert("levantar")
    alert("ir ao banheiro")
    alert("escovar os dentes")
    alert("Arrumar a cama")
        }
        rotinaDiaria()

      


        function SomarNumeros(){
        var num1 = Number(prompt("digite o primeiro numero."))
        var num2 = Number(prompt("digite o segundo numero."))
        var resultado = num1 + num2
        alert (resultado)
        }

        SomarNumeros()
      

        function multiplicacao(){
            alert ("seja bem vindo. " )
            alert("vamos fazer um multiplicação com tres numeros.")
            var num1 = Number(prompt("digite o primeiro numero."))
            var num2 = Number(prompt("digite o segundo numero."))
            var num3 = Number(prompt("digite o terceiro numero."))
            var resultado = (num1 * num2 * num3)
            alert (" o resultado é: " + resultado)

        }
        multiplicacao()
            

   */


/*
        function classificador(n1){
            var num = prompt ("digite um numero")
            if(num >n1){
                alert ("O numero " + num +" é maior que "+ n1 + ".")
            }
            else if(num==n1){
                alert ("O numero " + num +" é igual á "+ n1 + ".")
            }
            else{
                alert ("O numero " + num +" é menor que "+ n1 + ".")
            }
        }

        classificador(5)

     


var cpf = prompt("Qual o CPF?")
var cpfFormatado = cpf.substring(0,3) + "." + cpf.substring(3,6) + "." + cpf.substring(6,9)  + "-" + cpf.substring(9,11)

alert ("seu CPF é " + cpfFormatado)

*/

/*   OBJETO!
var empresa = {
nome : "Google",
ramo : "tecnologia",
qtDeFuncionarios : Number("9900"),
sede : "California",
fundada : "1998"
}
alert ("O nome da empresa é " + empresa.nome + " e seu ramo é " + empresa.ramo + ". Ela possui " + empresa.qtDeFuncionarios + " funcionários. Sua sede é na " + empresa.sede +". Foi fundada em " + empresa.fundada + ".")

*/
function banco(){

var horario = new Date().getHours()

if(horario >=6 && horario <12){
    alert("Olá, Bom Dia!")
}

else if(horario >=12 && horario <18){
    alert("Olá, Boa Tarde!")
}

else if(horario >=18 || horario <6){
    alert("Olá, Boa noite!")
    }

var saldo = (15000)
var listaDeTransferencia = []

while (operacao != 5){
    var operacao = prompt("Por favor digite o numero correspondente a operação que deseja executar.\n1- Saldo\n2- Extrato\n3- Transferencia\n4- Deposito\n5- Sair do Sistema")
    
    if(operacao == 1){
       var subOp = prompt("Seu saldo agora é R$" + saldo + "\n1- voltar ao menu inicial\n5- sair do sistema")
       if(subOp == 5 ){
        var horario = new Date().getHours()

        if(horario >=6 && horario <12){
            alert("Obrigado por Ultilizar o Sistema,Tenha um Bom Dia!")
        }
        
        else if(horario >=12 && horario <18){
            alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa Tarde!")
        }
        
        else if(horario >=18 || horario <6){
            alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa noite!")
            }

        break    
    }
    }

    else if(operacao == 2){
      var texto =""
      listaDeTransferencia.forEach(transf=> texto=texto + "Transferencia no valor de: R$" + transf.valorTransferido + " Data: " + transf.dia + "/" + transf.mes + "/"+ transf.dia + " Horàrio " + transf.hora + ":"+ transf.minuto + ".\n")
      var subOp = prompt("Saldo: " + saldo + "\n" + texto + "\n1- voltar ao menu inicial\n5- sair do sistema.")
      if(subOp == 5 ){
          var horario = new Date().getHours()
      
      if(horario >=6 && horario <12){
          alert("Obrigado por Ultilizar o Sistema,Tenha um Bom Dia!")
      }
      
      else if(horario >=12 && horario <18){
          alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa Tarde!")
      }
      
      else if(horario >=18 || horario <6){
          alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa noite!")
          }
      
      break   
      }
        
    }

    else if(operacao == 5 ){
        
        var horario = new Date().getHours()

        if(horario >=6 && horario <12){
            alert("Obrigado por Ultilizar o Sistema,Tenha um Bom Dia!")
        }
        
        else if(horario >=12 && horario <18){
            alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa Tarde!")
        }
        
        else if(horario >=18 || horario <6){
            alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa noite!")
            }

    }

    else if(operacao == 3){
      var varlorTransf = Number(prompt("Por Favor digite o Valor que deseja transferir."))
      if(saldo < varlorTransf){
        var subOp = prompt("Não foi possivel executar a Operação, Saldo INSUFICIENTE!\n1- voltar ao menu inicial\n5- sair do sistema")
        if(subOp == 5){var horario = new Date().getHours()

            if(horario >=6 && horario <12){
                alert("Obrigado por Ultilizar o Sistema,Tenha um Bom Dia!")
            }
            
            else if(horario >=12 && horario <18){
                alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa Tarde!")
            }
            
            else if(horario >=18 || horario <6){
                alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa noite!")
                }
    
            break  
    }
      }
      
      else {
        saldo = (saldo - varlorTransf)
        var subOp = prompt("Você Transferiu R$ " + varlorTransf + " O seu saldo Atual é R$ " + saldo + ".\n1- voltar ao menu inicial\n5- sair do sistema")
       
       var transferencia ={
           valorTransferido: varlorTransf,
           dia: new Date().getDate(),
           mes: new Date().getMonth(),
           ano: new Date().getFullYear(),
           hora: new Date().getHours(),
           minuto: new Date().getMinutes(),
           saldoRestante : saldo
          }
       listaDeTransferencia.push(transferencia)
      
       
       
        if(subOp == 5){   
            
            var horario = new Date().getHours()

            if(horario >=6 && horario <12){
                alert("Obrigado por Ultilizar o Sistema,Tenha um Bom Dia!")
            }
            
            else if(horario >=12 && horario <18){
                alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa Tarde!")
            }
            
            else if(horario >=18 || horario <6){
                alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa noite!")
                }
    
            break  
        }
      }
    }
    else if(operacao == 4){
        var varlorDep = Number(prompt("Por Favor digite o Valor que deseja Depositar."))
        saldo = (saldo + varlorDep)
        var subOp = prompt("Você Depositou R$ " + varlorDep + " O seu saldo Atual é R$ " + saldo + ".\n1- voltar ao menu inicial\n5- sair do sistema")
        if(subOp == 5){   var horario = new Date().getHours()

            if(horario >=6 && horario <12){
                alert("Obrigado por Ultilizar o Sistema,Tenha um Bom Dia!")
            }
            
            else if(horario >=12 && horario <18){
                alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa Tarde!")
            }
            
            else if(horario >=18 || horario <6){
                alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa noite!")
                }
    
            break  

            }

    }
    else {
        alert("Esta nao é uma opção valida, por favor escolha uma das cinco opções!")
    }



}

}

 /*
var subOp = prompt("Operação indisponivel no momento, DESCULPE O TRANSTORNO!\n1- voltar ao menu inicial\n5- sair do sistema")
if(subOp == 5 ){
    var horario = new Date().getHours()

if(horario >=6 && horario <12){
    alert("Obrigado por Ultilizar o Sistema,Tenha um Bom Dia!")
}

else if(horario >=12 && horario <18){
    alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa Tarde!")
}

else if(horario >=18 || horario <6){
    alert("Obrigado por Ultilizar o Sistema,Tenha uma Boa noite.")
    }

break   
}
*/