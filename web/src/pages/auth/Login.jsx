import React, { useState } from 'react';
import { loginLink } from "../../utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(loginLink, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (response.ok) {
      
      localStorage.setItem("accessToken", data.AccessToken.accessToken);
      document.cookie = `RefreshToken=${data.RefreshToken}; path=/`;

      nav("/");
    } else {
      alert("Giriş başarısız!");
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col bg-white p-6 rounded-xl shadow-md w-80">
        <p className="text-lg font-semibold text-center mb-6">Demo Ticaret</p>
        <input
          type="text"
          placeholder="Kullanıcı adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 mb-4 border rounded"
        />
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Giriş
          </button>
          <button type="button" onClick={() => nav("/register")} className="text-blue-600 hover:underline">
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
