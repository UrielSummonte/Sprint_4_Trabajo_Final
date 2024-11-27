document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("superhero-form");

  form.addEventListener("submit", async (event) => {
    // Evita que el formulario se envíe de forma tradicional
    event.preventDefault();

    // Recoge los datos del formulario
    const formData = new FormData(form);
    // Convierte el form a un objeto literal js
    const data = Object.fromEntries(formData.entries());

    // Ajusta los campos que son listas separadas por comas y los convierte en arrays
    if (data.poderes) {
      data.poderes = data.poderes.split(",").map((poder) => poder.trim());
    }
    if (data.aliados) {
      data.aliados = data.aliados.split(",").map((aliado) => aliado.trim());
    }
    if (data.enemigos) {
      data.enemigos = data.enemigos.split(",").map((enemigo) => enemigo.trim());
    }

    try {
      // Realiza la solicitud POST al backend
      const response = await fetch("/api/heroes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();

        // Limpia el formulario después de enviar
        form.reset();

        // Mostrar alerta de éxito
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Superhéroe creado con éxito",
          showConfirmButton: false,
          timer: 2200,
        });

        // Redirige a la página de listado de superhéroes
        setTimeout(() => {
          window.location.href = "/api/heroes";
        }, 2200);
      } else {
        const errorData = await response.json();
        console.error("Errores del servidor:", errorData.errors);
        console.log("Hubo un problema al agregar el superhéroe.");
        // Mostrar alerta de problema
        Swal.fire({
          title: "Hubo un problema al agregar el superhéroe",
          text: "Verifique que los campos cumplen las condiciones",
          icon: "warning"
        });
      }
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      alert("No se pudo conectar con el servidor.");
    }
  });

   // Captura el evento de clic en el botón de cancelar
   document.getElementById("cancel-btn").addEventListener("click", function (e) {
    e.preventDefault(); 

    // Mostrar SweetAlert de confirmación
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Los cambios no guardados se perderán.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sí, cancelar",
    }).then((result) => {
      // Si el usuario confirma, redirige al listado de superhéroes
      if (result.isConfirmed) {
        window.location.href = "/api/heroes"; 
      }
    });
  });
});
