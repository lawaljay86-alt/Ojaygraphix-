/**
 * OjayGraphix Central Theme Configuration
 * 60% White / Neutral (clean canvas, negative space)
 * 30% Deep Blue (primary brand accent, confidence, structure)
 * 10% Pink Accent (restrained highlights, focal points)
 */

export const themeConfig = {
  colors: {
    // 60% Neutral Canvas
    canvas: {
      pure: "#FFFFFF",
      subtle: "#FAFAFA",
      surface: "#F4F6F9",
      border: "#E5E7EB",
      borderSubtle: "#F1F5F9",
      textPrimary: "#0B1320",
      textSecondary: "#4B5563",
      textMuted: "#6B7280",
    },
    // 30% Deep Blue
    brand: {
      deep: "#0A2540",
      dark: "#06182B",
      navy: "#0E3A64",
      soft: "#E8EEF5",
      contrastText: "#FFFFFF",
    },
    // 10% Pink Accent
    accent: {
      pink: "#E11D74",
      pinkHover: "#BE185D",
      pinkLight: "#FDF2F8",
      pinkBorder: "#FCE7F3",
    },
  },
  typography: {
    fontSans: "'Plus Jakarta Sans', system-ui, sans-serif",
    fontDisplay: "'Syne', 'Plus Jakarta Sans', system-ui, sans-serif",
  },
  whatsapp: {
    primaryNumber: "07032282964",
    secondaryNumber: "07017681631",
    internationalPrimary: "2347032282964",
    internationalSecondary: "2347017681631",
  },
} as const;

export function getWhatsAppUrl(phone: string = themeConfig.whatsapp.internationalPrimary, message?: string): string {
  const cleanPhone = phone.replace(/^0/, '234').replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(
    message || "Hello OjayGraphix, I would like to make an enquiry about your services."
  );
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}

export function getTelUrl(phone: string = themeConfig.whatsapp.primaryNumber): string {
  const cleanPhone = phone.replace(/[^0-9+]/g, '');
  return `tel:${cleanPhone}`;
}
