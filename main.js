const container = document.createElement('div');

container.classList = 'container';

document.body.appendChild(container);

const start = document.querySelector('button');

const reset = document.querySelector('button');


reset.addEventListener('mousedown', () =>{
    window.location.reload();    
});

start.addEventListener('mouseup', () =>{

    for(let a = 0; a < 2; a++){
    let columns = prompt('Select the number of rows', '');

    if (columns > 100){
        a = 0;
    alert('Please select a number below 100');
    }else if (isNaN(columns)){
        a = 0;
    alert('Please input a number');
    } else {
        a = 2;
    let blockCount = columns * columns;

    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    for(let i = 0; i < blockCount; i++) {
        let blocks = document.createElement('div');
        blocks.classList = 'blocks';
        container.appendChild(blocks);

        blocks.addEventListener('mouseover', () =>{
        blocks.classList.add('hover');
        })

        blocks.addEventListener('click', () =>{
            blocks.classList.remove('hover');
        })
    }
    }

    }
});
    





