let globalVartable = 'welcome';
function outer (){
    alert(globalVartable);
    let course = 'Holberton';
    function inner (){
        alert(globalVartable + " "+ course);
        let exclamation = '!';
        function inception (){
            alert(globalVartable + " "+ course + exclamation);
        }
     inception();   
    }
  inner();  
}
outer();