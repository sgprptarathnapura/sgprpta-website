// Shared phone / WhatsApp link used on the Home and Contact pages.
// 070 / 076 numbers are WhatsApp hotlines, 045 / 035 numbers are voice lines.

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.67c2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.24 8.24a8.2 8.2 0 0 1-4.2-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.23-8.24Zm-2.6 4.13c-.2 0-.5.07-.77.36-.26.3-1 .98-1 2.36 0 1.37 1.01 2.7 1.15 2.88.14.19 1.95 3.11 4.79 4.23 2.36.93 2.84.75 3.35.7.51-.05 1.65-.68 1.88-1.33.23-.65.23-1.21.16-1.33-.07-.11-.26-.18-.55-.32-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.28-.72.9-.88 1.09-.16.18-.33.2-.6.07-.28-.14-1.17-.44-2.23-1.38-.83-.73-1.38-1.63-1.55-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.62-1.51-.85-2.06-.19-.44-.38-.45-.53-.46h-.5Z" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.33.57 3.56.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.44.57 3.56a1 1 0 0 1-.25 1.03l-2.2 2.2Z" />
    </svg>
  );
}

export function isWhatsApp(num: string) {
  const d = num.replace(/\D/g, "");
  return d.startsWith("070") || d.startsWith("076") || d.startsWith("9470") || d.startsWith("9476");
}

export function ContactLink({
  number,
  className = "",
  iconClassName = "h-4 w-4",
}: {
  number: string;
  className?: string;
  iconClassName?: string;
}) {
  const digits = number.replace(/\D/g, "");
  const wa = isWhatsApp(number);
  const href = wa ? `https://wa.me/94${digits.replace(/^0/, "").replace(/^94/, "")}` : `tel:${number.replace(/\s/g, "")}`;

  return (
    <a
      href={href}
      {...(wa ? { target: "_blank", rel: "noreferrer" } : {})}
      title={wa ? `WhatsApp ${number}` : `Call ${number}`}
      className={"inline-flex items-center gap-2 " + className}
    >
      {wa ? <WhatsAppIcon className={iconClassName} /> : <PhoneIcon className={iconClassName} />}
      <span>{number}</span>
    </a>
  );
}
