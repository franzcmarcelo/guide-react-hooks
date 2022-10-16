const EnablerCheckbox = ({enableOnlyTodoApp, setEnableOnlyTodoApp}) => {
  return (
    <div className="form-check form-switch mb-2">
    <input
      className="form-check-input"
      type="checkbox"
      name={ 'checkbox' }
      value={ enableOnlyTodoApp }
      onChange={ (e) => setEnableOnlyTodoApp(e.target.checked) }
    />
    <label className="form-check-label">
      Enable Only TODO App
    </label>
  </div>
  )
}

export default EnablerCheckbox;