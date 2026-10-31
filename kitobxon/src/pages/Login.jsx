import { useState } from "react";

export default function Login({ onLogin, notice }) {
  const [f, setF] = useState({ phone: "", pass: "" });
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setErr(onLogin(f) || "");
  };

  return (
    <div style={{ maxWidth: 440 }}>
      <h1>Kirish</h1>
      <p className="sub">{notice || "Telefon raqamingiz va parolingizni kiriting."}</p>
      <form onSubmit={submit}>
        <label>Telefon raqami<input type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+998 90 123 45 67" /></label>
        <label>Parol<input type="password" value={f.pass} onChange={set("pass")} autoComplete="current-password" /></label>
        {err && <p className="price" role="alert">{err}</p>}
        <button className="btn g" type="submit">Kirish</button>
      </form>
      <p className="mute">Hisobingiz yo'qmi? <a href="#royxat"><u>Ro'yxatdan o'tish</u></a></p>
    </div>
  );
}