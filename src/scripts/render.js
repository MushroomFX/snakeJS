function draw2DArrayOnCanvas(arr) {
    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    const numRows = arr.length;
    const numCols = arr[0].length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const cellWidth = canvas.width / numCols;
    const cellHeight = canvas.height / numRows;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const value = arr[i][j];

            var colorValue = 0
            var rgb = {r:0,g:0,b:0}

            if (value!==0){
                colorValue = Math.round((value / findHighestValue(arr))*360);
                rgb = HSLToRGB(colorValue,100,50);
            }
            

            const color = `rgb(${rgb.r},${rgb.g},${rgb.b})`;

            ctx.fillStyle = color;
            ctx.strokeStyle = color;
            
            ctx.fillRect(j * cellWidth, i * cellHeight, cellWidth, cellHeight);
        }
    }
}


function findHighestValue(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return undefined;
    }

    let highestValue = matrix[0][0];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > highestValue) {
                highestValue = matrix[i][j];
            }
        }
    }

    return highestValue;
}

const HSLToRGB = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
      l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return {r:(255 * f(0)), g:(255 * f(8)), b: (255 * f(4))};
  };