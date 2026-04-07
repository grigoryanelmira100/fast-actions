import Footer from "~/components/reusable/shared/footer/Footer.jsx";
import Header from "~/components/reusable/shared/header/Header.jsx";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
