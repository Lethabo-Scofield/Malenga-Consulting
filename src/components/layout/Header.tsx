"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks } from "@/content/company";
import { services } from "@/content/services";
import { serviceIcons } from "@/components/ui/icons";

export function Header() {
  const pathname = usePathname();
  // Menu state is keyed to the pathname, so navigating closes menus without an effect.
  const [mobileOpenFor, setMobileOpenFor] = useState<string | null>(null);
  const [servicesOpenFor, setServicesOpenFor] = useState<string | null>(null);
  const mobileOpen = mobileOpenFor === pathname;
  const servicesOpen = servicesOpenFor === pathname;
  const setMobileOpen = useCallback(
    (v: boolean | ((o: boolean) => boolean)) =>
      setMobileOpenFor((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null)),
    [pathname],
  );
  const setServicesOpen = useCallback(
    (v: boolean | ((o: boolean) => boolean)) =>
      setServicesOpenFor((cur) => ((typeof v === "function" ? v(cur === pathname) : v) ? pathname : null)),
    [pathname],
  );
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [setMobileOpen, setServicesOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes menus; outside click closes the dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileOpen) menuButtonRef.current?.focus();
        closeAll();
      }
    };
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [mobileOpen, closeAll, setServicesOpen]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const linkClass = (href: string) =>
    `relative py-2 text-sm tracking-wide transition-colors hover:text-accent after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-300 ${
      isActive(href) ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"
    }`;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        mobileOpen
          ? "border-b border-line bg-paper"
          : scrolled
            ? "border-b border-line bg-paper/95 backdrop-blur"
            : "bg-paper/0"
      } text-ink`}
    >
      <a
        href="#main"
        className="absolute left-4 top-3 -translate-y-20 bg-ink px-4 py-2 text-sm text-paper focus:translate-y-0"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.href}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setServicesOpen(false);
                }}
              >
                <div className="flex items-center gap-1">
                  <Link href={link.href} className={linkClass(link.href)}>
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    aria-label="Toggle services menu"
                    aria-expanded={servicesOpen}
                    aria-controls="services-menu"
                    onClick={() => setServicesOpen((o) => !o)}
                    className="p-1 transition-colors hover:text-accent"
                  >
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>
                {servicesOpen && (
                  <div id="services-menu" className="absolute -left-28 top-full w-[34rem] pt-4">
                    <div className="border border-line bg-paper text-ink shadow-[0_18px_40px_-24px_rgb(6_19_63/0.45)]">
                      <p className="border-b border-line px-5 py-3 text-xs uppercase tracking-[0.14em] text-mute">
                        Our five divisions
                      </p>
                      <ul className="p-2">
                        {services.map((s) => {
                          const Icon = serviceIcons[s.slug];
                          return (
                            <li key={s.slug}>
                              <Link
                                href={`/services/${s.slug}`}
                                className="group flex items-start gap-4 px-3 py-3 transition-colors hover:bg-stone"
                              >
                                <span className="flex size-10 shrink-0 items-center justify-center bg-ink text-accent-soft transition-colors group-hover:bg-accent-soft group-hover:text-ink">
                                  <Icon aria-hidden="true" className="size-5" />
                                </span>
                                <span>
                                  <span className="block text-sm font-medium leading-snug">{s.title}</span>
                                  <span className="mt-0.5 block text-sm text-mute">{s.blurb}</span>
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                      <Link
                        href="/services"
                        className="group flex items-center justify-between border-t border-line px-5 py-3.5 text-sm font-medium transition-colors hover:bg-stone"
                      >
                        Compare all services
                        <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href} className={linkClass(link.href)} aria-current={isActive(link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            ),
          )}
          <ButtonLink href="/contact" className="!py-2.5">
            Request a Consultation
          </ButtonLink>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="-mr-2 p-2 lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>
      </div>
    </header>

    {/* Sibling of the header, not a child: the header's backdrop-filter would otherwise
        become the containing block for this fixed panel and collapse it to 80px tall. */}
    {mobileOpen && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto overscroll-contain bg-paper lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[1280px] flex-col px-5 pb-12 pt-4 sm:px-8">
            {navLinks.map((link) =>
              link.label === "Services" ? (
                <div key={link.href} className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-5 text-left display text-3xl"
                    aria-expanded={mobileServicesOpen}
                    aria-controls="mobile-services"
                    onClick={() => setMobileServicesOpen((o) => !o)}
                  >
                    Services
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <ul id="mobile-services" className="pb-4">
                      {services.map((s) => {
                        const Icon = serviceIcons[s.slug];
                        return (
                          <li key={s.slug}>
                            <Link href={`/services/${s.slug}`} className="flex items-start gap-4 py-3">
                              <span className="flex size-10 shrink-0 items-center justify-center bg-ink text-accent-soft">
                                <Icon aria-hidden="true" className="size-5" />
                              </span>
                              <span>
                                <span className="block text-base font-medium leading-snug">{s.title}</span>
                                <span className="mt-0.5 block text-sm text-mute">{s.blurb}</span>
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                      <li>
                        <Link href="/services" className="block py-3 text-base font-medium underline underline-offset-4">
                          Compare all services
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="display border-b border-line py-5 text-3xl"
                >
                  {link.label}
                </Link>
              ),
            )}
            <ButtonLink href="/contact" className="mt-8">
              Request a Consultation
            </ButtonLink>
          </nav>
        </div>
      )}
    </>
  );
}
