var btn = document.getElementById('btn');

const randomQuote=[
    {img :'img/1.jpeg', qoute:'“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”',author: '― C.S. Lewis, The Four Loves'},
    {img :'img/2.jpeg', qoute:'“The man who does not read has no advantage over the man who cannot read.”',author: '― Mark Twain'},
    {img :'img/3.jpeg', qoute:'“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”',author: '― Albert Einstein'},
    {img :'img/4.jpg', qoute:'“Life is not about finding yourself. Life is about creating yourself.”',author: '― George Bernard Shaw'},
    {img :'img/5.jpeg', qoute:'“Success is not final, failure is not fatal: it is the courage to continue that counts.”',author: '― Winston S. Churchill'},
    {img :'img/6.png', qoute:'“Do one thing every day that scares you.”',author: '― Eleanor Roosevelt'},
]


var arrIndex=[];
function generateQuote(){
   
    var random_index = Math.floor(Math.random() * randomQuote.length);
    while(arrIndex[0]==random_index){
        random_index = Math.floor(Math.random() * randomQuote.length);
    }
    document.getElementById('quote').innerHTML=`
     <div  class= "image  d-flex overflow-hidden col-12 rounded-circle mt-3 " style="width: 120px; height:120px;">
       <img id="imageOutput" src="${randomQuote[random_index].img}"  class=" w-100">
     </div>
     <div class="text mt-3">
      <p id="qouteOutput">${randomQuote[random_index].qoute}</p>
      <p id="authorOutput">${randomQuote[random_index].author}</p>
     </div>`
     arrIndex.pop();
     arrIndex[0]=random_index;
      
}
// var prev_Random =generateIndex(); 


btn.onclick=function(){
    generateQuote();
}
