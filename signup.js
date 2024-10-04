const mobileMenu = document.querySelector('.mobilenavmenu')
const mobileOpen = document.querySelector('.fa-bars')
const mobileClose = document.querySelector('.fa-times')

mobileOpen.addEventListener('click', function() {
    console.log("open")
    mobileMenu.style.display = "block"
    mobileOpen.style.display = "none"
    mobileClose.style.display = "block"
})

mobileClose.addEventListener('click', function() {
    console.log("open")
    mobileMenu.style.display = "none"
    mobileOpen.style.display = "block"
    mobileClose.style.display = "none"
})
    function addTextToImage() {
      
      let imageContainer = document.getElementsByClassName('img')[0];
      const textDiv = document.createElement('div');
      let span = document.createElement('span');
      span.innerHTML='Easy shopping '
      span.style.fontSize = '33.7px';
      span.style.color="white";
      let span1 = document.createElement('span');
     span1.innerHTML = 'just from';
     span1.style.fontSize = '25.5px';
     span1.style.alignItems="center";
     span1.style.color="white";
     let span2 = document.createElement('span');
     span2.innerHTML = 'home';
     span2.style.color = 'rgb(255, 200, 47)';
      textDiv.appendChild(span);
      textDiv.innerHTML += '<br>';
      textDiv.appendChild(span1);
      textDiv.innerHTML+=' ';
      textDiv.appendChild(span2);
      textDiv.style.position = 'absolute';  
      textDiv.style.width ='357.19px'
      textDiv.style.height='92px'
      textDiv.style.top = '340.7px';  
      textDiv.style.textAlign='center'
      textDiv.style.left = '30px';
      textDiv.style.rotate ='-5deg'
      textDiv.style.fontSize = '24px'; 
      textDiv.style.fontFamily = 'Arial'; 
      textDiv.style.fontWeight = '800'; 
      textDiv.style.padding = '10px'; 
      textDiv.style.Color = 'white';
      imageContainer.appendChild(textDiv);
    }
    addTextToImage();
 
