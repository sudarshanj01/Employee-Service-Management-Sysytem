import { useState} from 'react';
import { useNavigate,Link } from 'react-router-dom';

function LoginPage() {
  const [credentials] = useState({
    user1: {
      username: 'sudarshan',
      password: 'password'
    },
    user2: {
      username: 'john',
      password: 'password'
    },
    user3: {
      username: 'Ram',
      password: 'password'
    }
  });

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validUser = Object.values(credentials).find(user => user.username === username && user.password === password);
    console.log(validUser);
    if (validUser) {
      navigate(`/home`);
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
 

    <div class="flex flex-col justify-center items-center h-screen">
  <div class="w-full max-w-xs">
    <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">

        <label class="block text-gray-700 font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      
      <div class="flex items-center justify-between ">
        <button
          class="bg-fuchsia-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md "
          type="button"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default LoginPage;
