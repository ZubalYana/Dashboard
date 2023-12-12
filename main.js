$('#addJuice').click(function(){
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
            <button class="Order">Order</button>
            <button class="Sell">Sell</button>
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
    $('.orderPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')
})

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
    updateChart();
});



$('#sellBtn').click(function(){
    $('#sellName').empty();
    $('.sellPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')

    for(let el of data){
        
        $('#sellName').append(`<option value="${el.name}">${el.name}</option>`)  
    }
    updateChart();
})
$('#cancelSell').click(function(){
    
    $('.sellPopup').css('display', 'none')
    $('.wrapBackgroundContainer').css('display', 'none')
 })

 $('.Sell').click(function(){
    $('.sellPopup').css('display', 'flex')
    $('.wrapBackgroundContainer').css('display', 'flex')
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
          label: 'My First Dataset',
          data: data.map(el => parseInt(el.count)),
          backgroundColor: [
            '#13637E',
            '#3f9a94',
            '#233a94',
    
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
                        color: '#64CCC5', // Change this to the desired color for the labels
                    }
                }
            },
            elements: {
                arc: {
                    borderColor: '#1a7391' // Change this to the desired color for the border
                }
            }
        }
    };
    myChart = new Chart(ctx, config);
    
    
}
updateChart();