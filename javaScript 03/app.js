                //CHAPTER NO 6

                //Question no1
//Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your
//browser:

var a = 10;
document.write("The value of a is:" + a);
document.write("<br>");
document.write("<br>");
document.write("<br>");
a = ++a;

document.write("The value of ++a is:" + a);
document.write("<br>");
document.write("Now the value of a is:" + a);

document.write("<br>");
document.write("<br>");
document.write("<br>");
a = a++;
document.write("<br>");
document.write("The value of a++ is:" + a);
document.write("<br>");
a = a+1;
document.write("Now the value of a is:" + a);

document.write("<br>");
document.write("<br>");
document.write("<br>");

a = --a;
document.write("The value of --a is:" + a);
document.write("<br>");
document.write("Now the value of a is:" + a);

document.write("<br>");
document.write("<br>");
document.write("<br>");
a = a--;
document.write("The value of a++ is:" + a);
document.write("<br>");
a = a-1;
document.write("Now the value of a is:" + a);

                //Question no 2
//What will be the output in variables a, b & result after
//execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>");
document.write("a is:" + a);
document.write("<br>");
document.write("b is:" + b);
document.write("<br>");
document.write("result is:" + result);

                //Question no 3
//Write a program that takes input a name from user & greet the user.

var name = prompt("Enter your Name");
document.write(name);

                //Question no 4
//. Write a program to take input a number from user &display it’s multiplication table on your browser. 
//If userdoes not enter a new number, multiplication table of 5should be displayed by default.

document.write("<h1>Table of 5 </h1>");
document.write(" 5 x 1 =  " + 5 * 1 + "<br>" + " 5 x 2 =  " + 5 * 2 + "<br>" + 
" 5 x 3 =  " + 5 * 3 + "<br>" + " 5 x 4 =  " + 5 * 4 + "<br>" + 
" 5 x 5 =  " + 5 * 5 + "<br>" + " 5 x 6 =  " + 5 * 6 + "<br>" + 
" 5 x 7 =  " + 5 * 7 + "<br>" + " 5 x 8 =  " + 5 * 8 + "<br>" + 
" 5 x 9 =  " + 5 * 9 + "<br>" + " 5 x 10 = " + 5 * 10 + "<br>");

                //Question no 5
//. Take
//a) Take three subjects name from user and store them in 3
//different variables.
//b) Total marks for each subject is 100, store it in another
//variable.
//c) Take obtained marks for first subject from user and
//stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user
//and store them in variables.
//e) Now calculate total marks and percentage and show the
//result in browser like this.(Hint: user table)

var nameSub1 = prompt("Enter  your subject1 name : ");
var subMarks1 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub2 = prompt("Enter  your subject2 name : ");
var subMarks2 = parseInt(prompt("Enter Obtained marks of this subject"));

var nameSub3 = prompt("Enter  your subject3 name : ");
var subMarks3 = parseInt(prompt("Enter Obtained marks of this subject"));


var eachmarks = 100;
var percentage1 = subMarks1 / eachmarks * 100;
var percentage2 = subMarks2 / eachmarks * 100;
var percentage3 = subMarks3 / eachmarks * 100;

var totalMarksStd = 300;
var obtainedMarks = subMarks1 + subMarks2 + subMarks3;
var Percentage = obtainedMarks / totalMarksStd * 100;
document.write(`<table>
    <tr>  
        <th>Subjects</th>  
        <th>Total Marks</th>  
        <th>Obtained Marks</th> 
        <th>Percentage</th>  
    </tr>  
    <tr>
        <td>${nameSub1}</td>
        <td>${eachmarks}</td>
        <td>${subMarks1}</td>
        <td>${percentage1}%</td>
    </tr>
    <tr>
        <td>${nameSub2}</td>
        <td>${eachmarks}</td>
        <td>${subMarks2}</td>
        <td>${percentage2}%</td>
    </tr>
    <tr>
        <td>${nameSub3}</td>
        <td>${eachmarks}</td>
        <td>${subMarks3}</td>
        <td>${percentage3}%</td>
    </tr>  
    <tr>
        <td></td>
        <td>${totalMarksStd}</td>
        <td>${obtainedMarks}</td>
        <td>${Percentage}%</td>
    </tr>  
        </table>`)