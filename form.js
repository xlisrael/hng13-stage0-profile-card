(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const successMsg = document.getElementById("test-contact-success");

  function showError(fieldId, msg) {
    const el = document.getElementById(`test-contact-error-${fieldId}`);
    if (el) el.textContent = msg;
  }
  function clearError(fieldId) {
    const el = document.getElementById(`test-contact-error-${fieldId}`);
    if (el) el.textContent = "";
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.style.display = "none";

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    let valid = true;

    if (!name) { 
      showError("name", "Full name is required"); 
      valid = false; 
    } else clearError("name");
    if (!email) { 
      showError("email", "Email is required"); 
      valid = false; 
    }
    else if (!validateEmail(email)) { 
      showError("email", "Enter a valid email address"); 
      valid = false; 
    } else clearError("email");

    if (!subject) { 
      showError("subject", "Subject is required"); 
      valid = false; 
    } else clearError("subject");

    if (!message) { 
      showError("message", "Message is required"); 
      valid = false; 
    }
    else if (message.length < 10) { 
      showError("message", "Message must be at least 10 characters"); 
      valid = false; 
    } else clearError("message");

    if (valid) {
      
      form.reset();
      successMsg.style.display = "block";
      
      successMsg.setAttribute("tabindex", "-1");
      successMsg.focus();
    }
  });


  form.addEventListener("blur", function (e) {
    const target = e.target;
    if (!target) return;
    const name = target.getAttribute("name");
    if (!name) return;

    const val = target.value.trim();
    if (name === "email") {
      if (!val) showError("email", "Email is required");
      else if (!validateEmail(val)) showError("email", "Enter a valid email address");
      else clearError("email");
    } else if (name === "message") {
      if (!val) showError("message", "Message is required");
      else if (val.length < 10) showError("message", "Message must be at least 10 characters");
      else clearError("message");
    } else {
      if (!val) showError(name, `${target.previousElementSibling ? target.previousElementSibling.textContent : 'This field'} is required`);
      else clearError(name);
    }
  }, true);
})();
