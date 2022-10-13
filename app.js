const { default: axios } = require("axios");

const htmlBody = document.getElementById('app');

let menuState = {
    breakfestItems: [],
    sideItems: [],
    lunchItems: [],
    appItems: [],
    dessertItems: [],
    brunchItems: [],
    dinnerItems: [],
    pageState: '',
}

function createHeader(){
    let topRow = document.createElement('div');
    topRow.classList = 'row';
    htmlBody.appendChild(topRow);

    let topImp = documet.createElement('img');
    
}


function getData(){
    axios.get('https://astute-baton-362318.ue.r.appspot.com/api/json/').then((response) =>{
        for(let obj of response.data){
            switch (obj['category']['title']){
                case 'Dinner':
                    menuState.dinnerItems.push(obj);
                    break;
                case 'Breakfest':
                    menuState.breakfestItems.push(obj);
                    break;
                case 'Brunch':
                    menuState.brunchItems.push(obj);
                    break;
                case 'Side':
                    menuState.sideItems.push(obj);
                    break;
                case 'Dessert':
                    menuState.sideItems.push(obj);
                    break;
                case 'Appetizer':
                    menuState.appItems.push(obj);
                    break;
            }
        }
    })
}