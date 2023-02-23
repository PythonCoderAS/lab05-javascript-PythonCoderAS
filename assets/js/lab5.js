/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function isEmpty(formObj, fieldName) {
   return formObj[fieldName].value == "";
}

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements

   /** @type {string[]} */
   const errors = [];
   let focused = false

   if (isEmpty(formObj, "firstName")) {
      errors.push("A first name is required.");
      if (!focused) {
         formObj.firstName.focus();
         focused = true;
      }
   }
   if (isEmpty(formObj, "lastName")) {
      errors.push("A last name is required.");
      if (!focused) {
         formObj.lastName.focus();
         focused = true;
      }
   }
   if (isEmpty(formObj, "title")) {
      errors.push("A title is required.");
      if (!focused) {
         formObj.title.focus();
         focused = true;
      }
   }
   if (isEmpty(formObj, "org")) {
      errors.push("An organization is required.");
      if (!focused) {
         formObj.org.focus();
         focused = true;
      }
   }
   if (isEmpty(formObj, "pseudonym")) {
      errors.push("A nickname is required.");
      if (!focused) {
         formObj.pseudonym.focus();
         focused = true;
      }
   }
   if (isEmpty(formObj, "comments") || formObj.comments.value == "Please enter your comments") {
      errors.push("A comment is required.");
      if (!focused) {
         formObj.comments.focus();
         focused = true;
      }
   }
   if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
   }
   alert("Success!")
   return true;
}

function clearText(textareaElement){
   if (textareaElement.value == "Please enter your comments") {
      textareaElement.value = "";
   }
}

function restoreText(textareaElement){
   if (textareaElement.value == "") {
      textareaElement.value = "Please enter your comments";
   }
}

function showNames(){
   const form = document.querySelector("form");
   alert(`${form.firstName.value} ${form.lastName.value} is ${form.pseudonym.value}`)
}

window.addEventListener("load", function(){
   document.querySelector("form").querySelector("input, textarea").focus();
})