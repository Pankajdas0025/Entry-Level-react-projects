import React from 'react'

function LeaderBoard() {
  return (
      <div className="container text-center py-5">
        <h2 className ="fw-bold mb-4">🏆 Leaderboard</h2>
        <table className="table table-striped shadow">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Percentage</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>YahuBaba</td>
                    <td>1</td>
                    <td>100%</td>
                    <td>01/01/2026, 00:00:00</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sanchit</td>
                    <td>1</td>
                    <td>50%</td>
                    <td>01/01/2026, 00:00:00</td>
                </tr>
            </tbody>
        </table>
        <button class="btn btn-danger mt-3">Clear Leaderboard</button>
    </div>
  )
}

export default LeaderBoard
