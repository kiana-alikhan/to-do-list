const ModalTrash = (isShowModal, setIsShowModal) => {
  const handleDelete = () => {
    setIsShowModal(false);
  };
  return (
    <div className="modal-trash">
      <p>Are you sure delete it?</p>
      <button onClick={setIsShowModal(false)}>Yes</button>
      <button>No</button>
    </div>
  );
};
export default ModalTrash;
