document.body.style.backgroundColor='tomato';
var author =  document.getElementsByClassName("author");
 for (var i= 0 ; i<author.length ; i++){
       var elements = author[i];
      
       elements.style.color = "white";
       elements.style.backgroundColor ="green";
       elements.innerHTML = "shukumar-" + i;
       elements.style.fontSize = "20px"
 }

 const  article = document.getElementById('first_article');
 const newArticle = document.createElement('p');
 newArticle.innerHTML = "this is new article";
 article.appendChild(newArticle);


 const ul = document.getElementById('gift_item');
 const li = document.createElement('li');
 li.innerHTML = 'new list item';
 ul.appendChild(li);
 
