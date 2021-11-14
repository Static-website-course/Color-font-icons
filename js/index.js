const redInput = document.getElementById('red-rgb')
const greenInput = document.getElementById('green-rgb')
const blueInput = document.getElementById('blue-rgb')
const rgbBtn = document.getElementById('try-rgb')
const hslBtn = document.getElementById('try-hsl')
const hslColor = document.getElementById('hsl-color')
const list = document.getElementsByClassName('ballate_warpper_hsl')

rgbBtn.addEventListener('click', () => {

    const card = document.getElementsByClassName('card_cover');
    // card[0].style.backgroundColor = 'rgb(22,33,23)'
    card[0].style.backgroundColor = `rgb(
                ${redInput.value} ,
                ${greenInput.value} ,
                ${blueInput.value} 
            )`


    console.log(redInput.value);
    console.log(greenInput.value);
    console.log(blueInput.value);

    console.log('Inside the clicking');
})

hslBtn.addEventListener('click', () => {
    const saturation = [10, 20, 30, 40, 50, 60, 70, 80, 90];
    let color = hslColor.value === '' ? 235 : hslColor.value;
    // console.log(list[0].children[0].children[0]);
    for (let i = 0; i < saturation.length; i++) {
        list[0].children[0].children[i].style.backgroundColor = `hsl(
            ${color} ,
            ${saturation[i]}% ,
            50%
        )`
        // console.log(list[0].children[0].children[i].style);
    }

    // hslColor.value
})