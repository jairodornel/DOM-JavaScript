//hasAttribute= pergunta se tem atributo 

document.write(document.getElementById('idqualquer').hasAttribute("class")); 


//------------------------------

// getAttribute - pergunta se tem e traz o valor. 

var atributo = document.getElementById('idqualquer');


// Vai retornar o valor da classe

document.write(atributo.getAttribute('class')); 

//---------------------------------

//setAttribute- Altera ou aplica o atributo 

var atrib = document.getElementById('idqualquer');

//aplicando um estilo direto. 

atrib.setAttribute('style', 'background: #ccc'); 