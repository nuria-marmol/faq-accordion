const articles = document.querySelectorAll("article");

/**
 * Concrete (and dynamic) article height according to the title, in case a long 
 * question is added
 */
function definingArticleHeight() {
    articles.forEach(function (article) {
        const title = article.querySelector(".faq__question-block");
        article.style.height = `${title.offsetHeight}px`;
    })
}

// Event
articles.forEach(function (article) {
    article.addEventListener("click", function() {
        const title = article.querySelector("h2");
        const arrow = article.querySelector("img");
        const answer = article.querySelector(".faq__answer");
        // Adding answer height to the article
        if (!answer.classList.contains("show")) { 
            title.style.fontSize = "1rem";
            title.style.fontWeight = "700";
            arrow.classList.add("turn");         
            answer.classList.add("show");
            article.style.height = `${article.offsetHeight + answer.offsetHeight}px`;
        // Article height back to previous style if the user wants to hide the answer
        } else {
            title.style.fontSize = ".9rem";
            title.style.fontWeight = "400";
            arrow.classList.remove("turn");
            answer.classList.remove("show");     
            article.style.height = `${article.offsetHeight - answer.offsetHeight}px`;                        
        }     
    });
})


definingArticleHeight();