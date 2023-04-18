import "bootstrap/dist/css/bootstrap.css";

export const metadata = {
  title: "Network Chat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
