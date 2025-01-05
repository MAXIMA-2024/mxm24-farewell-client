import { createSystem, defaultConfig } from "@chakra-ui/react";
import "./global.css";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        Luthier: { value: `'Luthier', sans-serif` },
        Lexend: { value: `'Lexend Variable', sans-serif` },
      },
      colors: {
        text: {
          primary: { value: "#44002B" },
          secondary: { value: "#0f0f0f" },
          tertiary: { value: "#FFFFFF" },
        },
        button: {
          yellow: { value: "#FFBE00" },
          primary: { value: "#47002D" },
          error: { value: "#D42727" },
        },
        card: {
          primary: { value: "#FAF4EB" },
          secondary: { value: "#FFF3D9" },
        },
        status: {
          success: { value: "#36AD2C" },
          error: { value: "#F43535" },
        },
      },
    },
  },
});
