import "./globals.css";

export const metadata = {
  title: "Maison Néroli — Linge de maison naturel",
  description: "Rideaux, housses de couette, linge de lit et nappes en matières naturelles pour une maison qui fait du bien.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
