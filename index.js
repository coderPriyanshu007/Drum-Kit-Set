const drums = document.querySelectorAll('.drum');
const tom1 = document.querySelector('.tom1');
console.log(drums);

document.addEventListener('keydown',(event)=>{
    drums.forEach((drum,index) => {
        if(event.key === drum.textContent)
        {
           playDrum(drum,index);
        }
        
    })
})
// document.addEventListener('keyup',(event)=>{
//     drums.forEach(drum => {
//         if(event.key === drum.textContent){
//             pauseDrum(drum);        }
//     })
// })

drums.forEach((drum,index) => {
    drum.addEventListener('mousedown',()=> playDrum(drum,index)
    )
    
})
// drums.forEach(drum => {
//     drum.addEventListener('mouseup',()=> pauseDrum(drum)
//     )
// })


const playDrum = (drum,index)=> {
    new Audio(`./sounds/sound-${index+1}.mp3`).play();
    drum.classList.add("pressed");
    setTimeout(()=>{
        drum.classList.remove('pressed');
    },100)
}
