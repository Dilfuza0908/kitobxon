// Kitobda `img` bo'lsa (masalan, "/covers/1.jpg") shu rasm chiqadi,
// aks holda nomi va muallifi bilan muqova avtomatik chiziladi.
const PALETTE = ["#2B4A7A", "#7A2B3A", "#2F5D50", "#8A5A1F", "#4B3A6B", "#1F4E5F", "#6B4A2B", "#A5502B"];

function wrap(text, max) {
  const lines = [];
  let cur = "";
  for (const w of text.split(" ")) {
    if (cur && (cur + " " + w).length > max) { lines.push(cur); cur = w; }
    else cur = cur ? cur + " " + w : w;
  }
  if (cur) lines.push(cur);
  return lines;
}

export default function BookCover({ b }) {
  if (b.img) return <img className="cover" src={b.img} alt={`${b.t} muqovasi`} loading="lazy" />;
  const color = b.color || PALETTE[(b.id - 1) % PALETTE.length];
  const title = wrap(b.t, 12);
  const author = wrap(b.a, 20);
  const ty = 112 - (title.length - 1) * 14;
  return (
    <svg className="cover" viewBox="0 0 200 280" role="img" aria-label={`${b.t}, ${b.a}`}>
      <rect width="200" height="280" fill={color} />
      <rect width="12" height="280" fill="#000" opacity=".22" />
      <rect x="22" y="14" width="164" height="252" fill="none" stroke="#fff" strokeOpacity=".45" strokeWidth="1.5" />
      <path d="M104 40 l8 8 l-8 8 l-8 -8 z" fill="#E8A33D" />
      {title.map((l, i) => (
        <text key={i} x="105" y={ty + i * 28} textAnchor="middle" fill="#fff" fontSize="22" fontWeight="700" fontFamily="Georgia, 'Times New Roman', serif">{l}</text>
      ))}
      <line x1="75" x2="135" y1="190" y2="190" stroke="#E8A33D" strokeWidth="2" />
      {author.map((l, i) => (
        <text key={i} x="105" y={216 + i * 16} textAnchor="middle" fill="#fff" fillOpacity=".9" fontSize="12" fontFamily="system-ui, sans-serif">{l}</text>
      ))}
    </svg>
  );
}