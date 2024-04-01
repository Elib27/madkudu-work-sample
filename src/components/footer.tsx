export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex h-[var(--footer-height)] items-center justify-center bg-slate-500">
      <span>Made by Eliot Bas for MadKudu - {year}</span>
    </footer>
  );
}
