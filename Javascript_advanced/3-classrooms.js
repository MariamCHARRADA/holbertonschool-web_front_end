function createClassRoom (numbersOfStudents){
function studentSeat (seat){
    return function(){
        return seat
    }
}

let students = []
for (let i = 1; i <= numbersOfStudents; i++){
    students.push(studentSeat(i))
}
return students
} 
classRoom = createClassRoom(10)
