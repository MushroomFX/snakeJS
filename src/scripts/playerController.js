document.body.addEventListener("keydown",(e)=>{
    updateFacing(e.key)
})

const player = {
    x:0,
    y:0,
    facing:1,
    length: 10,
    speed:100,
    alive:true
}

function updatePlayer(){
    const nextPos = {
        x:player.x,
        y:player.y
    }

    switch(player.facing){
        case 0:
        nextPos.y -=1
        break;

        case 1:
        nextPos.x +=1
        break;

        case 2:
        nextPos.y +=1
        break;

        case 3:
        nextPos.x -=1
        break;
    }
    if(checkCoordinates(gameFiled,nextPos.x,nextPos.y)==true){
        player.y = nextPos.y;
        player.x = nextPos.x;
    }
}

function updateFacing(key){
    switch(key){
        case "w":
            player.facing = 0
        break;

        case "d":
            player.facing = 1
        break;

        case "s":
            player.facing = 2
        break;

        case "a":
        player.facing = 3
        break;
    }
}

function checkCoordinates(array, x, y) {
    const numCols = array.length;
    const numRows = array[0].length;
  
    if (x >= 0 && x < numRows && y >= 0 && y < numCols) {
      return true
    } else {
        killPlayer()
        return false
    }
  }