let checkoutForm: HTMLFormElement = document.getElementById(
  "checkoutform"
) as HTMLFormElement;

checkoutForm.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
});
