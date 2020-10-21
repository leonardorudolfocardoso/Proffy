// procurar o botão
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener("click", cloneField)

// executar uma ação
function cloneField() {
    // selecionar e duplicar o campo
    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true)

    // pegar os campos
    const fields = newFieldsContainer.querySelectorAll("input")

    // para cada campo, limpar
    fields.forEach(function(field) {
        // limpar o campo
        field.value = ""
    }) 

    // colocar na página
    document.querySelector("#schedule-items").append(newFieldsContainer)
}
