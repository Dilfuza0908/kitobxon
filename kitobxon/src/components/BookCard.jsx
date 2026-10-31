import { money } from "../utils";
import BookCover from "./BookCover";

export default function BookCard({ b, onAdd }) {
  return (
    <div className="card">
      <a href={`#k${b.id}`} className="pic" aria-label={b.t}><BookCover b={b} /></a>
      <div className="cb">
        <span className="mute">{b.c}</span>
        <b>{b.t}</b>
        <span className="mute">{b.a}</span>
        <span className="price">{money(b.p)}</span>
        <button className="btn g" onClick={() => onAdd(b.id)}>Savatga qo'shish</button>
      </div>
    </div>
  );
}