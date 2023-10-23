const starContainer = document.getElementById("star-container");
const stars = document.querySelectorAll(".star");
const rating = document.getElementById("count");
let filled=0;


    
    starContainer.addEventListener('mouseover', function(e){
      const starIndex = e.target.dataset.index;
      toggleStar(starIndex); 
    });

    starContainer.addEventListener('click', function(e){
        const ratingselected = e.target.dataset.index;
        toggleStar(ratingselected);  
        rating.textContent=ratingselected;
        filled=ratingselected;
      });

    starContainer.addEventListener('mouseleave', function(e){
        toggleStar(filled); 
     });

    function toggleStar(currVal){
        stars.forEach((s,i)=>{
            s.classList.toggle("star-coloured",i<currVal);
        })
     }
