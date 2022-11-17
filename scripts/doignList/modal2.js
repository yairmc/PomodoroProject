const modal = document.querySelector('#adviceModal2')
const closeModal = document.querySelector("#closeDoingModal2")

function openModalDoing2() { modal.showModal() }

function closeModalDoing2() {
    closeModal.addEventListener('click', () => {
        modal.close()
        location.reload();
    })

}

export {
    openModalDoing2,
    closeModalDoing2,
}

