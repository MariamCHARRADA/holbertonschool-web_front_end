function welcome (firstName, lastName){
    let fullName = firstName + ' ' + lastName+'!'; ;
    function displayFullName(){
        alert(fullName);
        console.log(fullName);
    }
    displayFullName();
}
welcome('Holberton', 'School');
