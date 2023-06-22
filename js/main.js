const articles = document.querySelectorAll("article");

/**
 * Concrete (and dynamic) article height according to the title group
 */
function definingArticleHeight() {
    articles.forEach(function (article) {
        const questionBlock = article.querySelector(".faq__question-block");
        article.style.height = `${questionBlock.offsetHeight}px`;
    })
}

// Event
articles.forEach(function (article) {
    article.addEventListener("click", function() {
        const title = article.querySelector("h2");
        const arrow = article.querySelector("img");
        const answer = article.querySelector(".faq__answer");
        /* Adding answer height to the article and other styles to the arrow and title */
        if (!answer.classList.contains("show")) {            
            title.style.fontWeight = "700";
            arrow.classList.add("turn");     
            answer.classList.add("show");
            article.style.height = `${article.offsetHeight + answer.offsetHeight}px`;
        /* Article height and other styles back to previous state if the user wants to hide the answer */
        } else {            
            title.style.fontWeight = "400";
            arrow.classList.remove("turn");
            answer.classList.remove("show");     
            article.style.height = `${article.offsetHeight - answer.offsetHeight}px`;                      
        }  
    });
})

document.addEventListener("DOMContentLoaded", definingArticleHeight);