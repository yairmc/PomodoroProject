// Crea un modal 

const modal = document.querySelector('#modal')
const btnCloseAddModal = document.querySelector('#closeModal');

function openModal() {
    modal.showModal()
}

function closeModal() {
    btnCloseAddModal.addEventListener("click", () => {
        modal.close()
        location.reload();
    })

}

export {
    openModal,
    closeModal
}