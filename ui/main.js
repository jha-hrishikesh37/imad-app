console.log('Loaded!');

//Change the text of the maintext div

var element = document.getElementById('maintext');

element.innerHTML = 'New Value';

//Move the image

var img = document.getElementById('madi');
img.onclick = function()
{
    img.style.marginLeft = '100px';
};
