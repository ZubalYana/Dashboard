$('#addJuice').click(function(){
    $('.createGoodsPopup').css('display', 'flex')
})
$('#cancelCreateGoods').click(function(){
    $('.createGoodsPopup').css('display', 'none')

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
})

$('#cancelOrder').click(function(){
    $('.orderPopup').css('display', 'none')
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
        <div class="drinkItem_count">count: ${el.count}L</div>
    </div>
    `)
    }
}
init();


$('#createOrder').click(function(){
    let newOrder = {
        name: $('#orderName').val(),
        price: parseInt( $('.orderCount').val()),
        count: parseInt($('.orderPrice').val()),
        deliveryPrice:  parseInt($('.deliveryPrice').val()),
        date: new Date().toLocaleString()
    }
    console.log(newOrder)
})