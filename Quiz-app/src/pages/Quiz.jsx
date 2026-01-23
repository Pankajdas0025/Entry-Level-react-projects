import React from 'react'

function Quiz() {
  return (
      <div className="container mt-4">
        <div className="alert alert-info text-center fw-bold">⏳ Time Left: 15s</div>
        <div className="progress mb-3">
            <div className="progress-bar" style={{width: "50%"}}>50%</div>
        </div>
        <div className="card shadow p-4">
            <h4 className="fw-semibold">React is mainly used for?</h4>
            <div className="mt-3">
                <button className="btn btn-outline-primary w-100 mt-2">Styling</button>
                <button className="btn btn-outline-primary w-100 mt-2">Mobile Apps</button>
                <button className="btn btn-outline-primary w-100 mt-2">Building UI</button>
                <button className="btn btn-outline-primary w-100 mt-2">None</button>
            </div>
        </div>
    </div>
  )
}

export default Quiz
