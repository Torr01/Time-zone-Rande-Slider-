const time1 = document.querySelector("#time-1");
progress = document.querySelector('.range-slider .progress')
let gap = 1;

const range = document.querySelectorAll('.range-slider input')


range.forEach(input => {
    input.addEventListener("input", e => {
        let minrange = parseInt(range[0].value)
        let maxrange = parseInt(range[1].value)
        let result = maxrange - minrange;
        time1.value = result;

        if (result < gap) {
            if (e.target.className === "slider-1") {
                range[0].value = maxrange - gap;            
            } 
            else {
                range[1].value = maxrange + gap;
            } 
        } 
        else {
            console.log("noo")
            progress.style.left = (minrange / range[0].max) * 100 + "%";
            progress.style.right = 100 - (maxrange / range[1].max) * 100 + "%";            
        }

        
        

    })
})
