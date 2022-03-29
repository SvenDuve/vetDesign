import _ from 'lodash';
// import './styles/style.scss'
import img from './books-768426_1920.jpg';
import cardImg from './auge_cloe.jpg';
import img2 from './finanzamt.jpg';
import compList from './comp.json';
import simpleParallax from 'simple-parallax-js';
import { menuComponent } from './js/navigation';
import { contentOnTouch, createList } from './js/content';
import { createAdress } from './js/content';
import { contentOnMouseEnter } from './js/content';
import { contentComponents } from './js/content';
import 'jquery';




function addPicture() {
    const myImg = new Image(1200, 700);

    myImg.src = img;
    myImg.className = 'image';


    document.getElementsByClassName('contentGreeting')[0].appendChild(myImg);

    const image = document.getElementsByClassName('image');
    new simpleParallax(image, {
        orientation: "up"
    });

};


function accToCard() {
    const myImg = new Image(100,100);
    myImg.src = cardImg;
    myImg.className = 'cardImage';

    
}


// function contentOnMouseEnter(compList) {

//     const list = compList.activityDescriptions;
    
//     for(let i = 0; i < list.length; i++){
        
//         document.getElementById(list[i].acr).onmouseenter = function(event) {
//             let target = event.target;
//             const desc = document.createElement('div');
//             desc.style.opacity = 0;
//             desc.innerHTML = list[i].text;
//             target.appendChild(desc)
//             let steps = 0;
//             let timer = setInterval(function() {
//                 steps++;
//                 desc.style.opacity = 0.05 * steps;
//                 if(steps >= 20) {
//                     clearInterval(timer);
//                     timer = undefined;
//                 }
//             }, 50);
//             target.style.background = '#D8C3A5';
//             // target.style.color = '#8E8D8A'
//             target.style.color = 'black'
//         };

//         document.getElementById(list[i].acr).onmouseleave = function(event) {
//             let target = event.target;
//             let c = target.childNodes[1];    
//             c.remove();
//             target.style.color = '#8E8D8A'
//             target.style.background = '';
//         };
        
        
//     };

// }




function getSectionIds(Sections) {
    
    let idSelections = []; 
    
    for (let i = 0; i < Sections.length; i++) {
        idSelections.push(Sections[i].attributes.id.textContent);
    }
    
    return idSelections;
    
};



function getButtonId(Ids) {
    let buttonIds = [];
    for (let i = 0; i < Ids.length; i++) {
        buttonIds.push(Ids[i].acr); 
    }
    
    return buttonIds
};




function scrollThereNow() {
    
    for(let i = 0; i < Sections.length; i++){
        
        let elmnt = document.getElementById(buttonIds[i]);
        let targetLoc = document.getElementById(Ids[i]);
        elmnt.addEventListener('click', function() {
            
            targetLoc.scrollIntoView({behavior: 'smooth'});
            
        });
        
    }
}


function backUp() {
    let homeDude = document.getElementById("compName");
    let loc = document.getElementById("startImg");
    homeDude.addEventListener('click', function() {
        loc.scrollIntoView({behavior: 'smooth'});
    })
}


        
        
        
const checkpoint = 500;
        
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    let opacity = 1
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".contentGreeting").style.opacity = opacity;
});
        

// function fadeInHeadline() {
//     let imageElement = getElementsByClassName('contentGreeting')[1];
//     imageElement.
// }





function smallImage(img) {
    const myImg = new Image(300, 300);

    myImg.src = img;
    myImg.className = 'image';

    return myImg;
    // document.getElementsByClassName('contactImageBox').appendChild(myImg);

}



const menuList = document.getElementById('menu');
menuList.appendChild(menuComponent(compList.menuItem, 'main'));



const competenceList = document.getElementById('competenceList');
competenceList.appendChild(createList(compList.activityFields, 'competence'));




addPicture();
contentOnMouseEnter(compList.activityDescriptions);
// contentOnTouch(compList.activityDescriptions);


const Sections = document.getElementsByClassName('contentBox');
const buttonIds = getButtonId(compList.menuItem);
const Ids = getSectionIds(Sections);
createAdress(compList);







const directionsList = document.createElement('div');
directionsList.className = 'directionsList';
directionsList.appendChild(createList(compList.Transport, 'transport'));

// directionsList.innerHTML = "Hallo";
const contacts = document.getElementById('contactContentText');
contacts.appendChild(directionsList);
contentOnMouseEnter(compList.Directions);



const contactImages = document.getElementById('contactImageBox');
// contactImages.appendChild(smallImage(img2));

const map = document.createElement('div');
map.id = 'map';
map.style.paddingTop = "100px"
map.style.alignSelf = "center"
map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.3212072786655!2d11.02642791565461!3d49.32713727554087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479f4fd80c3d932f%3A0x5faa8d958a7d905e!2sBahnhofstra%C3%9Fe%206%2C%2091126%20Schwabach!5e0!3m2!1sde!2sde!4v1610174528732!5m2!1sde!2sde" width="400" height="300" frameborder="10" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
contactImages.appendChild(map)


scrollThereNow();
backUp();

// this works

// $(document).ready(function(){
//     $("#compName").click(function(){
//       $(this).hide();
//     });
//   });



function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    console.log(document.cookie)
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function cookieConsent() {
    if (getCookie('allowCookies') == 1) {
        $('.toast').hide()
    }
}


$('#btnDeny').click(()=>{
    eraseCookie('allowCookies')
    $('.toast').hide()
})


$('#btnAccept').click(()=>{
    setCookie('allowCookies','1',7)
    $('.toast').hide()
})

$('#btnInf').click(()=>{
    
    var url = "datenschutz.html";
    $(location).attr('href',url);
    
})

// load
// cookieConsent();


// for demo / testing only
// $('#btnReset').click(()=>{
//     // clear cookie to show toast after acceptance
//     eraseCookie('allowCookies')
//     $('.toast').toast('show')
// })
