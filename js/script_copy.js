
const btn = document.getElementById("buttonCita");

document
  .getElementById("sessionForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_5gzzhaz";
    const templateID = "template_oma0l0g";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        Swal.fire({
          title: "Agendada",
          text: "Tu cita se agendo correctamente",
          icon: "success",
        });
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

    const serviceID = "service_5gzzhaz";
    const templateID = "template_31bgg1h";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        Swal.fire({
          title: "Enviado",
          text: "Tu mensaje se envio correctamente",
          icon: "success",
        });
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const content = document.querySelector(".content");
  const menuItems = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content > .section");
  
  // Para el menú de productos
  const productosLink = document.getElementById("productosLink");
  const dropdownMenuProductos = productosLink.nextElementSibling;
  
  // Para el menú de servicios
  const serviciosLink = document.getElementById("serviciosLink");
  const dropdownMenuServicios = serviciosLink.nextElementSibling;
  
  const navbarToggler = document.querySelector(".navbar-toggler");
  
  navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("show");
    content.classList.toggle("full");
  });
  
  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
  
      // Resalta el menú activo
      menuItems.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
  
      // Mostrar la sección correspondiente
      const sectionId = item.getAttribute("data-section");
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === sectionId) {
          section.classList.add("active");
        }
      });
  
      const newColor = getComputedStyle(
        document.querySelector(`#${sectionId}`)
      ).getPropertyValue("--nav-color");
      navbar.style.backgroundColor = newColor;
  
      if (window.innerWidth <= 768) {
        navbar.classList.remove("show");
        content.classList.remove("full");
      }
    });
  });
  
  // Toggle del menú de productos
  productosLink.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenuProductos.classList.toggle("show");
  });
  
  // Toggle del menú de servicios
  serviciosLink.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownMenuServicios.classList.toggle("show");
  });
  

  // Crear el contenedor del popup
  const popupOverlay = document.createElement("div");
  popupOverlay.style.position = "fixed";
  popupOverlay.style.top = "0";
  popupOverlay.style.left = "0";
  popupOverlay.style.width = "100%";
  popupOverlay.style.height = "100%";
  popupOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  popupOverlay.style.display = "flex";
  popupOverlay.style.alignItems = "center";
  popupOverlay.style.justifyContent = "center";
  popupOverlay.style.zIndex = "1100";

  const popup = document.createElement("div");
  popup.style.backgroundColor = "#2c3e50";
  popup.style.color = "#fff";
  popup.style.padding = "20px";
  popup.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
  popup.style.textAlign = "center";
  popup.style.zIndex = "1200";

  // Agregar el mensaje al popup
  const message = document.createElement("p");
  message.textContent = "ADQUIERE YA TU HEALY";
  message.style.marginBottom = "10px";

  // Crear el contenedor del ícono y el número
  const contactContainer = document.createElement("div");
  contactContainer.style.display = "flex";
  contactContainer.style.alignItems = "center";
  contactContainer.style.justifyContent = "center";

  // Agregar el ícono de WhatsApp
  const whatsappIcon = document.createElement("i");
  whatsappIcon.className = "fab fa-whatsapp";
  whatsappIcon.style.color = "#25D366";
  whatsappIcon.style.fontSize = "24px";
  whatsappIcon.style.marginRight = "10px";

  // Agregar el número de teléfono
  const phoneNumber = document.createElement("span");
  //phoneNumber.textContent = "5510103525";
  phoneNumber.style.fontSize = "20px";
  phoneNumber.style.fontWeight = "bold";

  contactContainer.appendChild(whatsappIcon);
  contactContainer.appendChild(phoneNumber);

  popup.appendChild(message);
  popup.appendChild(contactContainer);

  const inicioLink = document.getElementById("inicioLink");

  // Función para mostrar el modal de suscripción
  function mostrarModalSuscripcion() {
    Swal.fire({
      title: '¡Suscríbete para recibir un descuento',
      text: 'Recibe las últimas novedades y ofertas exclusivas directamente en tu correo electrónico.',
      input: 'email',
      inputPlaceholder: 'Introduce tu correo electrónico',
      showCancelButton: true,
      confirmButtonText: 'Suscribirme',
      cancelButtonText: 'Cancelar',
      backdrop: true, // Desenfocar el fondo
      allowOutsideClick: false, // Evita que se cierre al hacer clic fuera
      customClass: {
        popup: 'blurred-background' // Clase personalizada para desenfocar
      },
      preConfirm: (email) => {
        if (!email) {
          Swal.showValidationMessage('Por favor, introduce un correo electrónico válido.');
        } else {
          return email;
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const email = result.value;
        Swal.fire({
          icon: 'success',
          title: '¡Gracias por suscribirte!',
          text: `Hemos registrado tu correo: ${email}`,
        });
        // Aquí puedes agregar lógica para enviar el correo electrónico a un servidor
      }
    });
  }

  // Mostrar el modal al cargar la página
  mostrarModalSuscripcion();

  // Mostrar el modal al hacer clic en el enlace de "Inicio"
  inicioLink.addEventListener("click", function (e) {
    e.preventDefault(); // Evita que el enlace navegue
    mostrarModalSuscripcion();
  });
});

// Restringir la selección de fecha al día actual en adelante
const dateInput = document.getElementById("sessionDate");
const today = new Date().toISOString().split("T")[0];
dateInput.setAttribute("min", today);

// Restringir la selección de hora entre las 10:00 AM y las 5:00 PM
const timeInput = document.getElementById("sessionTime");
timeInput.setAttribute("min", "10:00");
timeInput.setAttribute("max", "17:00");

// Validar la hora al enviar el formulario
const form = document.getElementById("sessionForm");
form.addEventListener("submit", function (event) {
  const sessionTimeValue = timeInput.value;
  const [hours, minutes] = sessionTimeValue.split(":").map(Number);

  if (hours < 10 || (hours >= 17 && minutes > 0)) {
    event.preventDefault(); // Evita el envío del formulario
    alert(
      "Por favor, selecciona una hora entre las 10:00 AM y las 5:00 PM."
    );
  }
});