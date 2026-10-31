import { getBook, money } from "../utils";
import Qty from "../components/Qty";
import BookCover from "../components/BookCover";
import Home from "./Home";

export default function Product({ id, cart, change, onAdd }) {
  const b = getBook(id);
  if (!b) return <Home onAdd={onAdd} />;
  return (
    <>
      <p><a href="#bosh" className="mute">‹ Barcha kitoblar</a></p>
      <div className="split">
        <div className="big"><BookCover b={b} /></div>
        <div>
          <span className="mute">{b.c}</span>
          <h1>{b.t}</h1>
          <p className="mute" style={{ fontSize: 18, margin: "0 0 8px" }}>{b.a}</p>
          <p className="price" style={{ fontSize: 24, margin: "0 0 12px" }}>{money(b.p)}</p>
          <p>{b.d}</p>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 20 }}>
            <Qty value={cart[id] || 0} onChange={(d) => change(id, d)} />
            <button className="btn g" onClick={() => onAdd(id)}>Savatga qo'shish</button>
          </div>
        </div>
      </div>
    </>
  );
}