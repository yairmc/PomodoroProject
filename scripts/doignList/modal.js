const modal = document.querySelector('#adviceModal')
const closeModal = document.querySelector("#closeDoingModal")

function openModalDoing() { modal.showModal() }

function closeModalDoing() {
    closeModal.addEventListener('click', () => {
        modal.close()
        location.reload();
    })

}

export {
    openModalDoing,
    closeModalDoing,
}