const codes = document.querySelectorAll('.code');

// set cursor focus on first code
codes[0].focus();

// create loop for entering code and add keydown event listener
codes.forEach((code,idx) =>{
    code.addEventListener('keydown' , (e) =>{
        codes[idx].value = ''
        if(e.key >=0  && e.key <= 9)
        {
            setTimeout(() => {
                codes[idx + 1].focus()
            }, 10);
        }
        else if(e.key === 'Backspace')
        {
            setTimeout( () => codes[idx - 1].focus(),10)
        }
    })
})