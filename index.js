const btnAddModal = document.querySelector("#addButton");
const btnCloseAddModal = document.querySelector('#closeModal');
const modal = document.querySelector('#modal')

btnAddModal.addEventListener("click", () => {
    modal.showModal()
})

btnCloseAddModal.addEventListener("click", () => {
    modal.close()
})
