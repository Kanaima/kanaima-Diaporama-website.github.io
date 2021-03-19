/*var var1 = "Site en construction... \n(Développeuse web débutante) \nIl sera amélioré au fur et à mesure."
alert(var1)*/

$(document).ready(function() {

  var imageArray = [
    ["images/001.jpg", "bluelake"],
    ["images/002.jpg", "girlsmile"],
    ["images/003.jpg", "mountainview"],
    ["images/004.jpg", "cuddlelions"],
    ["images/005.jpg", "familydinner"],
    ["images/006.jpg", "hiddenbeach"],
    ["images/007.jpg", "russianblue"],
    ["images/008.jpg", "confettiparty"],
    ["images/009.jpg", "dadholdingchildren"],
    ["images/010.jpg", "whitestaff"],
    ["images/011.jpg", "grandmachildrenbeach"],
    ["images/012.jpg", "marriedcouple"],
    ["images/013.jpg", "babies"],
    ["images/014.jpg", "turtle"],
    ["images/015.jpg", "nightsky"],
    ["images/016.jpg", "bearcub"],
    ["images/017.jpg", "oldmarriedcouplehands"],
    ["images/018.jpg", "couplelaughing"],
    ["images/019.jpg", "momholdingbaby"],
    ["images/020.jpg", "familybeach"],
    ["images/021.jpg", "luminescentfish"],
    ["images/022.jpg", "specialfamily"],
    ["images/023.jpg", "tiger"],
    ["images/024.jpg", "bee"],
    ["images/025.jpg", "babyeatingcake"],
    ["images/026.jpg", "forest"],
    ["images/027.jpg", "couple"],
    ["images/028.jpg", "kitten"],
    ["images/029.jpg", "girlplayingsea"],
    ["images/030.jpg", "childrenplaying"],
    ["images/031.jpg", "auroraborealis"],
  ];

  var i = 0;

  $("#next").click(function() {
    var $firstChild = $('.preview img:first');
    var $lastChild = $('.preview img:last');
    var $current = $('.active');
    var $backgroundImg = $('#backgroundImg');

    if ($current.attr('src') == $lastChild.attr('src')) {
      //remove the first child
      //add a new image in the slider to the right
      //set the next background-image with the corresponding imageArray datas
      if (i + 1 <= imageArray.length) {
        $firstChild.remove();

        $lastChild.after("<img class=\"slide\" src=\"" + imageArray[i + 1][0] + "\" alt=" + imageArray[i + 1][1] + ">");

        $backgroundImg.css("background-image", "url('" + imageArray[i + 1][0] + "')");
      } else if (i + 1 > imageArray.length) {
        i = 0;
        $lastChild.after("<img class=\"slide\" src=\"" + imageArray[i][0] + "\" alt=" + imageArray[i][1] + ">");

        $backgroundImg.css("background-image", "url('" + imageArray[i][0] + "')");
      }
      var $next = $('.preview img:last');
    } else {
      var $next = $current.next();
      $backgroundImg.css("background-image", "url('" + imageArray[i + 1][0] + "')");
    };

    console.log("i avant incrémentation : " + i);

    //change the slider selector
    $current.removeClass("active");
    $next.addClass("active");

    i++;

    console.log("i=" + i + "\ncurrent=" + $current.attr('src') + "\nnext=" + $next.attr('src') + "\nfirstChild=" + $firstChild.attr('src') + "\nlastChild=" + $lastChild.attr('src') + "\nimgarray=" + imageArray[i][0] + "\nlength=" + imageArray.length);

  });



  $('#prev').click(function() {
    var $firstChild = $('.preview img:first');
    var $lastChild = $('.preview img:last');
    var $current = $('.active');
    var $backgroundImg = $('#backgroundImg');

    if ($current.attr('src') == $firstChild.attr('src')) {
      //remove the last child
      //add a new image in the slider on the left and
      //set the background-image with the corresponding imageArray datas
      if (i - 1 >= 0) {
        $lastChild.remove();

        $firstChild.before("<img class=\"slide\" src=\"" + imageArray[i - 1][0] + "\" alt=" + imageArray[i - 1][1] + ">");

        $backgroundImg.css("background-image", "url('" + imageArray[i - 1][0] + "')");
      } else if (i - 1 < 0) {
        i = imageArray.length;
        $firstChild.before("<img class=\"slide\" src=\"" + imageArray[i][0] + "\" alt=" + imageArray[i][1] + ">");

        $backgroundImg.css("background-image", "url('" + imageArray[i][0] + "')");
      }
      var $prev = $('.preview img:first');
    } else {
      var $prev = $current.prev();
      $backgroundImg.css("background-image", "url('" + imageArray[i - 1][0] + "')");
    };

    console.log("i avant décrémentation : " + i);

    //change the slider selector
    $current.removeClass("active");
    $prev.addClass("active");

    i--;

    console.log("i=" + i + "\ncurrent=" + $current.attr('src') + "\nprev=" + $prev.attr('src') + "\nfirstChild=" + $firstChild.attr('src') + "\nlastChild=" + $lastChild.attr('src') + "\nimgarray=" + imageArray[i][0] + "\nlength=" + imageArray.length);
  });



});
