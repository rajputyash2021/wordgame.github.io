// Generate Random Number

const random_Word_Array = ["game","shop","speed","profile","profession","fame","laptop"];
const random_Word = Math.floor(Math.random() * random_Word_Array.length);
const the_word = random_Word_Array[random_Word];
console.log(random_Word_Array[random_Word]);
const fallingNumber = document.getElementById('main-random-number-falling');
fallingNumber.innerHTML = the_word;

// function mtop({

// })


  $(document).ready(function(){

    
    $('#main-random-number-falling').animate({
     marginTop:"65vh",
     fontSize:"25px"
     },6000,function(){
       
      let input_box = document.getElementById("input-box");
      input_box.defaultValue="";
      if(input_box.value == the_word  ){
        document.getElementById('right-word').innerHTML =  the_word;
        console.log('write');
        input_box.value="";
      
      }
      else if(input_box.value == input_box.defaultValue){
        document.getElementById('wrong-word').innerHTML ="You have not entered any number in Input Field";
      }
      else{
        document.getElementById('wrong-word').innerHTML =input_box.value;
        console.log('wrong');
        input_box.value="";
        
      }
     


     });

    
});

