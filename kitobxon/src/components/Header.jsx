export default function Header({ page, count, user, onLogout }) {
  const links = [
    ["bosh", "Bosh sahifa"],
    ["savat", "Savat"],
    ...(user
      ? [["buyurtmalarim", "Buyurtmalarim"]]
      : [["kirish", "Kirish"], ["royxat", "Ro'yxatdan o'tish"]]),
  ];
  return (
    <header>
      <div className="bar">
        <a className="logo" href="#bosh">Kitobxon</a>
        <nav>
          {links.map(([key, label]) => (
            <a key={key} href={`#${key}`} className={key === page ? "on" : ""}>
              {label}
              {key === "savat" && count > 0 && <span className="n">{count}</span>}
            </a>
          ))}
          {user && <button className="out" onClick={onLogout}>{user.name} · Chiqish</button>}
        </nav>
      </div>
    </header>
  );
}