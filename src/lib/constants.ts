export const APP_CONSTANTS = {
  APP_NAME: "DAKXINPATH®",
  APP_DESCRIPTION:
    "Experience high-quality agricultural exports from India with our comprehensive solutions for pulses, grains, spices, fruits, and vegetables. We ensure your products reach global markets efficiently, safely, and with the utmost care—delivering excellence from farm to destination.",
  APP_TITLE:
    "India's Finest Pulses, Grains, Spices, Fruits & Vegetable Exports",
  APP_LIGHT_LOGO: "/logo_light.png",
  APP_DARK_LOGO: "/logo_dark.png",
  APP_LOGO: (theme: string): string => {
    return "/logo_" + theme + ".png";
  },
  APP_URL: "https://dak-mod.netlify.app",
};
