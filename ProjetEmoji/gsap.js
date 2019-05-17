
function faceDownHumor()        // building the humoristic face
{
    var pathFace= new TimelineMax();
    pathFace.append (TweenMax.to(".faceDownHumor", 1, {y:369}));
    pathFace.append (TweenMax.to(".faceDownHumor", 2, {x:507}));
    pathFace.append (TweenMax.to(".eyesDownHumor", 1, {y:365}));
    pathFace.append (TweenMax.to(".faceDownHumor", 2, {x:1015}));
    pathFace.append (TweenMax.to(".eyesDownHumor", 2, {x:507}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownHumor", 1, {y:390}));
    pathFace.append (TweenMax.to(".faceDownHumor", 2, {x:1377}));
    pathFace.append (TweenMax.to(".eyesDownHumor", 2, {x:865}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownHumor", 2, {x:362}), "-=2");
    pathFace.append (TweenMax.to(".faceDownHumor", 2, {rotation:360, x:"+=200"}), "+=2");
    pathFace.append (TweenMax.to(".eyesDownHumor", 2, {rotation:360, transformOrigin:"50% 83%", x:"+=200"}),"-=2");
    pathFace.append (TweenMax.to(".mouthDownHumor", 2, {rotation:360, transformOrigin:"50% -10%", x:"+=200"}), "-=2");
}
function faceDownLove()        // building the "in love" face 
{
    var pathFace= new TimelineMax()
    pathFace.append (TweenMax.to(".faceDownLove", 1, {y:369}));
    pathFace.append (TweenMax.to(".faceDownLove", 2, {x:507}));
    pathFace.append (TweenMax.to(".eyesDownLove", 1, {y:375}));
    pathFace.append (TweenMax.to(".faceDownLove", 2, {x:1015}));
    pathFace.append (TweenMax.to(".eyesDownLove", 2, {x:503}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownLove", 1, {y:392}));
    pathFace.append (TweenMax.to(".faceDownLove", 2, {x:1327}));
    pathFace.append (TweenMax.to(".eyesDownLove", 2, {x:817}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownLove", 2, {x:307}), "-=2");
    pathFace.append (TweenMax.to(".faceDownLove", 2, {rotation:360, x:"+=200"}), "+=2");
    pathFace.append (TweenMax.to(".eyesDownLove", 2, {rotation:360, transformOrigin:"50% 87%", x:"+=200"}),"-=2");
    pathFace.append (TweenMax.to(".mouthDownLove", 2, {rotation:360, transformOrigin:"50% -10%", x:"+=200"}),"-=2");
}
function faceDownSad()        // building the sad face
{
    var pathFace= new TimelineMax();
    pathFace.append (TweenMax.to(".faceDownSad", 1, {y:369}));
    pathFace.append (TweenMax.to(".faceDownSad", 2, {x:507}));
    pathFace.append (TweenMax.to(".eyesDownSad", 1, {y:372}));
    pathFace.append (TweenMax.to(".faceDownSad", 2, {x:1015}));
    pathFace.append (TweenMax.to(".eyesDownSad", 2, {x:507}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownSad", 1, {y:392}));
    pathFace.append (TweenMax.to(".faceDownSad", 2, {x:1275}));
    pathFace.append (TweenMax.to(".eyesDownSad", 2, {x:765}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownSad", 2, {x:260}), "-=2");
    pathFace.append (TweenMax.to(".faceDownSad", 2, {rotation:360, x:"+=200"}), "+=2");
    pathFace.append (TweenMax.to(".eyesDownSad", 2, {rotation:360, transformOrigin:"50% 83%", x:"+=200"}),"-=2");
    pathFace.append (TweenMax.to(".mouthDownSad", 2, {rotation:360, transformOrigin:"50% -10%", x:"+=200"}),"-=2");
}
function faceDownHappy()        // building the happy face
{
    var pathFace= new TimelineMax();
    pathFace.append (TweenMax.to(".faceDownHappy", 1, {y:369}));
    pathFace.append (TweenMax.to(".faceDownHappy", 2, {x:507}));
    pathFace.append (TweenMax.to(".eyesDownHappy", 1, {y:369}));
    pathFace.append (TweenMax.to(".faceDownHappy", 2, {x:1015}));
    pathFace.append (TweenMax.to(".eyesDownHappy", 2, {x:507}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownHappy", 1, {y:392}));
    pathFace.append (TweenMax.to(".faceDownHappy", 2, {x:1222}));
    pathFace.append (TweenMax.to(".eyesDownHappy", 2, {x:712}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownHappy", 2, {x:207}), "-=2");
    pathFace.append (TweenMax.to(".faceDownHappy", 2, {rotation:360, x:"+=200"}), "+=2");
    pathFace.append (TweenMax.to(".eyesDownHappy", 2, {rotation:360, transformOrigin:"50% 83%", x:"+=200"}),"-=2");
    pathFace.append (TweenMax.to(".mouthDownHappy", 2, {rotation:360, transformOrigin:"50% -10%", x:"+=200"}),"-=2");
}
window.onload = function ()
{
    TweenMax.to(".face", 3, {y:70, delay:0});   // animate the small accessories drop
    TweenMax.to(".eyes", 3, {y:70, delay:0});
    TweenMax.to(".mouth", 3, {y:70, delay:0});

    document.getElementById('buttonHumor').onclick = faceDownHumor;     // trigger the building process
    document.getElementById('buttonInLove').onclick = faceDownLove;
    document.getElementById('buttonSad').onclick = faceDownSad;
    document.getElementById('buttonHappy').onclick = faceDownHappy;
}