import SideBar from "@/components/sideBar";
import Footer from "@/components/footer";

export default function SideBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">
        {children}
        <Footer />
      </div>
    </div>
  );
}
