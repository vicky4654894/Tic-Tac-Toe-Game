let box = document.getElementsByClassName("grid-item");
let turn="X";
let winner = "N";
let info = document.getElementsByClassName("info")[0];
let turnCount=0;
//function for change turn

// Game 
let boxes = document.getElementsByClassName("grid-item");
Array.from(boxes).forEach(function(box){
    box.addEventListener('click',function(){
        if(box.innerHTML === " "){
        box.innerHTML=turn;
        changeTurn();
        info.innerHTML  =  "Turn of "+turn;
        turnCount=turnCount+1;
        checkWinner();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn ="Y";
    }
    else{
        turn = "X";
    }

}

function checkWinner(){
    let winingPossible = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        [0,4,8]
    ]

    for(let i=0;i<winingPossible.length;i++)
    {
        let a=winingPossible[i][0];
        let b=winingPossible[i][1];
        let c=winingPossible[i][2];

        if(boxes[a].innerHTML === "X")
        {
            if( boxes[b].innerHTML ==="X")
            {
                if( boxes[c].innerHTML ==="X")
                {
                    info.innerHTML="Player - X is winner <br>Click here to play the game again";
                    relodFunction();
                }
            }
        }

        if(boxes[a].innerHTML === "Y")
        {
            if( boxes[b].innerHTML ==="Y")
            {
                if( boxes[c].innerHTML ==="Y")
                {
                    info.innerHTML="Player - X is winner <br> Click here to play the game again";
                    relodFunction();
                }
            }
        }
    }

    if(turnCount === 9)
    {
        info.innerHTML="No one is winner <br> Click here to play the game again";
        relodFunction();
    }

    }

   
    function relodFunction(){
        let r =  document.getElementsByClassName("info")[0];
        r.addEventListener('click',function(){
            location.reload();
            
         })
        
    }

