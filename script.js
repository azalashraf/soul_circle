function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  alert(`Thank you, ${name}! We’ve received your message and will reach out to you at ${email}.`);
  document.querySelector("form").reset();
}
