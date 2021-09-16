var prod = angular.module('myApp', []);
prod.controller('MainController', ['$scope', function($scope) {
  
  $scope.sizes = [ 
    {
      size: "Triple Bubble 6x6 cm"
    },
    {size: "Double Bubble 3x3 cm"},
    {size: "Shell 11x8 cm"},
    {size: "Roses 4x7 cm"},
    {size: "Flora 6x10 cm"},
    {size: "Amor 8x11 cm"},
    {size: "Diamond"} ,
    {size: "Lotus 6x5 cm"},
    {size: "Buddha 4x7 cm"},
    {size: "Tulip 4x5 cm"},
    {size: "Venus 3x13 cm"},
    {size: "Tiny heart"},
    {size: "Column 4x9 cm"},
    {size:"Frozen 6x6 cm"},
    {size:"Angel"} 
  ];
  $scope.colors = [
    {color: "magnólia" },
    {color: "skin rose" },
    {color: "piros" },
    {color: "fahéj vörös" },
    {color: "primer kék" },
    {color: "ibolya lila" },
    {color: "menta zöld" },
    {color: "pasztell zöld" },
    {color: "barack" },
    {color: "arany méz" },
    {color: "világos barna" },
    {color: "barna" },
    {color: "oliva" },
    {color: "fekete" },
    {color: "citromsárga" },
    {color: "citromsárga (neon)" },
    {color: "narancssárga" },
    {color: "csillogós zöld" },
    {color: "csillogós arany" },
    {color: "csillogós barack" }
    ];
  
  
  $scope.products = [ 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Triple Bubble', 
    price: "2890 Ft" 
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Double Bubble', 
    price: "1190 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Shell', 
    price: "2790 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Roses', 
    price: "1590 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Flora', 
    price: "2990 Ft"
  },
  { 
    picture: 'img/products/test.jpg', 
    name: 'Amor', 
    price: "2990 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Diamond', 
    price: "1390 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Lotus', 
    price: "1990 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Buddha', 
    price: "1490 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Tulip', 
    price: "1190 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Venus', 
    price: "1790 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Tiny heart', 
    price: "120 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Column', 
    price: "1590 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Frozen', 
    price: "1790 Ft"
  }, 
  { 
    picture: 'img/products/test.jpg', 
    name: 'Angel', 
    price: "1990 Ft"
  }
  
];



}]);


