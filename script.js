// nav버튼 
document.querySelector('.menu-btn').addEventListener('click', function(){
    document.querySelector('.side-menu').classList.add('active')
})

document.querySelector('.side-menu .closing-btn').addEventListener('click', function(){
    document.querySelector('.side-menu').classList.remove('active')
})

// 스크롤바 내리면 nav

let height
let scrollAmount
window.addEventListener('scroll', function(){
    console.log('높이='+height)
    console.log('스크롤양='+scrollAmount)
    height=document.querySelector('header').offsetHeight
    scrollAmount=window.scrollY
    if(scrollAmount>=height){
       document.querySelector('.box1').classList.add('active')
    }else if(scrollAmount<height){
        //스크롤바 올리면 nav
    document.querySelector('.box1').classList.remove('active')
    }
    
})


