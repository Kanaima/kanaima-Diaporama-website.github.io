/*var var1 = "Site en construction... \n(Développeuse web débutante) \nIl sera amélioré au fur et à mesure."
alert(var1)*/

$(document).ready(function() {

  const imagesBank = [
    {url: "images/001.jpeg", alt: "bluecove", tags: ["nature","mer","ocean","plage","vacance","arbres","falaises"]},
    {url: "images/002.jpeg", alt: "girlsmile", tags: ["personnes","joie","bonheur","sourire","jeune"]},
    {url: "images/003.jpeg", alt: "mountainview", tags: ["personnes","solitude","panorama","montagnes","neige","soleil","aurore"]},
    {url: "images/004.jpeg", alt: "cuddlelions", tags: ["animaux","lions","felins","amour","mignon"]},
    {url: "images/005.jpeg", alt: "familydinner", tags: ["famille","enfants","personnes","nourriture","joie","sourire"]},
    {url: "images/006.jpeg", alt: "hiddenbeach", tags: ["nature","mer","plage","ocean","sable","arbres"]},
    {url: "images/007.jpeg", alt: "russianblue", tags: ["animaux","chat","bleu-russe","gris","mignon"]},
    {url: "images/008.jpeg", alt: "confettiparty", tags: ["fete","joie","musique","personnes","bonheur"]},
    {url: "images/009.jpeg", alt: "dadholdingchildren", tags: ["famille","enfants","personnes","plage","joie","soleil","crepuscule"]},
    {url: "images/010.jpeg", alt: "whitestaff", tags: ["animaux","canins","chien","staff","mignon"]},
    {url: "images/011.jpeg", alt: "grandmachildrenbeach", tags: ["famille","personnes","enfants","mer","plage","joie","sourire","baignade"]},
    {url: "images/012.jpeg", alt: "marriedcouple", tags: ["couple","personnes","amour","mariés","marriage","pluie","bonheur"]},
    {url: "images/013.jpeg", alt: "babies", tags: ["bebes","nourrissons","enfants","mignon","personnes"]},
    {url: "images/014.jpeg", alt: "turtle", tags: ["animaux","reptiles","mer","marin","tortue","ocean"]},
    {url: "images/015.jpeg", alt: "nightsky", tags: ["nature","ciel","nuit","etoiles","voie lactee","montagnes","neige"]},
    {url: "images/016.jpeg", alt: "bearcub", tags: ["animaux","ours","oursons","mignon","nature","foret"]},
    {url: "images/017.jpeg", alt: "oldmarriedcouplehands", tags: ["couple","personnes","amour","marriage","mariés","vieux"]},
    {url: "images/018.jpeg", alt: "couplelaughing", tags: ["couple","personnes","amour","joie","sourire","mixte","bonheur","jeunes"]},
    {url: "images/019.jpeg", alt: "momholdingbaby", tags: ["famille","mere","enfants","bebes","sourire","joie"]},
    {url: "images/020.jpeg", alt: "familybeach", tags: ["famille","personnes","plage","soleil","crepuscule","mer","bonheur","amour"]},
    {url: "images/021.jpeg", alt: "luminescentfish", tags: ["animaux","poissons","marin","ocean","phosphorescent"]},
    {url: "images/022.jpeg", alt: "specialfamily", tags: ["famille","personnes","bonheur","joie","sourire","enfants","handicap"]},
    {url: "images/023.jpeg", alt: "tiger", tags: ["animaux","tigre","felins","mignon"]},
    {url: "images/024.jpeg", alt: "bee", tags: ["insectes","nature","fleurs","abeille"]},
    {url: "images/025.jpeg", alt: "babyeatingcake", tags: ["personnes","bebes","nourriture","gateau","drole","mignon"]},
    {url: "images/026.jpeg", alt: "forest", tags: ["nature","foret","arbres","vegetation"]},
    {url: "images/027.jpeg", alt: "couple", tags: ["couple","personnes","amour","sourire","joie","jeunes"]},
    {url: "images/028.jpeg", alt: "kitten", tags: ["animaux","chaton","mignon","felins"]},
    {url: "images/029.jpeg", alt: "girlplayingsea", tags: ["nature","mer","plage","personnes","enfants","joie","sourire","jeu"]},
    {url: "images/030.jpeg", alt: "childrenplaying", tags: ["personnes","enfants","joie","sourire","jeu"]},
    {url: "images/031.jpeg", alt: "auroraborealis", tags: ["nature","ciel","aurore boreale","etoiles","neige","arbres","nuit"]},
  ];


  //PRELOADING IMAGES SLIDES
  for (var i = 0; i < imagesBank.length; i++) {
    if (i + 1 <= 3) {
      if (i + 1 == 1) {
        $('.preview').append("<img id=\""+ i + "\" class=\"slide show active\" src=\"" + imagesBank[i].url + "\" alt=" + imagesBank[i].alt + ">");
      }else {
        $('.preview').append("<img id=\""+ i + "\" class=\"slide show\" src=\"" + imagesBank[i].url + "\" alt=" + imagesBank[i].alt + ">");
      }
    }else {
      $('.preview').append("<img id=\""+ i + "\" class=\"slide d-none\" src=\"" + imagesBank[i].url + "\" alt=" + imagesBank[i].alt + ">");
    }
  }


  //CLICK ON NEXT
  $("#next").click(function() {
    var $current = $(".active");

    //check if the current has a next slide
    if ($current.next().html() !== undefined) {
      //check the position of the current element
      if ($current.prev().prev().html() !== undefined) {
        //case if the current element is the third
        var $first = $current.prev().prev();

        //hide the first element
        $first.removeClass("show");
        $first.addClass("d-none");

        //change the "active" element
        $current.removeClass("active");
        $current.next().removeClass("d-none");
        $current.next().addClass("show active");

        //set the new background-image
        var $newBgUrl = $(".active").attr("src");
        $("#backgroundImg").css("background-image", "url('" + $newBgUrl + "')");
      }else {
        //case if the current element is the first or the second
        //change the "active" element
        $current.removeClass("active")
        $current.next().addClass("active");

        //set the new background-image
        var $newBgUrl = $(".active").attr("src");
        $("#backgroundImg").css("background-image", "url('" + $newBgUrl + "')");
      }
    }
  });


//CLICK ON PREV
  $("#prev").click(function() {
    var $current = $(".active");

    //check if the current has a next slide
    if ($current.prev().html() !== undefined) {
      //check the position of the current element
      if ($current.next().next().html() !== undefined) {
        //case if the current element is the first
        var $third = $current.next().next();

        //hide the third element
        $third.removeClass("show");
        $third.addClass("d-none");

        //change the "active" element
        $current.removeClass("active");
        $current.prev().removeClass("d-none");
        $current.prev().addClass("show active");

        //set the new background-image
        var $newBgUrl = $(".active").attr("src");
        $("#backgroundImg").css("background-image", "url('" + $newBgUrl + "')");
      }else {
        //case if the current element is the second or the third
        //change the "active" element
        $current.removeClass("active")
        $current.prev().addClass("active");

        //set the new background-image
        var $newBgUrl = $(".active").attr("src");
        $("#backgroundImg").css("background-image", "url('" + $newBgUrl + "')");
      }
    }
  });


  //CLICK ON A SLIDE
  $(".slide").click(function() {
    //"active" the selected slide
    $(".active").removeClass("active");
    $(this).addClass("active");

    //set the new background-image
    var $newBgUrl = $(".active").attr("src");
    $("#backgroundImg").css("background-image", "url('" + $newBgUrl + "')");
  });


  //SEARCH FUNCTION
  $("#search").keyup(function() {
    var $filter = $("#search").val();

  });
});
