import { useState } from "react";
import { getBook, money, shipping } from "../utils";
import Qty from "../components/Qty";
import BookCover from "../components/BookCover";

export default function Cart({ cart, change, total, user, onPlace }) {
  const [f, setF] = useState({ addr: "", note: "", pay: "Naqd" });
  const [err, setErr] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const ids = Object.keys(cart).map(Number);

  if (!ids.length)
    return (
      <>
        <h1>Savat</h1>
        <div className="empty">
          <p>Savatingiz bo'sh. Kitob tanlang va bu yerda ko'ring.</p>
          <a className="btn" href="#bosh">Kitoblarga o'tish</a>
        </div>
      </>
    );

  const submit = () => {
    if (!f.addr.trim()) return setErr("Yetkazib berish manzilini kiriting.");
    onPlace(f);
  };

  return (
    <>
      <h1>Savat</h1>
      <div className="split" style={{ gridTemplateColumns: "2fr 1fr" }}>
        <div>
          {ids.map((id) => {
            const b = getBook(id);
            return (
              <div className="row" key={id}>
                <div className="e"><BookCover b={b} /></div>
                <div className="grow"><b>{b.t}</b><div className="mute">{b.a} · {money(b.p)}</div></div>
                <Qty value={cart[id]} onChange={(d) => change(id, d)} />
                <b>{money(b.p * cart[id])}</b>
              </div>
            );
          })}
          <h2 style={{ marginTop: 24 }}>Buyurtma berish</h2>
          {user ? (
            <>
              <label>Yetkazib berish manzili<input value={f.addr} onChange={set("addr")} autoComplete="street-address" placeholder="Tuman, ko'cha, uy" /></label>
              <label>Izoh<textarea rows={2} value={f.note} onChange={set("note")} placeholder="Kuryer uchun ma'lumot" /></label>
              <b>To'lov usuli</b>
              <div className="pay" style={{ marginTop: 8 }}>
                {["Naqd", "Karta"].map((m) => (
                  <label key={m}>
                    <input type="radio" name="pay" checked={f.pay === m} onChange={() => setF({ ...f, pay: m })} />
                    {m}
                  </label>
                ))}
              </div>
              {err && <p className="price" role="alert">{err}</p>}
              <button className="btn g" onClick={submit}>Buyurtmani tasdiqlash</button>
            </>
          ) : (
            <div className="note">
              <p>Buyurtma berish uchun hisobingizga kiring.</p>
              <a className="btn" href="#kirish">Kirish</a>{" "}
              <a className="btn o" href="#royxat">Ro'yxatdan o'tish</a>
            </div>
          )}
        </div>
        <div className="sum">
          <div><span>Kitoblar</span><span>{money(total)}</span></div>
          <div><span>Yetkazib berish</span><span>{shipping(total) ? money(shipping(total)) : "Bepul"}</span></div>
          <div className="t"><span>Jami</span><span>{money(total + shipping(total))}</span></div>
        </div>
      </div>
    </>
  );
}