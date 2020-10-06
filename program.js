var student_array=[];
function submit(){
    var student1= document.getElementById("input_1").value;
    var student2= document.getElementById("input_2").value;
    var student3= document.getElementById("input_3").value;
    var student4= document.getElementById("input_4").value;
    
    student_array.push(student1);
    student_array.push(student2);
    student_array.push(student3);
    student_array.push(student4);
    document.getElementById("output").innerHTML=student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";

}
function sort(){
    student_array.sort();
    document.getElementById("output").innerHTML=student_array;
}