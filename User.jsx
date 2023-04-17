import React, { useState } from 'react';
function User() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
    .then(data => setUserData(data))
      .catch(error => setError(error));
      // console.log(data)
  };
  return (
    <div className="container max-auto w-25 mt-4" >
      <form onSubmit={handleSubmit} >
        <label>
          Enter Github username:
          <input className='form-control w-100' type="text" value={username}  onChange={(event) => setUsername(event.target.value)} />
        </label>
        <button type="submit" className='md btn btn-success text-dark ms-3 '>Search</button>
      </form>
      {userData && (
        <div className='border border-dark p-3 mt-4 rounded border-outline-primary'>
          <h2 className=' h2 text-center text-light bg-secondary rounded'>User Details</h2>
          <img className='rounded border border-dark' src={userData.avatar_url} alt="Avatar" />
          <h2 className='h2 text-center '>@{userData.login}</h2><hr/>
          <p className='h5 text-danger mt-1'>Name: {userData.name}</p>
          <p className='h5 text-success'>Public Repos: {userData.public_repos}</p>
          <p className='h5 text-warning'>Public Gists: {userData.public_gists}</p>
          <p className='h5 text-secondary'>Profile created at: {new Date(userData.created_at).toISOString().slice(0,10)}</p>
        </div>
      )}
      {error && (
        <div>
          <p>An error occurred: {error.message}</p>
        </div>
      )}
    </div>
  );
}

export default User;
