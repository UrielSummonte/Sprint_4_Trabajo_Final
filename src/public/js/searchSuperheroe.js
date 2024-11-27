document
  .getElementById("formBusqueda")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombreBusqueda").value.trim();

    // Limpiar el campo de búsqueda antes de hacer la búsqueda
    document.getElementById("nombreBusqueda").value = "";

    if (nombre === "") {
      Swal.fire({
        icon: "warning",
        title: "Por favor, ingresa un nombre para buscar.",
        timer: 2500,
      });
      return;
    }

    try {
      const response = await fetch(
        `/api/heroes/buscar/nombreSuperHeroe/${nombre}`
      );
      const data = await response.json();

      const resultadoDiv = document.getElementById("resultadoBusqueda");
      resultadoDiv.innerHTML = "";

      if (response.ok && data.length > 0) {
        // Mostrar tarjeta del superhéroe encontrado
        const superheroe = data[0];

        resultadoDiv.innerHTML = `
          <div class="card shadow-lg mb-4 mx-auto" style="max-width: 500px; border: 2px solid #007bff; border-radius: 10px;">
          <div class="card-header text-center" style="background-color: #007bff; color: white;">
            <h4 class="card-title font-weight-bold" style="text-transform: uppercase;">${
              superheroe["Nombre Superhéroe"]
            }</h4>
          </div>
          <div class="card-body" style="background-color: #f8f9fa;">
            <p><strong>Nombre real:</strong> ${superheroe["Nombre Real"]}</p>
            <p><strong>Sociedad:</strong> ${superheroe["Nombre Sociedad"]}</p>
            <p><strong>Edad:</strong> ${superheroe["Edad"]}</p>
            <p><strong>Planeta de origen:</strong> ${
              superheroe["Planeta Origen"]
            }</p>
            <p><strong>Debilidad:</strong> ${superheroe["Debilidad"]}</p>
            <p><strong>Poderes:</strong> ${superheroe["Poderes"].join(", ")}</p>
            <p><strong>Habilidad especial:</strong> ${
              superheroe["Habilidad Especial"]
            }</p>
            <p><strong>Aliados:</strong> ${superheroe["Aliados"].join(", ")}</p>
            <p><strong>Enemigos:</strong> ${superheroe["Enemigos"].join(
              ", "
            )}</p>
            <p><strong>Creador:</strong> ${superheroe["Creador"]}</p>
          </div>
        </div>
        `;
      } else {
        // Mostrar mensaje de error
        resultadoDiv.innerHTML = `
          <div class="alert alert-danger text-center" role="alert">
            No se encontró un superhéroe con el nombre <strong>${nombre}</strong>.
          </div>
        `;
      }

      // Mostrar resultado durante 4 segundos
      setTimeout(() => {
        resultadoDiv.innerHTML = "";
      }, 2400);
    } catch (error) {
      console.error("Error al buscar el superhéroe:", error);
      Swal.fire({
        icon: "error",
        title: "Error al realizar la búsqueda.",
        text: error.message,
      });
    }
  });
