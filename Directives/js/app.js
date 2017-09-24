var app = angular.module('myApp', ['ngSanitize']);
app.controller("myctrl", function ($scope) {
    $scope.inventoryData = [
        {
            name: 'Drinks',
            details: [
                { name: 'Frooty', img: 'frooty.jpg', price: 30 },
                { name: 'fanta', img: 'fanta.png', price: 35 },
                { name: 'Powerade drink', img: 'Powerade_drink.png', price: 50 },
                { name: 'Thumbs up', img: 'thumbs-up.jpeg', price: 35 },
                { name: 'Tang', img: 'tang.jpg', price: 70 }
            ]
        },
        {
            name: 'Choclates',
            details: [
                { name: 'Dairy Milk Pack', img: 'Cadbury_Dairy_Milk-Pack.png', price: 120 },
                { name: 'Layar', img: 'Layar.png', price: 5 },
                { name: 'Cadbury fuse', img: 'cadbury_fuse.png', price: 30 }
            ]
        },
        {
            name: 'Cookies',
            details: [
                { name: 'Goodday Cashew', img: 'goodday-cashew.png', price: 20 },
                { name: 'Happie Cookies', img: 'Happie-Cookies-Chocolate.png', price: 150 },
                { name: 'Son Papri', img: 'son-papri.png', price: 130 },
                { name: 'Mary Gold', img: 'mary_gold.png', price: 25 }
            ]
        },
        {
            name: 'Maggi',
            details: [
                { name: 'Maggi Cup', img: 'maggi.png', price: 60 }
            ]
        },
        {
            name: 'Chips',
            details: [
                { name: 'Lays Tomato', img: 'lays.png', price: 25 }, 
                { name: 'Doritos Spicy Nacho', img: 'doritos-spicy-nacho.gif', price: 25 },   
            ]
        },
    ]
})

app.directive('shopkeeper', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '../view/shopkeeper.html',
        controller: function ($scope) { },
        link: function (scope, elm, attr) { }
    }
})

app.directive('customer', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '../view/customer.html',
        controller: function ($scope) { },
        link: function (scope, elm, attr) { }
    }
})

app.directive('shop', function () {
    return {
        restrict: 'E',
        templateUrl: '../view/shop.html',
        controller: function ($scope) { },
        link: function (scope, elm, attr) { }
    }
})
