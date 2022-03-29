import compList from '../comp.json'



function createList(listOfItems, type) {
    let name = 'list'

    const list = document.createElement('div')
    list.className = name.concat(type) 

    // listOfItems.forEach(el => console.log(el))


    for (var item of listOfItems) {
        var listItem = document.createElement('div');
        listItem.className = list.className.concat(' items textForm');
        listItem.id = item.acr;
        listItem.innerHTML = item.text;
        list.appendChild(listItem);
    };

    return list;

}

function createAdress(compList){

    const adressList = compList.contactDetails;
    const contactHeading = document.createElement('div');
    contactHeading.className = 'headings';
    contactHeading.innerHTML = "Unsere Kontaktdaten";
    document.getElementById('contactContentText').appendChild(contactHeading);

    const adressElement = document.createElement('div');
    adressElement.className = 'textForm';
    adressElement.innerHTML = [adressList[0].text + '<br></br>' + 
                                adressList[1].text + '<br>' + adressList[2].text +
                                '<br><br>' + 'Fon: ' + adressList[3].text +
                                '<br>'+ 'Mail: ' + adressList[4].text];
    document.getElementById('contactContentText').appendChild(adressElement);
    
    const directionsHeading = document.createElement('div')
    directionsHeading.className = 'headings';
    directionsHeading.innerHTML = 'So erreichen Sie uns:';
    document.getElementById('contactContentText').appendChild(directionsHeading);


}


function contentOnMouseEnter(compList) {

    const list = compList;
    
    for(let i = 0; i < list.length; i++){
        
        document.getElementById(list[i].acr).onmouseenter = function(event) {
            let target = event.target;
            const desc = document.createElement('div');
            desc.style.opacity = 0;
            desc.innerHTML = list[i].text;
            target.appendChild(desc)
            let steps = 0;
            let timer = setInterval(function() {
                steps++;
                desc.style.opacity = 0.05 * steps;
                if(steps >= 20) {
                    clearInterval(timer);
                    timer = undefined;
                }
            }, 50);
            target.style.background = '#D8C3A5';
            target.style.color = 'black'
        };

        document.getElementById(list[i].acr).onmouseleave = function(event) {
            let target = event.target;
            let c = target.childNodes[1];    
            c.remove();
            target.style.color = '#8E8D8A'
            target.style.background = '';
        };
        
        
    };

}



function contentOnTouch(compList) {

    const list = compList;

    for(let i = 0; i < list.length; i++){
        
        document.getElementById(list[i].acr).ontouchstart = function(event) {
            let target = event.target;
            const desc = document.createElement('div');
            desc.style.opacity = 0;
            desc.innerHTML = list[i].text;
            target.appendChild(desc)
            let steps = 0;
            let timer = setInterval(function() {
                steps++;
                desc.style.opacity = 0.05 * steps;
                if(steps >= 20) {
                    clearInterval(timer);
                    timer = undefined;
                }
            }, 50);
            target.style.background = '#D8C3A5';
            target.style.color = 'black'
        };

        // document.getElementById(list[i].acr).onmouseleave = function(event) {
        //     let target = event.target;
        //     let c = target.childNodes[1];    
        //     c.remove();
        //     target.style.color = '#8E8D8A'
        //     target.style.background = '';
        // };
        
        
    };


}



// function contentDirections(compList) {

//     const list = compList.Directions;
    
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






function contentComponents() {

    const contentComponent = document.createElement('div');
    contentComponent.className = 'content';

    return contentComponent;

}




export { contentOnTouch };
export { createAdress };
export { createList };
export { contentComponents };
export { contentOnMouseEnter };
// export { $ };
