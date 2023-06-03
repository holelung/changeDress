/* document.getElementById('hair_button').addEventListener('click', window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/button-click'. true);
   xhr.send();
});
 */

document.addEventListener('DOMContentLoaded', function() {
    var hair = document.getElementById('hair_button');
    hair.addEventListener('click', function(){
        alert('hello');
    })
});