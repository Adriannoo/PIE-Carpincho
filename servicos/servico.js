const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("Serviço ID:", id);

// No futuro:
// carregar dados do serviço via id
