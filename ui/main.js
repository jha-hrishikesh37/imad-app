console.log('Loaded!');

//Change the text of the main body

var element = document.getElementById('maintext');

element.innerHTML = 'New Code';

//Move the image

var img = document.getElementById('madi');

var marginLeft = 0;

function moveRight()
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclink = function() {
    var interval = setInterval(moveRight, 100);
};