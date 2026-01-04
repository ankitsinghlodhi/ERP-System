import "../styles/application.css"

function Application({ back }) {
  return (
    <div>
      <div className="form-wrapper">
        <h2>Leave Application Form</h2>

        <form id="leaveForm">
          {/* Leave Date Range */}
          <div className="form-group">
            <label htmlFor="from">Leave From:</label>
            <input type="date" id="from" name="from" required />

            <label htmlFor="to">To:</label>
            <input type="date" id="to" name="to" required />
          </div>

          {/* Reason Selection */}
          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <select id="reason" name="reason">
              <option value="Sick">Sick</option>
              <option value="Family Emergency">Family Emergency</option>
              <option value="Personal Work">Personal Work</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Custom Reason */}
          <div
            className="form-group"
            id="customReasonGroup"
            style={{ display: "none" }}
          >
            <label htmlFor="customReason">Please specify your reason:</label>
            <input
              type="text"
              id="customReason"
              name="customReason"
              placeholder="Type your reason..."
            />
          </div>

          {/* Submit Button */}
          <div className="form-group">
            <button type="submit">Submit Application</button>
          </div>
        </form>

        <button onClick={back}>Back</button>
      </div>
    </div>
  );
}

export default Application;
