let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextIamge()
}, 3500)

function nextIamge(){
    count++;
    if(count>7){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}