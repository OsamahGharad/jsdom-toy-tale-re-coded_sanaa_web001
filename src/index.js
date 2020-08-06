let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  const toy-collection =document.querySelector('#toy-collection'#);

  function fetchToys(){
    const toy_image_url=(http:localhost:3000/toys);
      fetch(toy_image_url).then(response =>response.json()).then(result =>displayData(result));
      
  }
  function displayData(data){
    const div =document.creatElement('div');
    div.addClass('card');
    for( element of data){
      const h2 = document.creatElement('h2');
      h2.innerHTML=data['name'];
      const img= document.creatElement('img');
      img.src='name';
      const p =document.creatElement('p');
      p.innerHTML="likes";
      const button =document.creatElement('button');
      button.addClass('like-btn');
    }
  
    
  }
});

