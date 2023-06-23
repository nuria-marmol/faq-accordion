const articles = document.querySelectorAll("article");

// Event
articles.forEach(function (article) {
    article.addEventListener("click", function() {
        const questionBlock = article.querySelector(".faq__question-block");
        const title = article.querySelector("h2");
        const arrow = article.querySelector("img");
        const answer = article.querySelector(".faq__answer");
        /* Adding answer height to the article and other styles to the arrow and title */
        if (!answer.classList.contains("show")) {
            // We need a concrete size as an initial state
            article.style.height = `${questionBlock.offsetHeight}px`;        
            title.style.fontWeight = "700";
            arrow.classList.add("turn"); 
            answer.classList.add("show");
            // 12 for some space at the bottom
            article.style.height = `${questionBlock.offsetHeight + answer.offsetHeight + 12}px`
        /* Article height and other styles back to previous state if the user wants to hide the answer */
        } else {            
            title.style.fontWeight = "400";
            arrow.classList.remove("turn");
            answer.classList.remove("show");
            article.style.height = `${questionBlock.offsetHeight}px`;                      
        }  
    });
})