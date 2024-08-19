const btn = document.getElementById("buttonCita");

      document
        .getElementById("sessionForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          btn.value = "Sending...";

          const serviceID = "default_service";
          const templateID = "template_yp6ooze";

          emailjs.sendForm(serviceID, templateID, this).then(
            () => {
              btn.value = "Send Email";
              alert("Sent!");
            },
            (err) => {
              btn.value = "Send Email";
              alert(JSON.stringify(err));
            }
          );
        });

      const btn2 = document.getElementById("buttonMensaje");

      document
        .getElementById("contactForm")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          btn.value = "Sending...";

          const serviceID = "default_service";
          const templateID = "template_8g80s78";

          emailjs.sendForm(serviceID, templateID, this).then(
            () => {
              btn.value = "Send Email";
              alert("Sent!");
            },
            (err) => {
              btn.value = "Send Email";
              alert(JSON.stringify(err));
            }
          );
        });
