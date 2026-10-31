import { STATUS } from "../data/status";
import { money } from "../utils";

export default function MyOrders({ orders, advance }) {
  if (!orders.length)
    return (
      <>
        <h1>Buyurtmalarim</h1>
        <div className="empty">
          <p>Hali buyurtma bermadingiz. Kitob tanlang va birinchi buyurtmangizni bering.</p>
          <a className="btn" href="#bosh">Kitoblarga o'tish</a>
        </div>
      </>
    );
  const delivered = orders.filter((o) => o.st === 2).length;
  return (
    <>
      <h1>Buyurtmalarim</h1>
      <div className="stats">
        <div><b>{orders.length}</b>Jami buyurtma</div>
        <div><b>{orders.length - delivered}</b>Yo'lda</div>
        <div><b>{delivered}</b>Yetkazib berildi</div>
      </div>
      <div style={{ display: "grid", gap: 12 }}>
        {orders.map((o) => (
          <div className="row" style={{ flexWrap: "wrap", alignItems: "flex-start" }} key={o.id}>
            <div className="grow" style={{ minWidth: 240 }}>
              <b>Buyurtma #{o.id}</b> <span className="mute">· {o.date}</span>
              <div style={{ margin: "8px 0" }}>
                {o.items.map((it) => (
                  <div key={it.id}>{it.t} × {it.q} <span className="mute">— {money(it.p * it.q)}</span></div>
                ))}
              </div>
              <div className="mute">{o.addr} · {o.pay}</div>
              {o.st === 2 && <div style={{ color: "var(--green)", fontWeight: 600, marginTop: 6 }}>✓ Kitoblar sizga yetkazib berildi</div>}
            </div>
            <div style={{ textAlign: "right" }}>
              <span className={`badge s${o.st}`}>{STATUS[o.st]}</span>
              <div><b>{money(o.sum)}</b></div>
              {o.st < 2 && (
                <button className="btn o" style={{ marginTop: 8, padding: "6px 12px", fontSize: 13 }} onClick={() => advance(o.id)}>
                  Sinov: keyingi holat
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mute" style={{ marginTop: 16 }}>«Sinov» tugmasi faqat ko'rsatish uchun. Haqiqiy do'konda holatni kutubxona egasi yoki server o'zgartiradi.</p>
    </>
  );
}