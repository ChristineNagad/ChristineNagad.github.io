  // fichier associé à ChrNagad.css

  //--------------------------- références professionnelles
  M.AutoInit();
  document.addEventListener('DOMContentLoaded', function() {
    var options;
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

    //--------------------------- boutons de bas de page
  function scroll1Bas(){
  var elmnt = document.getElementById("hautPage2");
  elmnt.scrollIntoView();
  }
  function scroll2Haut(){
    var elmnt = document.getElementById("hautPage1");
    elmnt.scrollIntoView();
    }
  function scroll2Bas(){
    var elmnt = document.getElementById("hautPage3");
    elmnt.scrollIntoView();
    }
  function scroll3Haut(){
    var elmnt = document.getElementById("hautPage2");
    elmnt.scrollIntoView();
    }
  function scroll3Bas(){
    var elmnt = document.getElementById("hautPage4");
    elmnt.scrollIntoView();
    }
  function scroll4Haut(){
    var elmnt = document.getElementById("hautPage3");
    elmnt.scrollIntoView();
    }   