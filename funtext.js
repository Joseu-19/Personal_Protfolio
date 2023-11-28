
// this makes the arrow dissapear on scroll.
window.addEventListener('scroll', () => {
let downArrow = document.querySelector('#downArrow');
setTimeout(() => {
    downArrow.style.opacity = '0';
}, .7);

});

//this makes the letters scramble on hoverover
const frontText = document.querySelector("#frontText");
   frontText.onmouseover = function(event){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZΓΘλβξΣΦΨΩ也弛她';
        let iteration = 0;
        setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
        .map((letter, index) => {
            if(letter === " "){
                return (" ")
            }
            if(index < iteration){
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("")

        if (iteration >= event.target.dataset.value.length){
            clearInterval(interval);
        }
        iteration += 1/4;
        }, 45);
        frontText.onmouseover = null;
    };
    

   
  

    
   