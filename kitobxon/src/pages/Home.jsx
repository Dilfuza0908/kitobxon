import { useState } from "react";
import { BOOKS } from "../data/books";
import BookCard from "../components/BookCard";

export default function Home({ onAdd, user }) {
  const [cat, setCat] = useState("Hammasi");
  const [q, setQ] = useState("");
  const cats = ["Hammasi", ...new Set(BOOKS.map((b) => b.c))];
  const list = BOOKS.filter(
    (b) =>
      (cat === "Hammasi" || b.c === cat) &&
      (b.t + " " + b.a).toLowerCase().includes(q.trim().toLowerCase())
  );
  return (
    <>
      <div className="hero">
        <div>
          <h1>Yaxshi kitoblar bir joyda</h1>
          <p>Klassik va zamonaviy asarlarni tanlang, bugun buyurtma bering — uyingizgacha yetkazamiz.</p>
          {user
            ? <a className="btn w" href="#buyurtmalarim">Buyurtmalarim</a>
            : <a className="btn w" href="#royxat">Ro'yxatdan o'tish</a>}
        </div>
        <div className="em" aria-hidden="true">📚</div>
      </div>
      <h2>Kitoblar</h2>
      <label>
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Kitob yoki muallif nomi" />
      </label>
      <div className="chips">
        {cats.map((c) => (
          <button key={c} className={"chip" + (c === cat ? " on" : "")} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      {list.length ? (
        <div className="grid">{list.map((b) => <BookCard key={b.id} b={b} onAdd={onAdd} />)}</div>
      ) : (
        <div className="empty"><p>Hech narsa topilmadi. Boshqa nom yoki muallif bilan qidiring.</p></div>
      )}
    </>
  );
}