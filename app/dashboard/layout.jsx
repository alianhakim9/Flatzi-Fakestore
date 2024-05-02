import BackToTop from "../../components/back-to-top";
import BottomNav from "../../components/bottom-nav";

export default function RootLayout({ children }) {
  return (
    <main className="flex flex-col h-[100vh] max-w-screen-sm mx-auto">
      <div className="md:p-10 p-5 flex-1">{children}</div>
      <div className="fixed bottom-0 z-50 max-w-screen-sm w-full">
        <BackToTop />
        <BottomNav />
      </div>
    </main>
  );
}
