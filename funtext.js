   const frontText = document.querySelector("#frontText");
   frontText.onmouseover = function(event){
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZΓΘλβξΣΦΨΩ';
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
        iteration += 1/5;
        }, 20);
        frontText.onmouseover = null;
    };
    
   
  

    
   