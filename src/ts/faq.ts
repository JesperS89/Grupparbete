import { faqList } from "./models/qa";
import { burger, burgerFunction } from "./services/burger";
import { closeButton, cartButton, toggleCart } from "./services/cart";

cartButton.addEventListener("click", toggleCart);
closeButton.addEventListener("click", toggleCart);
burger.addEventListener("click", burgerFunction);

let faq = document.getElementById("faq");
function printFAQ(): void {
  for (let i = 0; i < faqList.length; i++) {
    let faqContainer: HTMLDivElement = document.createElement("div");
    let questionLine: HTMLParagraphElement = document.createElement("p");
    let answerLine: HTMLParagraphElement = document.createElement("p");

    faqContainer.className = "faq__container";
    questionLine.className = "faq__questionLine";
    answerLine.className = "faq__answerLine";

    questionLine.innerHTML =
      faqList[i].question + "<i class='fa-solid fa-angle-down'></i>";
    answerLine.innerHTML = faqList[i].answer;

    faq?.appendChild(faqContainer);
    faqContainer.appendChild(questionLine);
    faqContainer.appendChild(answerLine);

    questionLine.addEventListener("click", () => {
      answerLine.classList.toggle("visible");
      if (answerLine.className === "faq__answerLine visible") {
        questionLine.innerHTML =
          faqList[i].question + "<i class='fa-solid fa-angle-up'></i>";
      } else {
        questionLine.innerHTML =
          faqList[i].question + "<i class='fa-solid fa-angle-down'></i>";
      }
    });
  }
}

printFAQ();
