const items = [
    {
        itemName: 'Phone',
        itemImage: 'https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg',
        itemPrice: 500
    },
    {
        itemName: 'Laptop',
        itemImage: 'https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196_960_720.jpg',
        itemPrice: 700
    },
    {
        itemName: 'Desktop',
        itemImage: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_960_720.jpg',
        itemPrice: 900
    }
]

for (let item in items) {
    const itemBox = document.createElement('div')
    itemBox.innerHTML = '<h2>' + items[item].itemName + '</h2>' +
                        '<img src=' + items[item].itemImage + ' referrerpolicy="no-referrer" width="300" height="180"/>' +
                        '<p>Price: $' + items[item].itemPrice + '</p>' +
                        '<button onClick="callAlert(' + item + ')"> Buy </button>'

        document.getElementById('mainContainer').appendChild(itemBox)

}

function callAlert(item){
    alert(
        'ITEM: ' + items[item].itemName + ' PRICE: $' + items[item].itemPrice
    )

}

