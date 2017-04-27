window.onload = function() {

 var buttons = document.getElementById('buttons');
 var clear = document.getElementById('clear');
 var answer = document.getElementById('answer');

 //clicking buttons
 buttons.addEventListener('click', function(e){

    if (e.target.nodeName === 'LI') {

      var v = e.target.innerHTML;

      if (v === '=') {
        try {
            answer.innerHTML = eval(answer.innerHTML);
        } catch(e) {
            console.log(e);
            answer.innerHTML = e.message;
        }
      }else {
        answer.innerHTML += v;
      }

    }

 });

 //clear button
 clear.addEventListener('click', function(){
    answer.innerHTML = '';
 });

};
