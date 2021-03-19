/*var var1 = "Site en construction... \n(Développeuse web débutante) \nIl sera amélioré au fur et à mesure."
alert(var1)*/

$(document).ready(function() {

  var imageArray = [
    ["images/001.jpeg", "bluelake"],
    ["images/002.jpeg", "girlsmile"],
    ["images/003.jpeg", "mountainview"],
    ["images/004.jpeg", "cuddlelions"],
    ["images/005.jpeg", "familydinner"],
    ["images/006.jpeg", "hiddenbeach"],
    ["images/007.jpeg", "russianblue"],
    ["images/008.jpeg", "confettiparty"],
    ["images/009.jpeg", "dadholdingchildren"],
    ["images/010.jpeg", "whitestaff"],
    ["images/011.jpeg", "grandmachildrenbeach"],
    ["images/012.jpeg", "marriedcouple"],
    ["images/013.jpeg", "babies"],
    ["images/014.jpeg", "turtle"],
    ["images/015.jpeg", "nightsky"],
    ["images/016.jpeg", "bearcub"],
    ["images/017.jpeg", "oldmarriedcouplehands"],
    ["images/018.jpeg", "couplelaughing"],
    ["images/019.jpeg", "momholdingbaby"],
    ["images/020.jpeg", "familybeach"],
    ["images/021.jpeg", "luminescentfish"],
    ["images/022.jpeg", "specialfamily"],
    ["images/023.jpeg", "tiger"],
    ["images/024.jpeg", "bee"],
    ["images/025.jpeg", "babyeatingcake"],
    ["images/026.jpeg", "forest"],
    ["images/027.jpeg", "couple"],
    ["images/028.jpeg", "kitten"],
    ["images/029.jpeg", "girlplayingsea"],
    ["images/030.jpeg", "childrenplaying"],
    ["images/031.jpeg", "auroraborealis"],
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
