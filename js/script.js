const result = document.getElementById("result");
var light = [0, 0, 0, 0, 0, 0, 0, 0]

var total;
var totalBinary;

const lights = document.getElementsByClassName("light");

console.log(lights.namedItem("light1"));



function increment() {
    total = parseInt(result.innerHTML, 10) + 1;

    if(total > 255) { return; }
    result.innerHTML = total;
    //convert to binary
    totalBinary = total.toString(2);

    lightRender(totalBinary);
}

function decrement() {
    //retrieve total and decrement
    total = parseInt(result.innerHTML, 10) - 1;
    // not taking care of negative values ATM
    if(total < 0) { return; }

    // updating the page with the decimal total
    result.innerHTML = total;

    //convert to binary
    totalBinary = total.toString(2);

    lightRender(totalBinary);
}

function lightRender(totalBinary) {
    let revBinary = numShift(totalBinary);
    // update the Array of lights
    for(let i=0; i<revBinary.length; i++) {
        if (revBinary.charAt(i) == 1) {
            light[i] = 1;
        } else{
            light[i] = 0; 
        }
    }

    for (let j=0; j<light.length; j++) {
        if (light[j] == 1) {
            lights.namedItem("light".concat(j)).classList.add("on");
        } else {
            lights.namedItem("light".concat(j)).classList.remove("on");
        }
    }
    console.log(light);
}

// console.log(numShift(10));

function numShift(n) {
    n = n.toString();
    let shifted = "";
    for(let i=n.length-1; i>=0; i--) {
        shifted = shifted.concat(n.charAt(i));
    }

    return trailingZeros(shifted);
}

function trailingZeros(n) {
    while(n.length < 8) {
        n = n.concat("0");
    }
    return n;
}