/* About Section tabs */

const btnTabItem = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content')

for(let i = 0; i < btnTabItem.length;i++){
    btnTabItem[i].addEventListener('click', function(){
        //Remove the 'active' and 'outershadow' of the tab-item and remove the active of the tab-content
        let count = 0;
        while(count < btnTabItem.length){
            btnTabItem[count].classList.remove('active');
            btnTabItem[count].classList.remove('outer-shadow');
            tabContent[count].classList.remove('active');

            count++;
        }
        //Add the 'active' and 'outershadow'
        btnTabItem[i].classList.add('active');
        btnTabItem[i].classList.add('outer-shadow');

        //Add the 'active' to the tab-content
        tabContent[i].classList.add('active');

        
    }
    )}


    //Show Menu

    const navMenu = document.querySelector('.nav-menu');
    const hamburguer = document.querySelector('.hamburger-btn');

    hamburguer.addEventListener('click', function(){
        navMenu.style.visibility = 'visible';
    })
    

    //close menu

    const close = document.querySelector('.close-nav-menu');
    const nav = document.querySelector('.nav-menu-inner');
    
    close.addEventListener('click', function(){
        navMenu.style.visibility = 'hidden';

    })


    //choosing a nav option

    const link = document.querySelectorAll('.link-item');

    link.forEach(btn => btn.addEventListener('click', function(){
        navMenu.style.visibility = 'hidden';
    }))

   

    //mouse over and out


    link.forEach(btn => btn.addEventListener('mouseover', function(){
        btn.classList.add('active');
    }));

    link.forEach(btn => btn.addEventListener('mouseout', function(){
        btn.classList.remove('active');
    }));





