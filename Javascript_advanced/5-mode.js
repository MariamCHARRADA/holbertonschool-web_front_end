function changeMode (size, weight,transform , background,color){
    return function (){
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main (){
   let spooky = changeMode('9px','bold','uppercase','pink','green');
   let darkMode = changeMode('12px','bold','capitalize','black','white');
   let screamMode = changeMode('12px','normal','lowercase','white','black');

   document.body.innerHTML="<p>Welcome Holberton!</p>";

   function createButton (text,mode){
    let button = document.createElement('button');
    button.innerHTML = text;
    button.addEventListener('click',mode);
    document.body.appendChild(button);
   }
   createButton('Spooky',spooky);
   createButton('Dark mode',darkMode);
   createButton('Scream mode',screamMode);
}

main();
