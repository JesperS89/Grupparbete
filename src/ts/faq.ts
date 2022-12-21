import { faqList } from "./models/qa";

let faq = document.getElementById("faq");
function printFAQ(): void {

    for (let i = 0; i < faqList.length; i++) {
        let faqContainer:HTMLDivElement = document.createElement("div");
        let questionLine: HTMLParagraphElement = document.createElement("p");
        let answerLine: HTMLParagraphElement = document.createElement("p");
  
        faqContainer.className = "faq__container";
        questionLine.className = "faq__questionLine";
        answerLine.className = "faq__answerLine";

        questionLine.innerHTML = faqList[i].question + "<i class='fa-solid fa-angle-down'></i>";
        answerLine.innerHTML = faqList[i].answer;
        
        faq?.appendChild(faqContainer);
        faqContainer.appendChild(questionLine);
        faqContainer.appendChild(answerLine);

        questionLine.addEventListener("click", () => {
            answerLine.classList.toggle("visible");
        })
        };
}

printFAQ();