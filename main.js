$('#addJuice').click(function(){
    $('.createGoodsPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')
})
$('#cancelCreateGoods').click(function(){
    $('.createGoodsPopup').css('display', 'none')
    $('.wrapBackgroundContainer').css('display', 'none')
 })
let db = JSON.parse(localStorage.getItem('db')) || []
$('#createGoodsBtn').click(function(){
    if($('.GoodsName').val()){
        let newGoods = {
            name: $('.GoodsName').val(),
            category: $('.GoodsCategory').val(),
            count: $('.GoodsCount').val()
        }
        
         db.push(newGoods);
         localStorage.setItem('db', JSON.stringify(db))
         $('.createGoodsPopup').css('display', 'none')



    }else{
        alert('Write down goods name')
    }
    window.location.reload();
})

$('#orderBtn').click(function(){
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
            <button id="Order">Order</button>
            <button id="Sell">Sell</button>
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

let data = JSON.parse(localStorage.getItem('db'))



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
});



$('#sellBtn').click(function(){
    $('.sellPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')

    let newSell = {
        name: $('#sellName').val(),
        price: parseInt($('.sellPrice').val()),
        count: parseInt($('.sellCount').val()),
        deliveryPrice: parseInt($('.sellDeliveryPrice').val()),
        customer: parseInt($('.sellCustomer').val()),
        date: new Date().toLocaleString()
    };
    for(let el of data){
        $('#sellName').append(`<option value="${el.name}">${el.name}</option>`)

        if (el.name === newSell.name) {
            el.count = Number(el.count) - Number(newSell.count);
            $(`.drinkItem_count[data-drink-name="${el.name}"]`).html(`count: ${el.count}L`);
        }
        
    }
})
$('#cancelSell').click(function(){
    $('.sellPopup').css('display', 'none')
    $('.wrapBackgroundContainer').css('display', 'none')
 })