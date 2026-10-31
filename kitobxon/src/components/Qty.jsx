export default function Qty({ value, onChange }) {
  return (
    <div className="qty">
      <button aria-label="Kamaytirish" onClick={() => onChange(-1)}>−</button>
      <span>{value}</span>
      <button aria-label="Ko'paytirish" onClick={() => onChange(1)}>+</button>
    </div>
  );
}