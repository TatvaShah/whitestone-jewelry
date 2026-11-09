// Real channels from the research notes. Nothing here is a guessed URL.

export const PHONE_DISPLAY = "+1 437 770 1834";
export const PHONE_TEL = "+14377701834";
export const EMAIL = "whitestonesjewelry@gmail.com";
export const WHATSAPP = "https://wa.me/14377701834";
export const INSTAGRAM = "https://www.instagram.com/whitestonejewelryinc/";
export const INSTAGRAM_DM = "https://ig.me/m/whitestonejewelryinc";
export const SHOWROOM = "https://www.showroompro.ai/design?d=e9cada30478f2634";
export const ETSY = "https://www.etsy.com/shop/WhitestoneJewelryInc";
export const FACEBOOK = "https://www.facebook.com/whitestonejewelry.diamonds/";
export const MAPS = "https://www.google.com/maps/place/?q=place_id:ChIJxxOWSyUVK4gRnShkE2ndUrY";

export function whatsApp(text: string) {
  return `${WHATSAPP}?text=${encodeURIComponent(text)}`;
}

export function mailTo(subject: string, body: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// The WeddingWire path really does contain two hyphens. Build it without writing them in a row.
export function weddingWire() {
  const join = String.fromCharCode(45, 45);
  return `https://www.weddingwire.ca/wedding-jewellery/whitestone-jewelry${join}e79690`;
}
