var menu =`

<header>
<div class="container">
    <input type="checkbox" name="" id="check">

    <div class="logo-container">
        <h3 class="logo"><a href="index.html" id = "Filme">FIL<span id="Flix">FLIX</span></a></h3>
    </div>
    <div class="nav-btn">
        <div class="nav-links">
             <ul>
                <li class="nav-link">
                    <a href="#">Terror<i class="fas fa-caret-down"></i></a>
                        <div class="dropdown">
                                 <ul>
                                    <li class="dropdown-link"><a href="Fuja.html">Fuja</a></li>
                                     <li class="dropdown-link"><a href="Fragmentado.html">Fragmentado</a></li>
                                 </ul>
                        </div>
                    </li>
                <li class="nav-link">
                    <a href="#">Ação<i class="fas fa-caret-down"></i></a>
                        <div class="dropdown">
                                <ul>
                                    <li class="dropdown-link"><a href="Postodecombate.html">Posto de Cobate</a></li>
                                    <li class="dropdown-link"><a href="Rotadefuga.html">Divergente</a></li>
                                    <li class="dropdown-link"><a href="Segunda.html">Onde Está Segunda?</a></li>
                                </ul>
                        </div> 
                    </li>				
                <li class="nav-link">
                    <a href="#">Comédia<i class="fas fa-caret-down"></i></a>
                        <div class="dropdown">
                             <ul>
                                <li class="dropdown-link"><a href="AsBranquelas.html">As Branquelas</a></li>
                                <li class="dropdown-link"><a href="Alien.html">O Alien</a></li>
                              </ul>
                        </div>
                    </li>
                    <li class="nav-link">
                        <a href="#">Ficção<i class="fas fa-caret-down"></i></a>
                             <div class="dropdown">
                                    <ul>
                                       <li class="dropdown-link"><a href="BirdBox.html">Bird Box</a></li>
                                       <li class="dropdown-link"><a href="JogosV.html">Jogos Vorazes</a></li>
                                    </ul>
                            </div>
                        </li>
                        <li class="nav-link">
                            <a href="#">Drama<i class="fas fa-caret-down"></i></a>
                            <div class="dropdown">
                                    <ul>
                                         <li class="dropdown-link"><a href="AguasP.html">Águas Profundas</a></li>
                                        <li class="dropdown-link"><a href="Milagre.html">Milagre na Cela 7</a></li>
                                    </ul>
                             </div>
                        </li>
                            <li class="nav-link">
                                <a href="#">Atividade<i class="fas fa-caret-down"></i></a>
                                <div class="dropdown">
                                    <ul>
                                        <li class="dropdown-link"><a href="Css.html">CSS</a></li>
                                        <li class="dropdown-link"><a href="formularios.html">Formulários</a></li>
                                        <li class="dropdown-link"><a href="Links.html">Atividade de links</a></li>
                                        <li class="dropdown-link"><a href="5formularios.html">5 formulários</a></li>
                                        <li class="dropdown-link"><a href="Calcombustivel.html">Calcular de Combustivel</a></li>
                                        <li class="dropdown-link"><a href="Calculadora.html">Calculadora</a></li>
                                        <li class="dropdown-link"><a href="Quiz.html">Quiz</a></li>
                                        <li class="dropdown-link"><a href="Placar.html">Placar</a></li>
                                        <li class="dropdown-link"><a href="Mysql.html">Mysql</a></li>
                                        <li class="dropdown-link"><a href="https://angular3.netlify.app">Angolar</a></li>
                                    </ul>
                                </div>
                              </ul>
                          </div>
                      </div>

    <div class="hamburguer-menu-container">
        <div class="hamburguer-menu">
        <div></div>
    </div>
  </div>
</div>
</header>
<main>
<section>
    <div class="overlay"></div>
</section>
</main>

`
document.body.insertAdjacentHTML('afterbegin', menu);




//Calcular combustivel
var gasolina, etanol;
function melhor(){
    etanol= parseFloat(frdados.txetanol.value.replace(",",".")); 
    gasolina= parseFloat(frdados.txgasolina.value.replace(",","."));
if(etanol < 0.7*gasolina){ 
document.getElementById("imagem").src="imagens2/etanol.png";
} 
else{
 document.getElementById("imagem").src="imagens2/gasolina.png";
} 
}
function limpar(){
document.getElementById("imagem").src="imagens2/normal.png";
}

//Calculadora
function insert(num){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}


//Quiz
var questionBank= [
    {
        question : 'Do que é feito o escudo do Capitão América?',
        option : ['Adamantium','vibranium','promécio','Carbonádio'],
        answer : 'vibranium'
    },
    {
        question : 'Quantos filme tem a saga Velozes e furiosos?',
        option : ['6','7','8','9'],
        answer : '9'
    },
    {
        question : 'Qual é o nome do ator que interpreta o 007?',
        option : ['Vin diesel','Jason Statham','Daniel Craig','Sylvester Stallone'],
        answer : 'Daniel Craig'
    },
    {
        question : 'Quem é o ator que interpreta o menino da porteira?',
        option : ['Daniel','João Paulo','João Pedro','Diego'],
        answer : 'João Pedro'
    },
    {
        question : 'São quantos Cavaleiros no filme Truque de mestre?',
        option : ['2','5','3','4'],
        answer : '4'
    }
]
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}
next.addEventListener('click',nextQuestion);

function backToQuiz(){
    location.reload();
}
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}
displayQuestion();

//Placar
var Flamengo, Fluminense, Cartao1, Cartao2, Cartao3, Cartao4;
function Placar(){
        Fluminense= parseFloat(frdados.txFluminense.value.replace(",",".")); 
        Flamengo= parseFloat(frdados.txFlamengo.value.replace(",","."));
        Cartao1= parseFloat(frdados.txCartao1.value.replace(",",".")); 
        Cartao2= parseFloat(frdados.txCartao2.value.replace(",","."));
        Cartao3= parseFloat(frdados.txCartao3.value.replace(",",".")); 
        Cartao4= parseFloat(frdados.txCartao4.value.replace(",","."));

         if(Fluminense < Flamengo){ 
                document.getElementById("imagemP").src="imagens2/Flamengo.png";
             } 
         else if(Fluminense > Flamengo){
                document.getElementById("imagemP").src="imagens2/Fluminense.png";
             }
         else if(Fluminense = Flamengo){
                document.getElementById("imagemP").src="imagens2/X-X.png";
             } 
         if(Cartao1 > 0){
                document.getElementById("imagemA").src="imagens2/CartaoA.png";
             }
         if(Cartao2 > 0){
                document.getElementById("imagemV").src="imagens2/CartaoA.png";
             }
         if(Cartao1 < 1){
                document.getElementById("imagemA").src="";
             }
         if(Cartao2 < 1){
               document.getElementById("imagemV").src="";
             }
         if(Cartao3 > 0){
                document.getElementById("imagem3").src="imagens2/CartaoV.png";
             }
         if(Cartao4 > 0){
                document.getElementById("imagem4").src="imagens2/CartaoV.png";
             }
         if(Cartao4 < 1){
                document.getElementById("imagem4").src="";
             }
         if(Cartao3 < 1){
              document.getElementById("imagem3").src="";
             }
         }

function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause();
}

