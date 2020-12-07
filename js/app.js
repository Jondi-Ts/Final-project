var name = localStorage.getItem('userName');
if(name != 'null'){
alert('welcome back, '+ name)
}

$('#myBtn').on('click', function(){
   // alert("Good Morning");
   // var name = $('#myInput').attr('value')
    var name = $('#myInput').val();
    alert(`Hello, ${name}!`);
    //alert("Hello " + name + "!")

    localStorage.setItem('userName', name);
})

//var arr = ['Hello', 'welcome', 'Hil', 'Shalom'];
var cars = [{ name :"Fiat", year: 2020}]
var carsString = JSON.stringify(cars)
localStorage.setItem("cars", carsString);

var readCarsString = localStorage.getItem('cars');
var readCarsObject = JSON.parse(readCarsString);

console.log(readCarsObject);


localStorage.removeItem();//פרית בודד
localStorage.clear(); //את כל המידע
