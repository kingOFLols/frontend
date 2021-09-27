getScores().then((data)=>{
    //todo: next class 
   // console.log(data)
   let display = ''
    for(let i=0 ;i<data.length; i++){
       display += ` <li class="score-element">
            <span>${data[i].name} </span>
            <span>${data[i].score} </span> 
        </li>`
    }
    document.getElementById("displayScores").innerHTML = display
})
