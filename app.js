// Iteration 0
$(document).ready(function() {
  console.log("The document is ready!");
  var homeValues = [1000000000, 50000, 20];
  var homeStrings = ["$1,000,000,000", "$50,000", "$20"];
  var homeImages = ["img/whiteHouse.jpg", "img/newShack.jpg", "img/shack.jpg"];

  for (var i = 0; i < 3; i++) {
    var $newHome = $('.home').first().clone().appendTo('.image-container');

    $newHome.attr("data-price", homeValues[i]);
    $newHome.find("h4").text(homeStrings[i]);
    $newHome.find("img").attr("src", homeImages[i]);
  }

  $('.dark').on('click', function() {
    $('body').css('background', 'url(img/dark_wood.png)');
  });

  $('.light').on('click', function() {
    $('body').css('background', 'url(img/tileable_wood_texture.png)');
  });

  $('.textures').css('width', '150px');
  $('.textures').append("<span class='forest'></span");
  $('.forest').css('background', 'url(img/forest.jpg)');

  $('.forest').on('click', function() {
    $('body').css({
      'background-size' : 'cover',
      'background' : 'url(img/forest.jpg)'
    });
  });

// Iteration 1
  $('.high').on('click', function(event) {
    event.preventDefault();
    $('.image-container').html($('.image-container').children().sort(function(a, b) {
      return b.dataset.price - a.dataset.price;
    }));
  });

  $('.low').on('click', function(event) {
    event.preventDefault();
    $('.image-container').html($('.image-container').children().sort(function(a, b) {
      return a.dataset.price - b.dataset.price;
    }));
  });

// Iteration 2
  $('.filters').append('<label><input type="checkbox" value="1000000000"/>$1 Mil - tres commas</label>');
  function createFilter(val, text) {
    $('.filters').append("<label><input type='checkbox' value=" + val + ">" + text + "</label>");
   }
    createFilter(1000000000, 'bil');
//Iteration 3
    $('.filters').find('input:checkbox').on("click", function () {
        var $article = $('article');
        var atLeastOneIsChecked = $('.filters :checkbox:checked').length;

        if (atLeastOneIsChecked > 0) {
          $article.hide();
          $(".filters").find("input:checked").each(function () {
            console.log($checkedLow);
            var $checkedLow = Number($(this).parent().prev().children().val());

            for (var i = 0; i < $article.length; i++) {
              if (isNaN($checkedLow)) {
                $checkedLow = 0;
              }else if ($article[i].dataset.price <= +$(this).val() && $article[i].dataset.price >= $checkedLow) {
                $article.eq(i).show();
              }
            }
          });
        } else {
          $article.show();
        }
    });

//Stretch, pagination

  var showPerPage = 6;
  var numberofCabins = $('.image-container').children().size();
  var numPages = Math.ceil($numberofCabins / $showPerPage);

  $('.image-container').hide()





});

