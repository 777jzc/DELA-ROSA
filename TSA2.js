function changeColor(day) {
    var color;
    switch (day) {
        case 'Monday':
            color = 'red';
            break;
        case 'Tuesday':
            color = 'orange';
            break;
        case 'Wednesday':
            color = 'yellow';
            break;
        case 'Thursday':
            color = 'green';
            break;
        case 'Friday':
            color = 'blue';
            break;
        case 'Saturday':
            color = 'indigo';
            break;
        case 'Sunday':
            color = 'violet';
            break;
        default:
            color = '#ddd';
    }
    
    var colorBox = document.getElementById('colorBox');

    colorBox.style.animation = 'slideOut 0.5s ease-in-out forwards';

    var newColorBox = colorBox.cloneNode(true);
    newColorBox.style.backgroundColor = color;
    newColorBox.style.animation = 'slideIn 0.5s ease-in-out forwards';
    document.body.appendChild(newColorBox);

    setTimeout(function() {
        colorBox.remove();
    }, 500);
}
