import Navbar from "./navbar";
import Slogan from "./textvertical";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-7 text-white w-full max-w-16">
        <Navbar/>
        <Slogan/>
    </div>
  )
}