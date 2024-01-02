var gameFiled = testArr2

setTimeout(()=>{
loreStart()
},10)

function updateLoop(time){
    setTimeout(()=>{
        if(player.alive == true){
            update()
            updateLoop(player.speed)
        }
    },time)
}

function update(){
    draw2DArrayOnCanvas(gameFiled)
    gameFiled = reduceArrayInts(gameFiled)
    
    updatePlayer()
    playerToArray()
}

function playerToArray(){
        gameFiled[player.y][player.x] = player.length
}

function reduceArrayInts(arr) {
    return arr.map((y) => {
        return y.map((x) => {
            if (x > 0) {
                return x - 1;
            }
            return x;
        });
    });
}

function killPlayer(){
    player.alive = false
    loreEnd()
}

updateLoop()