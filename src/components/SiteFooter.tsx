import { nav } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-masthead text-2xl">Sunday Florals</p>
            <p className="mt-3 max-w-[22ch] font-label text-[11px] uppercase leading-relaxed text-paper/60">
              The flower shop for people who read the paper cover to cover.
            </p>
          </div>

          <div>
            <p className="font-label text-[11px] uppercase text-paper/50">Shop</p>
            <ul className="mt-3 space-y-2 text-sm text-paper/85">
              {nav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-accent-soft">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-label text-[11px] uppercase text-paper/50">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-paper/85">
              <li>Our Growers</li>
              <li>Delivery Areas</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <p className="font-label text-[11px] uppercase text-paper/50">Follow Along</p>
            <ul className="mt-3 space-y-2 text-sm text-paper/85">
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>hello@sundayflorals.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/20 pt-6 font-label text-[10px] uppercase tracking-widest text-paper/50">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Sunday Florals. All rights reserved.</span>
            <span>Printed digitally, delivered same-day.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
