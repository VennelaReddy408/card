
const card=document.querySelector("div");
card.innerHTML=`<img src="https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg" width="250px" height="300px"/>
<p>Banana</p>
<button>ExploreMore</button>`
card.style.border="2px solid black";
card.style.backgroundColor="lightgrey";
card.style.display="inline-block";
card.style.textAlign="center";
card.style.padding="10px"


const card1=document.getElementById("two");
card1.innerHTML=`<img src="https://www.collinsdictionary.com/images/full/apple_158989157.jpg" width="250px" height="300px"/>
 <p>Apple</p>
<button>ExploreMore</button>` 
 card1.style.border="2px solid black";
 card1.style.backgroundColor="lightgrey";
 card1.style.display="inline-block";
 card1.style.textAlign="center";
card1.style.padding="10px"
 
 



var newcard=document.createElement("div")
newcard.innerHTML=`<img src="https://5.imimg.com/data5/SELLER/Default/2023/9/344928632/OW/RQ/XC/25352890/yellow-mango.jpeg" width="250px" height="300px"/>
<p>Mango</p>
<button>ExploreMore</button>`
newcard.style.border="2px solid black";
newcard.style.backgroundColor="lightgrey";
newcard.style.display="inline-block";
newcard.style.textAlign="center";
newcard.style.padding="10px"
console.log(newcard)
document.body.appendChild(newcard)


var newcard1=document.createElement("div")
newcard1.innerHTML=`<img src="https://rukminim2.flixcart.com/image/850/1000/kt0enww0/plant-seed/h/h/n/25-dg-214-paudha-original-imag6fgvre6bmd5y.jpeg?q=90&crop=false" width="250px" height="300px"/>
<p>Grapes</p>
<button>ExploreMore</button>`
newcard1.style.border="2px solid black";
newcard1.style.backgroundColor="lightgrey";
newcard1.style.display="inline-block";
newcard1.style.textAlign="center";
newcard1.style.padding="10px"
console.log(newcard1)
document.body.appendChild(newcard1)

document.body.style.display="flex"
document.body.style.gap="20px"
