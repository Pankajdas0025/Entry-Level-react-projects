import React from 'react'

function Result() {
  return (
     <div className="container text-center mt-5">
        <div className="card shadow p-5">
            <h2 className="fw-bold mb-3">🎉 Quiz Completed!</h2>
            <h4>Yahubaba, your score is:</h4>
            <h1 className="text-success">1</h1>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <a href="LeaderBoard.html" className="btn btn-primary">
                   View Leaderboard
                </a>
                <a href="Home.html" className="btn btn-warning">
                    Home
                </a>
            </div>
        </div>
    </div>
  )
}

export default Result
