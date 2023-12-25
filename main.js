



function updateDateTime() {
    let currentDate = new Date();
    
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1; 
    let year = currentDate.getFullYear();
    
    let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let dayOfWeek = daysOfWeek[currentDate.getDay()];

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    let formattedDate = day + '-' + month + '-' + year + ', ' + dayOfWeek;
    let formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    document.querySelector('.header_currentDate').textContent = formattedDate;
    document.querySelector('.header_currentTime').textContent = formattedTime;
}

setInterval(updateDateTime, 1000);

updateDateTime();
$('#gear').click(function(){
    $('#clickAudio')[0].play();
    $('.settingsPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')
})
$('#xmark').click(function(){
    $('.settingsPopup').css('display', 'none')
    $('.wrapBackgroundContainer').css('display', 'none')
})
$('#xmarkLanguage').click(()=>{
    $('.settingsPopup_languagescreen').css('display', 'none')
    $('.settingsPopup_generalScreen').css('display', 'flex')

})
$('#addJuice').click(function(){
    $('#clickAudio')[0].play();
    $('.createGoodsPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')
})
$('#cancelCreateGoods').click(function(){
    $('.createGoodsPopup').css('display', 'none')
    $('.wrapBackgroundContainer').css('display', 'none')
 })
 let dbString = localStorage.getItem('db');
 let db = [];
 
 if (dbString) {
   try {
     db = JSON.parse(dbString);
   } catch (error) {
     console.error('Error parsing JSON:', error);
   }
 }
$('#createGoodsBtn').click(function(){
    $('#clickAudio')[0].play();
    if($('.GoodsName').val()){
        let newGoods = {
            name: $('.GoodsName').val(),
            category: $('.GoodsCategory').val(),
            count: $('.GoodsCount').val()
        }
        
         db.push(newGoods);
         localStorage.setItem('db', JSON.stringify(db))
         $('.createGoodsPopup').css('display', 'none')


         updateChart();
    }else{
        alert('Write down goods name')
    }
    window.location.reload();
})

$('#orderBtn').click(function(){
    $('#clickAudio')[0].play();
    $('.orderPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')
})

$('#cancelOrder').click(function(){
    $('.orderPopup').css('display', 'none')
    $('.wrapBackgroundContainer').css('display', 'none')
})




function init(){
    let data = JSON.parse(localStorage.getItem('db'))
    console.log(data)
    for(let el of data){
        $('#orderName').append(`<option value="${el.name}">${el.name}</option>`)
        $('.drinkStorage').append(`
        <div class="drinkItem">
        <div class="drinkItem_buttons">
            <button class="Order language-Order">Order</button>
            <button class="Sell language-Sell">Sell</button>
        </div>
        <img class="drinkItem_img" src="./img/${el.name}.png" alt="">
        <div class="drinkItem_name">${el.name}</div>
        <div class="drinkItem_taste">${el.category}</div>
        <div class="drinkItem_count" data-drink-name="${el.name}">count: ${el.count}L</div>
    </div>
    `)
    }
}
init();
$('.Order').click(function(){
    $('#clickAudio')[0].play();
    $('.orderPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')
})

let data = JSON.parse(localStorage.getItem('db'))


let spendedMoney = 0;

$('#createOrder').click(function () {
    let newOrder = {
        name: $('#orderName').val(),
        price: parseInt($('.orderPrice').val()),
        count: parseInt($('.orderCount').val()),
        deliveryPrice: parseInt($('.deliveryPrice').val()),
        date: new Date().toLocaleString()
    };

    for (let el of data) {
        if (el.name === newOrder.name) {
            el.count = Number(el.count) + Number(newOrder.count);
            $(`.drinkItem_count[data-drink-name="${el.name}"]`).html(`count: ${el.count}L`);
        }
    }

    $('.orderPrice').val('');
    $('.orderCount').val('');
    $('.deliveryPrice').val('');
    updateChart();

    spendedMoney = newOrder.price * newOrder.count;
    $('.spendedMoney').html(`Spended: ${spendedMoney}$`)
    countBalance()
});



$('#sellBtn').click(function(){
    $('#clickAudio')[0].play();
    $('#sellName').empty();
    $('.sellPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')

    for(let el of data){
        
        $('#sellName').append(`<option value="${el.name}">${el.name}</option>`)  
    }
    updateChart();
    countBalance()
})
$('#cancelSell').click(function(){
    $('.sellPopup').css('display', 'none')
    $('.wrapBackgroundContainer').css('display', 'none')
 })

 $('.Sell').click(function(){
    $('#clickAudio')[0].play();

    $('#sellName').empty();
    $('.sellPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')

    for(let el of data){
        
        $('#sellName').append(`<option value="${el.name}">${el.name}</option>`)  
    }
    updateChart();
    countBalance()
})
let earnedMoney = 0;
 $('#SellSProduct').click(function(){
    let newSell = {
        name: $('#sellName').val(),
        price: parseInt($('.sellPrice').val()),
        count: parseInt($('.sellCount').val()),
        deliveryPrice: parseInt($('.sellDeliveryPrice').val()),
        customer: parseInt($('.sellCustomer').val()),
        date: new Date().toLocaleString()
    };
    for(let el of data){


        if (el.name === newSell.name) {
            el.count = el.count - newSell.count;
            $(`.drinkItem_count[data-drink-name="${el.name}"]`).html(`count: ${el.count}L`);
        }
        
    }
    $('.sellPrice').val('');
    $('.sellCount').val('');
    $('.sellDeliveryPrice').val('');
    updateChart()
    earnedMoney = newSell.price * newSell.count;
    $('.earnedMoney').html(`Earned: ${earnedMoney}$`)
    countBalance()
})

let myChart;
function updateChart(){
    const ctx = document.getElementById('myChart');
    if (myChart) {
        myChart.destroy();
    }
    const updatedData = {
        labels: data.map(el => el.name),
        datasets: [{
          label: 'Drinks',
          data: data.map(el => parseInt(el.count)),
          backgroundColor: [
            '#13637E',
            '#3f9a94',
            '#64CCC5',
            '#68c1de',
    
          ],
          hoverOffset: 4
        }]
    };
    
    const config = {
        type: 'doughnut',
        data: updatedData,
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: '#64CCC5', 
                    }
                }
            },
            elements: {
                arc: {
                    borderColor: '#1a7391'
                }
            }
        }
    };
    myChart = new Chart(ctx, config);
    
    
}
updateChart();

let balance = 0;
function countBalance(){
    $('#balance').html(`Balance: ${earnedMoney - spendedMoney}$`)
}


$('#language').click(function(){
    $('#clickAudio')[0].play();
    $('.settingsPopup_generalScreen').css('display', 'none')
    $('.settingsPopup_languagescreen').css('display', 'flex')
})

$('.buttonsContainer_row_button').click(() => {
    $('#clickAudio')[0].play();

})




//Language changer

let semanticCore ={
    h1Settings: {
        "UK": "Settings",
        "Ukraine": "Налаштування",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    h1ChooseALanguage: {
        "UK": "Choose a language",
        "Ukraine": "Вибрати мову",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    createAProduct: {
        "UK": "Create a product",
        "Ukraine": "Створити продукт",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    createBtn: {
        "UK": "Create",
        "Ukraine": "Створити",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    cancelBtn: {
        "UK": "Cancel",
        "Ukraine": "Скасувати",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    orderAProduct: {
        "UK": "Order a product",
        "Ukraine": "Замовити продукт",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    orderBtn: {
        "UK": "Order",
        "Ukraine": "Замовити",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    sellAProduct: {
        "UK": "Sell a product",
        "Ukraine": "Продати товар",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    atb: {
        "UK": "ATB",
        "Ukraine": "АТБ",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    rucavichka: {
        "UK": "Rucavichka",
        "Ukraine": "Рукавичка",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    silpo: {
        "UK": "Silpo",
        "Ukraine": "Сільпо",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    sellBtn: {
        "UK": "Sell",
        "Ukraine": "Продати",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    createJuiceBtn: {
        "UK": "Create a product",
        "Ukraine": "Створити продукт",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    orderGoodsBtn: {
        "UK": "Order goods",
        "Ukraine": "Замовити товар",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    sellProductsBtn: {
        "UK": "Sell goods",
        "Ukraine": "Продати товар",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    earnedMoney: {
        "UK": `Earned: ${earnedMoney}$`,
        "Ukraine": `Зароблено: ${earnedMoney}$`,
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    spendedMoney: {
        "UK": `Spended: ${spendedMoney}$`,
        "Ukraine": `Витрачено: ${spendedMoney}$`,
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    balance: {
        "UK": `Balance: ${balance}$`,
        "Ukraine": `Баланс: ${balance}$`,
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    helpBtn: {
        "UK": "Help",
        "Ukraine": "Допомога",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    contactsBtn: {
        "UK": "Contacts",
        "Ukraine": "Контакти",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    historyBtn: {
        "UK": "History",
        "Ukraine": "Історія",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    ordersBtn: {
        "UK": "Orders",
        "Ukraine": "Замовлення",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    Order: {
        "UK": "Order",
        "Ukraine": "Замовити",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    Sell: {
        "UK": "Sell",
        "Ukraine": "Продати",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
    x: {
        "UK": "",
        "Ukraine": "",
        "France": "",
        "Japan": "",
        "Portugal": "",
        "Italy": ""
    },
}

let allLang = ['UK', 'Ukraine', 'France', 'Japan', 'Portugal', 'Italy'];
let lang = 'UK'

Ukraine.onclick = function(){
    lang = 'Ukraine'
    console.log(lang)
    changeUrl()
}
UK.onclick = function(){
    lang = 'UK'
    console.log(lang)
    changeUrl()
}
France.onclick = function(){
    lang = 'France'
    console.log(lang)
    changeUrl()
}
Japan.onclick = function(){
    lang = 'Japan'
    console.log(lang)
    changeUrl()
}
Portugal.onclick = function(){
    lang = 'Portugal'
    console.log(lang)
    changeUrl()
}
Italy.onclick = function(){
    lang = 'Italy'
    console.log(lang)
    changeUrl()
}
function changeUrl(){
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLanguage(){
    let hash = (window.location.hash).substring(1)
    console.log(hash)
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#UK'
        location.reload();
    }

    for(let key in semanticCore){
        document.querySelector('.language-' + key).innerText = semanticCore[key][hash]
    }
    if (hash === 'Ukraine') {
        daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
    } else if(hash === 'UK'){
        daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }
    $('#UK').click(() => {
        daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        updateDateTime(); // You may want to update the date and time when the language changes
    });
    
    $('#Ukraine').click(() => {
        daysOfWeek = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота'];
        updateDateTime(); // You may want to update the date and time when the language changes
    });
    updateDateTime();

}

changeLanguage()