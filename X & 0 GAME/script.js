let btns = document.querySelectorAll('.btn')
let restarts = document.querySelector('#btnrestart')
let check = true

btns.forEach((boxs)=>{
    boxs.addEventListener("click",()=>{
        if(check==true){
            boxs.innerHTML = "X"
            check = false
        }
        else{
            boxs.innerHTML = "0"
            check = true
        }

    checkwinner();
    })
})

restarts.addEventListener("click",()=>{
    window.location.reload()
})


let arr1= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];  


function checkwinner(){
    arr1.forEach((pattern)=>{
        let pos1 = btns[pattern[0]].innerText;
        let pos2 = btns[pattern[1]].innerText;
        let pos3 = btns[pattern[2]].innerText;
    
        if(pos1 != "" &&  pos2 != "" && pos3 != ""){
            if(pos1===pos2 && pos2===pos3){
                window.alert(`Winner is ${pos1}`)
            }
        }
    })
}

