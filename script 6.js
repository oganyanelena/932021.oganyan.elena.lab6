

function LeftColumn(){
    const leftPicture = document.querySelector('.left-picture');
    const rightPicture = document.querySelector('.right-picture');
    const leftContainer = document.querySelector('.left-picture-container');
    const rightContainer = document.querySelector('.right-picture-container');

    leftContainer.style.width = '100%';
    rightContainer.style.width = '0%';
    leftPicture.style.display = 'block';
    rightPicture.style.display = 'none';
}

function BothColumns(){
    const leftPicture = document.querySelector('.left-picture');
    const rightPicture = document.querySelector('.right-picture');
    const leftContainer = document.querySelector('.left-picture-container');
    const rightContainer = document.querySelector('.right-picture-container');

    leftContainer.style.width = '100%';
    rightContainer.style.width = '100%';
    leftPicture.style.display = 'block';
    rightPicture.style.display = 'block';
}

function RightColumn(){
    const leftPicture = document.querySelector('.left-picture');
    const rightPicture = document.querySelector('.right-picture');
    const leftContainer = document.querySelector('.left-picture-container');
    const rightContainer = document.querySelector('.right-picture-container');

    leftContainer.style.width = '0%';
    rightContainer.style.width = '100%';
    leftPicture.style.display = 'none';
    rightPicture.style.display = 'block';
}