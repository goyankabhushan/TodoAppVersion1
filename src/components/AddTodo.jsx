function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row cssRow">
        <div class="col-4">
          <input type="text" placeholder="Enter do here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success cssButton">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
