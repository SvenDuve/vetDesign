function menuComponent(listOfItems, type) {

    let name = 'menu '

    const menu = document.createElement('div');
    menu.className = name.concat(type);

    for (var item of listOfItems) {
        let menuItem = document.createElement('div');
        menuItem.className = menu.className.concat('item');
        menuItem.id = item.acr
        menuItem.innerHTML = item.text;
        menu.appendChild(menuItem);
        // item.innerHTML = element;
        // menu.appendChild(item)
    };

    return menu;

};


        
        



export { menuComponent };

