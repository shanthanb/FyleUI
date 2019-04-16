var quantity;
    function myfun(q)
    {
        var p1 = 0.5, p2 = 1;
        quantity = q;
        var lollipop_cost = p1 * q * 12;
        var ice_cost = p2 * q * 12;
        var savings = ice_cost - lollipop_cost;
        document.getElementById("lolli").innerHTML = '$' + lollipop_cost;
        document.getElementById("ice").innerHTML = '$' + ice_cost;
        document.getElementById("savings").innerHTML = '$' + savings;
        document.getElementById("sm").innerHTML = 'per year';

        if(document.getElementById("checkme").checked)
        {
            check();
        }	
    
    }

    function check()
    {
            var p1 = 1, p2 = 2;
            var lollipop_cost = p1 * quantity;
            var ice_cost = p2 * quantity;
            var savings = ice_cost - lollipop_cost;
            document.getElementById("lolli").innerHTML = '$' + lollipop_cost;
            document.getElementById("ice").innerHTML = '$' + ice_cost;
            document.getElementById("savings").innerHTML = '$' + savings;
            document.getElementById("sm").innerHTML = 'per month';
    }
            
var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) 
    {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) 
    {
        showSlides(slideIndex = n);
    }

    function showSlides(n) 
    {
        var i;
        var slides = document.getElementsByClassName("item");
        var dots = document.getElementsByClassName("myCarousel");
        if (n > slides.length) 
        {
            slideIndex = 1
        }    
        if (n < 1) 
        {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) 
        {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) 
        {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }
