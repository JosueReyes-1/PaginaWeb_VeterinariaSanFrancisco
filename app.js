

  
window.addEventListener('scroll',function(){
    if(screen.width>800){
      let header=document.querySelector('nav');
      let windowPosition=window.scrollY>0;
      header.classList.toggle('scrolling-active',windowPosition);
    }  
    
})

$(document).mousemove(function(event){
  var xPos = (event.clientX/$(window).width())-0.5,
      yPos = (event.clientY/$(window).height())-0.5,
      box = $('.div-movement'),
      coord = $('.coordinates');
 
 TweenLite.to(box, 0.6, {
   rotationY: 7 * xPos, 
   rotationX: 7 * yPos,
   ease: Power1.easeOut,
   transformPerspective: 1000,
   transformOrigin: 'center'
 });
});

//api google
let marker;
function iniciarMap(){
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var coord = {lat:19.438350 ,lng:  -99.166684};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 15,
    center: coord,
    mapId: "9a499f0c2e56ef76",
    disableDefaultUI:true
  });
  marker = new google.maps.Marker({
    position: coord,
    map: map,
    animation: google.maps.Animation.DROP,
    icon: {
      url:"img/veterinary.png",
      scaledSize: new google.maps.Size(50,50)
    }
  });
  marker.addListener("click", toggleBounce);
}
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}



 //animation of us
 var tl=gsap.timeline({
    scrollTrigger: {
        trigger: '.header',
        // markers: true,
        start: 'center',
        end:'+=900',
    }
  });
  tl.from('.arriba-about',{scaleX: 0, transformOrigin: "left" ,duration:.8,});
  tl.to('.arriba-about',{scaleX: 0, transformOrigin: "right", duration:.8,});
  tl.from('.img-about',{opacity:0, duration:0.8},'-=.8',"reveal")
  
  tl.from('.buttom1',{ scaleX: 0, transformOrigin: "left" , duration:.8,},'-=1.6');
  tl.to('.buttom1',{ scaleX: 0,  transformOrigin: "right", duration:.8,},'-=.8');
  tl.from('.buttom-about',{opacity:0,duration:1},'-=..8',"reveal")

  
  //animation of veterinary
  var tl=gsap.timeline({
    scrollTrigger: {
        trigger: '.about-us',
        // markers: true,
        start: 'center',
        end:'+=900',
        
    }
  });
  tl.from('.arriba-veterinary',{scaleX: 0, transformOrigin: "left" ,duration:.8,});
  tl.to('.arriba-veterinary',{scaleX: 0, transformOrigin: "right", duration:.8,});
  tl.from('.img-veterinary',{opacity:0},'-=.8',"reveal")
  
  
  
  //animation of service
   var tl=gsap.timeline({
    scrollTrigger: {
        trigger: '.veterinary-team',
        // markers: true,
        start: 'center',
        end:'+=900'
    }
  });
  tl.from('.arriba',{scaleX: 0, transformOrigin: "left" ,duration:.8,});
  tl.to('.arriba',{scaleX: 0, transformOrigin: "right", duration:.8,});
  tl.from('.img-service',{opacity:0, duration:1},'-=.8',"reveal")
  
  tl.from('.buttom2',{ scaleX: 0, transformOrigin: "left" , duration:.8,},'-=1.6');
  tl.to('.buttom2',{ scaleX: 0,  transformOrigin: "right", duration:.8,},'-=.8');
  tl.from('.buttom-service',{opacity:0,duration:1},'-=.8',"reveal")

  // animation of gallery
  var tl=gsap.timeline({
    scrollTrigger: {
        trigger: '.service',
        // markers: true,
        start: 'center',
        end:'+=900'
    }
  });
  tl.from('.gallery1',{opacity:0,x:-300,duration:.8});
  tl.from('.gallery2',{opacity:0,x:-300,duration:.8},'-=.8');

  var tl=gsap.timeline({
    scrollTrigger: {
        trigger: '.gallery2',
        // markers: true,
        start: 'center -=100',
        end:'+=900'
    }
  });
  tl.from('.buttom3',{ scaleX: 0, transformOrigin: "left" , duration:.8});
  tl.to('.buttom3',{ scaleX: 0,  transformOrigin: "right", duration:.8});
  tl.from('.buttom-social',{opacity:0,duration:1},'-=.8',"reveal")