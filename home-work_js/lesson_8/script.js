let mouseClickNone = document.querySelector('.textclicknone').onselectstart = function(){
    console.log('click');
    return false;
}

let mouseMenuNone = document.querySelector('.textmenu').oncontextmenu = function(){
    console.log('menu');
    return false;
}

let mouseFolderOpen = document.querySelector('.folders').onmouseover = function(){
    console.log('folder');
    
    let closed = document.querySelector('.folderclosed');
    let open = document.querySelector('.folderopen');
    
    closed.style.display = "none";
    open.style.display = "block";
}

let mouseFolderClosed = document.querySelector('.folders').onmouseout = function(){
    
    let closed = document.querySelector('.folderclosed');
    let open = document.querySelector('.folderopen');
    
    closed.style.display = "block";
    open.style.display = "none";
}


let backgroundColor = document.querySelector('.colorbackground').onmouseover = function (){
    let block = document.querySelector('.colorbackground');
    let text = document.querySelector('.textcolor');
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);
    let colorRGB = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    block.style.backgroundColor = colorRGB;
    text.style.lineHeight = '40px';
    text.style.padding = '80px 0';
    text.style.transition = 'ease 4s';
    text.innerHTML = "Мой цвет: " + "<br/>" + colorRGB;
//    console.log(colorB);
    
}


//ВТОРОЙ СПОСОБ!!!
//let backgroundColor = document.querySelector('.colorbackground').onmouseover = RGBcolor;
//
//
//
//function colors(){
//
//    let letter = '0123456789ABCDEF';
//    let colorRGB = '#';
//    for (i=0; i<6; i++){
//        colorRGB += letter[Math.floor(Math.random()*16)];
//    }
//    return colorRGB;
//}































