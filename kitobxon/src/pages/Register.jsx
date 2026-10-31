import { useState } from "react";

export default function Register({ onRegister }) {
  const [f, setF] = useState({ name: "", phone: "", pass: "", pass2: "" });
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim()) return setErr("Ismingizni kiriting.");
    if (f.phone.replace(/\D/g, "").length < 9) return setErr("To'liq telefon raqamini kiriting.");
    if (f.pass.length < 6) return setErr("Parol kamida 6 ta belgidan iborat bo'lsin.");
    if (f.pass !== f.pass2) return setErr("Parollar bir xil emas.");
    setErr(onRegister(f) || "");
  };

  return (
    <div style={{ maxWidth: 440 }}>
      <h1>Ro'yxatdan o'tish</h1>
      <p className="sub">Hisob oching va buyurtmalaringizni kuzatib boring.</p>
      <form onSubmit={submit}>
        <label>Ismingiz<input value={f.name} onChange={set("name")} autoComplete="name" /></label>
        <label>Telefon raqami<input type="tel" value={f.phone} onChange={set("phone")} autoComplete="tel" placeholder="+998 90 123 45 67" /></label>
        <label>Parol<input type="password" value={f.pass} onChange={set("pass")} autoComplete="new-password" /></label>
        <label>Parolni takrorlang<input type="password" value={f.pass2} onChange={set("pass2")} autoComplete="new-password" /></label>
        {err && <p className="price" role="alert">{err}</p>}
        <button className="btn g" type="submit">Ro'yxatdan o'tish</button>
      </form>
      <p className="mute">Hisobingiz bormi? <a href="#kirish"><u>Kirish</u></a></p>
    </div>
  );
}