console.log('Loaded!');

//Change the text of the main body

var element = document.getElementById('maintext');

element.innerHTML = 'New Code';

//Move the image

var img = document.getElementById('madi');

img.onclink = function() {
  img.style.marginLeft = '200px';  
};