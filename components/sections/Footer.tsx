import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 pt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Brand & description */}
          <div className="lg:col-span-2">
            {/* Logos */}
            <div className="flex flex-col items-start gap-4">
              <Image
                src="/footer_1.png"
                alt="Interreg Euro-MED"
                width={240}
                height={80}
              />
            <p className="mt-2 mx-2 max-w-80 text-sm leading-relaxed text-gray-900">
              Empowering your transition to a circular <br /> future with clarity,
              support, and <br />actionable insights.
            </p>
            </div>


            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full
                           border border-slate-300 text-slate-600
                           transition hover:bg-slate-900 hover:text-white"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Quick navigation
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-slate-900">About CircleHub</Link></li>
              <li><Link href="/assessment" className="hover:text-slate-900">The Assessment</Link></li>
              <li><Link href="/resource-center" className="hover:text-slate-900">Resource Center</Link></li>
              <li><Link href="/circlexchange" className="hover:text-slate-900">CircleXchange</Link></li>
              <li><Link href="/news" className="hover:text-slate-900">Actualités LinkedIn</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Legal
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><Link href="/privacy-policy" className="hover:text-slate-900">Privacy Policy</Link></li>
              <li><Link href="/legal-notice" className="hover:text-slate-900">Legal Notice</Link></li>
              <li><Link href="/terms" className="hover:text-slate-900">Terms of Use</Link></li>
              <li><Link href="/cookies" className="hover:text-slate-900">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>Address: To be confirmed</li>
              <li>Phone: To be confirmed</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:support@circlehub.org"
                  className="font-medium text-sky-600 hover:underline"
                >
                  support@circlehub.org
                </a>
              </li>
              <li>Support & Assistance</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-slate-200 py-6">
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} CircleHub – All rights reserved. Project
            developed within the Interreg CircleMED programme, co-financed by
            the European Union.
          </p>
        </div>
        {/* Bottom images */}
        <div className="absolute right-0 bottom-0">
        <Image
                src="/footer_2.png"
                alt="Co-funded by the European Union"
                width={140}
                height={40}
        />
        </div>
      </div>
    </footer>
  );
}
