import React from 'react'

function Home() {
  return (

    <div className="container text-center mt-5">
        <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
        <input placeholder="Enter your name" className="form-control w-50 mx-auto mb-3" type="text" autocomplete="off"/>
        <button className="btn btn-primary btn-lg">Start Quiz</button>
    </div>

  )
}

export default Home
