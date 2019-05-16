
function faceDownHumor()        // building the humoristic face
{
    var pathFace= new TimelineMax();
    pathFace.append (TweenMax.to(".faceDownHumor", 1, {y:738}));
    pathFace.append (TweenMax.to(".faceDownHumor", 2, {x:1015}));
    pathFace.append (TweenMax.to(".eyesDownHumor", 1, {y:730}));
    pathFace.append (TweenMax.to(".faceDownHumor", 2, {x:2030}));
    pathFace.append (TweenMax.to(".eyesDownHumor", 2, {x:1015}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownHumor", 1, {y:780}));
    pathFace.append (TweenMax.to(".faceDownHumor", 2, {x:2755}));
    pathFace.append (TweenMax.to(".eyesDownHumor", 2, {x:1735}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownHumor", 2, {x:725}), "-=2");
    pathFace.append (TweenMax.to(".faceDownHumor", 2, {rotation:360, x:"+=400"}), "+=2");
    pathFace.append (TweenMax.to(".eyesDownHumor", 2, {rotation:360, transformOrigin:"50% 83%", x:"+=400"}),"-=2");
    pathFace.append (TweenMax.to(".mouthDownHumor", 2, {rotation:360, transformOrigin:"50% -10%", x:"+=400"}), "-=2");
}
function faceDownLove()        // building the "in love" face 
{
    var pathFace= new TimelineMax()
    pathFace.append (TweenMax.to(".faceDownLove", 1, {y:738}));
    pathFace.append (TweenMax.to(".faceDownLove", 2, {x:1015}));
    pathFace.append (TweenMax.to(".eyesDownLove", 1, {y:753}));
    pathFace.append (TweenMax.to(".faceDownLove", 2, {x:2030}));
    pathFace.append (TweenMax.to(".eyesDownLove", 2, {x:1015}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownLove", 1, {y:790}));
    pathFace.append (TweenMax.to(".faceDownLove", 2, {x:2655}));
    pathFace.append (TweenMax.to(".eyesDownLove", 2, {x:1635}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownLove", 2, {x:615}), "-=2");
    pathFace.append (TweenMax.to(".faceDownLove", 2, {rotation:360, x:"+=400"}), "+=2");
    pathFace.append (TweenMax.to(".eyesDownLove", 2, {rotation:360, transformOrigin:"50% 87%", x:"+=400"}),"-=2");
    pathFace.append (TweenMax.to(".mouthDownLove", 2, {rotation:360, transformOrigin:"50% -10%", x:"+=400"}),"-=2");
}
function faceDownSad()        // building the sad face
{
    var pathFace= new TimelineMax();
    pathFace.append (TweenMax.to(".faceDownSad", 1, {y:738}));
    pathFace.append (TweenMax.to(".faceDownSad", 2, {x:1015}));
    pathFace.append (TweenMax.to(".eyesDownSad", 1, {y:753}));
    pathFace.append (TweenMax.to(".faceDownSad", 2, {x:2030}));
    pathFace.append (TweenMax.to(".eyesDownSad", 2, {x:1015}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownSad", 1, {y:785}));
    pathFace.append (TweenMax.to(".faceDownSad", 2, {x:2550}));
    pathFace.append (TweenMax.to(".eyesDownSad", 2, {x:1530}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownSad", 2, {x:520}), "-=2");
    pathFace.append (TweenMax.to(".faceDownSad", 2, {rotation:360, x:"+=400"}), "+=2");
    pathFace.append (TweenMax.to(".eyesDownSad", 2, {rotation:360, transformOrigin:"50% 83%", x:"+=400"}),"-=2");
    pathFace.append (TweenMax.to(".mouthDownSad", 2, {rotation:360, transformOrigin:"50% -10%", x:"+=400"}),"-=2");
}
function faceDownHappy()        // building the happy face
{
    var pathFace= new TimelineMax();
    pathFace.append (TweenMax.to(".faceDownHappy", 1, {y:738}));
    pathFace.append (TweenMax.to(".faceDownHappy", 2, {x:1015}));
    pathFace.append (TweenMax.to(".eyesDownHappy", 1, {y:738}));
    pathFace.append (TweenMax.to(".faceDownHappy", 2, {x:2030}));
    pathFace.append (TweenMax.to(".eyesDownHappy", 2, {x:1015}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownHappy", 1, {y:785}));
    pathFace.append (TweenMax.to(".faceDownHappy", 2, {x:2445}));
    pathFace.append (TweenMax.to(".eyesDownHappy", 2, {x:1425}), "-=2");
    pathFace.append (TweenMax.to(".mouthDownHappy", 2, {x:415}), "-=2");
    pathFace.append (TweenMax.to(".faceDownHappy", 2, {rotation:360, x:"+=400"}), "+=2");
    pathFace.append (TweenMax.to(".eyesDownHappy", 2, {rotation:360, transformOrigin:"50% 83%", x:"+=400"}),"-=2");
    pathFace.append (TweenMax.to(".mouthDownHappy", 2, {rotation:360, transformOrigin:"50% -10%", x:"+=400"}),"-=2");
}
window.onload = function ()
{
    TweenMax.to(".face", 3, {y:70, delay:0});   // animate the small accessories drop
    TweenMax.to(".eyes", 3, {y:70, delay:2});
    TweenMax.to(".mouth", 3, {y:70, delay:4});

    document.getElementById('buttonHumor').onclick = faceDownHumor;     // trigger the building process
    document.getElementById('buttonInLove').onclick = faceDownLove;
    document.getElementById('buttonSad').onclick = faceDownSad;
    document.getElementById('buttonHappy').onclick = faceDownHappy;
}