let submitbutton: HTMLButtonElement = document.getElementById(
  "submitbutton"
) as HTMLButtonElement;

let form: HTMLFormElement = document.getElementById("form") as HTMLFormElement;

// (document.getElementById("form") as HTMLFormElement).addEventListener(
//   "submit",
//   (e: SubmitEvent) => {
//     e.preventDefault();

//     console.log("Wohoo!");
//   }
// );

form.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault();
  console.log("hej");
});

// submitbutton.addEventListener("submit", (e: SubmitEvent) => {
//   e.preventDefault();
// });

// $("#email_form").submit(function(event){
//     var isValid = true;

//     // do all your validation here
//     // potentially if one of the fields is empty
//     // isValid will be set to false

//     if (!isValid) {
//         event.preventDefault();
//     }
// });
