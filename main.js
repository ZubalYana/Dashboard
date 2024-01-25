
//change time
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


//clicks
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


 //theme changing
//  $('#theme').click(()=>{
//     $('#clickAudio')[0].play();
//     $('.settingsPopup_generalScreen').css('display', 'none')
//     $('.settingsPopup_theme').css('display', 'flex')
// })
// $('#xmarkTheme').click(()=>{
//     $('.settingsPopup_generalScreen').css('display', 'flex')
//     $('.settingsPopup_theme').css('display', 'none')
// })
// let theme = 'dark';
// function themeChanging(updatedData){
//     $('#moon').click(()=>{
//         $('#clickAudio')[0].play();
//         $('.wrap').css('background-color', '#001C30')
//         $('.wrapBackgroundContainer').css('background-color', '#001c30d1')
//         $('.headerBtns button').css('background-color', '#13637E')
//         $('.drinkItem').css('background-color', '#13637E')
//         $('.drinkItem_name').css('color', '#001C30')
//         $('.drinkItem_taste').css('color', '#001C30')
//         $('.drinkItem_count').css('color', '#001C30')
//         $('.drinkItem_buttons button').css('background-color', '#64CCC5')
//         $('.createGoodsPopup').css('background-color', '#1a7391')
//         $('.orderPopup').css('background-color', '#1a7391')
//         $('.sellPopup').css('background-color', '#1a7391')
//         $('.settingsPopup').css('background-color', '#1a7391')
//         $('.createGoodsPopupInput').css('background-color', '#1a7391')
//         theme = 'dark';
//     })
//     $('#sun').click(()=>{
//         $('#clickAudio')[0].play();
//         $('.wrap').css('background-color', '#ffffff')
//         $('.wrapBackgroundContainer').css('background-color', '#85b7dcd1')
//         $('.headerBtns button').css('background-color', '#fff')
//         $('.drinkItem').css('background-color', '#64ccc54f')
//         $('.drinkItem_name').css('color', '#13637E')
//         $('.drinkItem_taste').css('color', '#13637E')
//         $('.drinkItem_count').css('color', '#13637E')
//         $('.drinkItem_buttons button').css('background-color', '#64ccc54f')
//         $('.createGoodsPopup').css('background-color', '#add6e3')
//         $('.orderPopup').css('background-color', '#add6e3')
//         $('.sellPopup').css('background-color', '#add6e3')
//         $('.settingsPopup').css('background-color', '#add6e3')
//         $('.createGoodsPopupInput').css('background-color', '#001c304b')
//         theme = 'light'
//     })
// }

function setTheme(theme) {
    if (theme === 'dark') {
        // Set dark theme styles
        $('#clickAudio')[0].play();
        $('.wrap').css('background-color', '#001C30')
        $('.wrapBackgroundContainer').css('background-color', '#001c30d1')
        $('.headerBtns button').css('background-color', '#13637E')
        $('.drinkItem').css('background-color', '#13637E')
        $('.drinkItem_name').css('color', '#001C30')
        $('.drinkItem_taste').css('color', '#001C30')
        $('.drinkItem_count').css('color', '#001C30')
        $('.drinkItem_buttons button').css('background-color', '#64CCC5')
        $('.createGoodsPopup').css('background-color', '#1a7391')
        $('.orderPopup').css('background-color', '#1a7391')
        $('.sellPopup').css('background-color', '#1a7391')
        $('.settingsPopup').css('background-color', '#1a7391')
        $('.createGoodsPopupInput').css('background-color', '#1a7391')
    } else {
        // Set light theme styles
        $('#clickAudio')[0].play();
        $('.wrap').css('background-color', '#ffffff')
        $('.wrapBackgroundContainer').css('background-color', '#85b7dcd1')
        $('.headerBtns button').css('background-color', '#fff')
        $('.drinkItem').css('background-color', '#64ccc54f')
        $('.drinkItem_name').css('color', '#13637E')
        $('.drinkItem_taste').css('color', '#13637E')
        $('.drinkItem_count').css('color', '#13637E')
        $('.drinkItem_buttons button').css('background-color', '#64ccc54f')
        $('.createGoodsPopup').css('background-color', '#add6e3')
        $('.orderPopup').css('background-color', '#add6e3')
        $('.sellPopup').css('background-color', '#add6e3')
        $('.settingsPopup').css('background-color', '#add6e3')
        $('.createGoodsPopupInput').css('background-color', '#001c304b')
    }
}
function saveThemeToLocalStorage(theme) {
    localStorage.setItem('theme', theme);
}
function loadThemeFromLocalStorage() {
    return localStorage.getItem('theme') || 'dark'; 
}
function themeChanging() {
    $('#moon').click(function () {
        $('#clickAudio')[0].play();
        setTheme('dark');
        saveThemeToLocalStorage('dark');
    });
    $('#sun').click(function () {
        $('#clickAudio')[0].play();
        setTheme('light');
        saveThemeToLocalStorage('light');
    });
}
let savedTheme = loadThemeFromLocalStorage();
setTheme(savedTheme);
$('#theme').click(function () {
    $('#clickAudio')[0].play();
    $('.settingsPopup_generalScreen').css('display', 'none');
    $('.settingsPopup_theme').css('display', 'flex');
});
$('#xmarkTheme').click(function () {
    $('.settingsPopup_generalScreen').css('display', 'flex');
    $('.settingsPopup_theme').css('display', 'none');
});
themeChanging();



//localStorage saving goods
 let dbString = localStorage.getItem('db');
 let db = [];
 if (dbString) {
   try {
     db = JSON.parse(dbString);
   } catch (error) {
     console.error('Error parsing JSON:', error);
   }
 }

 //create goods
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

//goods apperience
function init(){
    let data = JSON.parse(localStorage.getItem('db'))
    console.log(data)
    for(let el of data){
        $('#orderName').append(`<option value="${el.name}">${el.name}</option>`)
        $('.drinkStorage').append(`
        <div class="drinkItem">
        <div class="drinkItem_buttons">
            <button class="Order language-order">Order</button>
            <button class="Sell language-sell">Sell</button>
        </div>
        <img class="drinkItem_img" src="./img/${el.name}.png" alt="">
        <div class="drinkItem_name">${el.name}</div>
        <div class="drinkItem_taste">${el.category}</div>
        <div class="drinkItem_count" data-drink-name="${el.name} language-count">count: ${el.count}L</div>
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


//Ordering
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


//Seling
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


//chart work
let myChart;
let updatedData;
function updateChart(){
    const ctx = document.getElementById('myChart');
    if (myChart) {
        myChart.destroy();
    }
    updatedData = {
        labels: data.map(el => el.name),
        datasets: [{
          label: 'Drinks',
          data: data.map(el => parseInt(el.count)),
          backgroundColor: [
            '#13637eba',
            '#3f9a94b7',
            '#64ccc5c1',
            '#68c1deb3',
    
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
                        color: '#40b5dbda', 
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


//balance and money counting
let spendedMoney = 0;
let earnedMoney = 0;
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




//Language change
let semanticCore = {
    h1Settings: {
        "UK": "Settings",
        "Ukraine": "Налаштування",
        "France": "Paramètres",
        "Japan": "設定",
        "Portugal": "Configurações",
        "Italy": "Impostazioni"
    },
    h1ChooseALanguage: {
        "UK": "Choose a language",
        "Ukraine": "Вибрати мову",
        "France": "Choisir une langue",
        "Japan": "言語を選択",
        "Portugal": "Escolher um idioma",
        "Italy": "Scegli una lingua"
    },
    createAProduct: {
        "UK": "Create a product",
        "Ukraine": "Створити продукт",
        "France": "Créer un produit",
        "Japan": "製品を作成",
        "Portugal": "Criar um produto",
        "Italy": "Crea un prodotto"
    },
    createJuiceBtntext: {
        "UK": "Create a product",
        "Ukraine": "Створити продукт",
        "France": "Créer un produit",
        "Japan": "製品を作成",
        "Portugal": "Criar um produto",
        "Italy": "Crea un prodotto"
    },
    createBtn: {
        "UK": "Create",
        "Ukraine": "Створити",
        "France": "Créer",
        "Japan": "作成する",
        "Portugal": "Criar",
        "Italy": "Crea"
    },
    cancelBtn: {
        "UK": "Cancel",
        "Ukraine": "Скасувати",
        "France": "Annuler",
        "Japan": "キャンセル",
        "Portugal": "Cancelar",
        "Italy": "Annulla"
    },
    orderAProduct: {
        "UK": "Order a product",
        "Ukraine": "Замовити продукт",
        "France": "Commander un produit",
        "Japan": "製品を注文",
        "Portugal": "Encomendar um produto",
        "Italy": "Ordina un prodotto"
    },
    orderGoodsBtntext: {
        "UK": "Order a product",
        "Ukraine": "Замовити продукт",
        "France": "Commander un produit",
        "Japan": "製品を注文",
        "Portugal": "Encomendar um produto",
        "Italy": "Ordina un prodotto"
    },
    orderBtn: {
        "UK": "Order",
        "Ukraine": "Замовити",
        "France": "Commander",
        "Japan": "注文",
        "Portugal": "Encomendar",
        "Italy": "Ordina"
    },
    sellAProduct: {
        "UK": "Sell a product",
        "Ukraine": "Продати товар",
        "France": "Vendre un produit",
        "Japan": "製品を売る",
        "Portugal": "Vender um produto",
        "Italy": "Vendi un prodotto"
    },
    sellProductsBtntext: {
        "UK": "Sell a product",
        "Ukraine": "Продати товар",
        "France": "Vendre un produit",
        "Japan": "製品を売る",
        "Portugal": "Vender um produto",
        "Italy": "Vendi un prodotto"
    },
    atb: {
        "UK": "АТB",
        "Ukraine": "АТБ",
        "France": "АТB",  
        "Japan": "АТB",  
        "Portugal": "АТB",  
        "Italy": "АТB"  
    },
    rucavichka: {
        "UK": "Rucavichka",
        "Ukraine": "Рукавичка",
        "France": "Rucavichka",  
        "Japan": "Rucavichka", 
        "Portugal": "Rucavichka",  
        "Italy": "Rucavichka"  
    },
    silpo: {
        "UK": "Silpo",
        "Ukraine": "Сільпо",
        "France": "Silpo", 
        "Japan": "Silpo",  
        "Portugal": "Silpo",  
        "Italy": "Silpo"  
    },
    sellBtn: {
        "UK": "Sell",
        "Ukraine": "Продати",
        "France": "Vendre",
        "Japan": "売る",
        "Portugal": "Vender",
        "Italy": "Vendi"
    },
    earnedMoney: {
        "UK": `Earned: ${earnedMoney}$`,
        "Ukraine": `Зароблено: ${earnedMoney}$`,
        "France": `Gagné : ${earnedMoney} $`,
        "Japan": `獲得金額：${earnedMoney} $`,
        "Portugal": `Ganho: ${earnedMoney} $`,
        "Italy": `Guadagnato: ${earnedMoney} $`
    },
    spendedMoney: {
        "UK": `Spended: ${spendedMoney}$`,
        "Ukraine": `Витрачено: ${spendedMoney}$`,
        "France": `Dépensé : ${spendedMoney} $`,
        "Japan": `支出金額：${spendedMoney} $`,
        "Portugal": `Gasto: ${spendedMoney} $`,
        "Italy": `Speso: ${spendedMoney} $`
    },

balance: {
    "UK": `Balance: ${balance}$`,
    "Ukraine": `Баланс: ${balance}$`,
    "France": `Solde : ${balance} $`,
    "Japan": `残高：${balance} $`,
    "Portugal": `Saldo: ${balance} $`,
    "Italy": `Bilancio: ${balance} $`
},
helpBtn: {
    "UK": "Help",
    "Ukraine": "Допомога",
    "France": "Aide",
    "Japan": "ヘルプ",
    "Portugal": "Ajuda",
    "Italy": "Aiuto"
},
contactsBtn: {
    "UK": "Contacts",
    "Ukraine": "Контакти",
    "France": "Contacts",
    "Japan": "連絡先",
    "Portugal": "Contatos",
    "Italy": "Contatti"
},
historyBtn: {
    "UK": "History",
    "Ukraine": "Історія",
    "France": "Histoire",
    "Japan": "履歴",
    "Portugal": "História",
    "Italy": "Storia"
},
ordersBtn: {
    "UK": "Orders",
    "Ukraine": "Замовлення",
    "France": "Commandes",
    "Japan": "注文",
    "Portugal": "Pedidos",
    "Italy": "Ordini"
},
order: {
    "UK": "Order",
    "Ukraine": "Зам.",
    "France": "Commande",
    "Japan": "注文",
    "Portugal": "Ordem",
    "Italy": "Ordine"
},
sell: {
    "UK": "Sell",
    "Ukraine": "Прод.",
    "France": "Vendre",
    "Japan": "売る",
    "Portugal": "Vender",
    "Italy": "Vendi"
}

// ... (continue with the rest of your code)

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


