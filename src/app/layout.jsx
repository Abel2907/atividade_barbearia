
import Header from "@/components/common/Header";
import "@/globals/globals.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
