const EnablerCheckbox = ({ enable, setEnable, desc }) => {
  return (
    <div className="form-check form-switch mb-2">
      <input
        className="form-check-input"
        type="checkbox"
        name={'checkbox'}
        value={enable}
        onChange={(e) => setEnable(e.target.checked)}
      />
      <label className="form-check-label">
        {desc}
      </label>
    </div>
  )
}

export default EnablerCheckbox;