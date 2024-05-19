// Criar um <li> e um nó de texxto. 

var elemento = document.createElement('li'); 
var texto = document.createTextNode('Texto criado'); 
elemento. appendChild(texto);  


// Recoperando o elemento lista;
// Anexando o elemento <li> no final da lista. 


var lista = document.getElementsByTagName('ul')[0];
lista.appendChild(elemento); 


//InsertBefore


var lista = document.getElementsByTagName('ul')[0];
var itens = lista.getElementsByTagName('li');

//Criando o elemento; 

var elemento = document.createElement('li');
elemento.textContent = 'Outro Elemento'; 

//Inserindo um valor em uma posição especifica. 

lista.insertBefore(elemento,itens[4]); 

//RemoveChild

lista.removeChild(itens[1]); 