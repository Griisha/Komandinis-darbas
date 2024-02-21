function formSubmit() {
  document.querySelector(".formForMessages > form").addEventListener("submit", (e) => {
    e.preventDefault();
    const par = document.createElement("p");
    const parText = document.createTextNode("Thank you! We got your message and gonna send you email in 72 h.");
    par.append(parText);
    document.querySelector(".formForMessages").append(par);
    e.target.elements.email.value = "";
    e.target.elements.message.value = "";

  });

}

formSubmit();