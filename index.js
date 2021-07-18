var btn = document.getElementById('btn');
var span= document.getElementById('span');

let  count = 0;
function bag () {
    count += 1;
    document.getElementById('span').innerHTML = count;
    console.log(count);
}