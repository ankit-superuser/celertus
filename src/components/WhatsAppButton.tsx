const WHATSAPP_NUMBER = "918076036432";
const DEFAULT_MESSAGE = "Hi Celertus.ai, I'd like to talk about a project.";

/**
 * Fixed WhatsApp entry point, present on every page. Sits above BackToTop
 * (bottom-6) so the two never overlap once BackToTop fades in on scroll.
 */
const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Celertus.ai on WhatsApp"
      className="group fixed bottom-24 right-5 sm:right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-studio-mist"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]/60 motion-safe:animate-ping motion-reduce:hidden"
      />
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="relative z-10 h-7 w-7 fill-current"
      >
        <path d="M16.02 3C9.4 3 4 8.36 4 15c0 2.34.66 4.53 1.9 6.4L4.3 27.3l6.1-1.6a11.9 11.9 0 0 0 5.62 1.43h.01c6.63 0 12.02-5.36 12.02-12S22.65 3 16.02 3Zm0 21.8h-.01a9.75 9.75 0 0 1-4.98-1.37l-.36-.21-3.7.97.99-3.6-.24-.37A9.77 9.77 0 0 1 6.2 15c0-5.4 4.4-9.8 9.82-9.8 2.62 0 5.08 1.02 6.94 2.88a9.72 9.72 0 0 1 2.87 6.93c0 5.4-4.4 9.79-9.81 9.79Zm5.37-7.34c-.29-.15-1.73-.85-2-.95-.27-.1-.46-.15-.66.14-.2.3-.75.95-.92 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.15-.15.34-.4.5-.6.17-.2.22-.34.34-.57.11-.22.06-.42-.03-.57-.1-.15-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47h-.5c-.2 0-.51.07-.78.36-.27.29-1.03 1-1.03 2.44s1.06 2.83 1.2 3.03c.15.2 2.06 3.14 5.02 4.28 2.96 1.14 2.96.76 3.5.71.53-.05 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.35Z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
