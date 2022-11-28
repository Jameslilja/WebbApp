var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["NatureOne.jpg","NatureTwo.jpg","NatureThree.jpg","NatureFour.jpg"];

var i = 0;
next.addEventListener('click',function(){
    i++;
    document.getElementById('image').src = arr[i];



});



prev.addEventListener('click',function(){
    i--;
    document.getElementById('image').src = arr[i];


});