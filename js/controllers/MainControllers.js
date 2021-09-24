var prod = angular.module('myApp', []);
prod.controller('MainController', function($scope) {
  
  $scope.sizes = [ 
    {size: "Triple Bubble 6x6 cm"},
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
    {color: "csillogós zöld, arany, barack" }
    ];
  
  
  $scope.products = [ 
  { number:"TripleBubble",
    picture: 'img/products/test.jpg', 
    name: 'Triple Bubble', 
    price: "2890 Ft",
    action: function (id) {
      $scope.testabc(id);
    } 
  }, 
  { number:"DoubleBouble",
    picture: 'img/products/test.jpg', 
    name: 'Double Bubble', 
    price: "1190 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Shell",
    picture: 'img/products/test.jpg', 
    name: 'Shell', 
    price: "2790 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Roses",
    picture: 'img/products/test.jpg', 
    name: 'Roses', 
    price: "1590 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Flora",
    picture: 'img/products/test.jpg', 
    name: 'Flora', 
    price: "2990 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  },
  { number:"Amor",
    picture: 'img/products/test.jpg', 
    name: 'Amor', 
    price: "2990 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Diamond",
    picture: 'img/products/test.jpg', 
    name: 'Diamond', 
    price: "1390 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Lotus",
    picture: 'img/products/test.jpg', 
    name: 'Lotus', 
    price: "1990 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Buddha",
    picture: 'img/products/test.jpg', 
    name: 'Buddha', 
    price: "1490 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Tulip",
    picture: 'img/products/test.jpg', 
    name: 'Tulip', 
    price: "1190 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Venus",
    picture: 'img/products/test.jpg', 
    name: 'Venus', 
    price: "1790 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Hearth",
    picture: 'img/products/test.jpg', 
    name: 'Tiny heart', 
    price: "120 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Column",
    picture: 'img/products/test.jpg', 
    name: 'Column', 
    price: "1590 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Frozen",
    picture: 'img/products/test.jpg', 
    name: 'Frozen', 
    price: "1790 Ft",
    action: function (id) {
      $scope.testabc(id);
    }
  }, 
  { number:"Angel",
    picture: 'img/products/test.jpg', 
    name: 'Angel', 
    price: "1990 Ft",
    action: function (id) {
      $scope.testabc(id);
      $scope.testab();
    }
  }
  
];

$scope.testabc = function(id){
  // Get the modal
var modal = document.getElementById("prod-gallery");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("Big"+id);
var modalImg = document.getElementById(id);
img.style.display = "block";
img.onclick = function(){
  img.style.display = "none";

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

};
$scope.testab = function(){
  alert("valami");

};

});
