
let body = document.getElementsByTagName('body')[0].style.margin = '0 auto'
let colorA = 'black'
let colorB = 'white'
let colors = ['blue', 'green', 'red']

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let changeColor = function (e) {
    let n = getRandomInt(0, 2)
    e.target.style.background = colors[n]
}

let container = document.createElement('div');
container.style.width = '700px'
container.style.height ='700px'
container.style.margin = '0 auto'
container.style.border = '2px solid black'
document.body.append(container)

for (let j = 0; j < 10; j++) {

    for (let i = 0; i < 10; i++) {
        let spanElement = document.createElement('span')
        spanElement.style.width = '10%'
        spanElement.style.height = '10%'
        spanElement.style.position = 'relative'
        spanElement.style.cssFloat = 'left'
        spanElement.onclick = changeColor

        if (j % 2 == 0)
            if (i % 2 == 0)
                spanElement.style.background = colorA
            else
                spanElement.style.background = colorB
        else
            if (i % 2 == 0)
                spanElement.style.background = colorB
            else
                spanElement.style.background = colorA





        container.append(spanElement)
    }
    //document.body.append(document.createElement('br'));
}