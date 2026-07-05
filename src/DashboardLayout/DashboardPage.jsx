import { Outlet } from "react-router";
import SidebarDasboard from "./SidebarDasboard";



export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-2 ">
      <SidebarDasboard/>
      <Outlet/>
    </div>
  )
}
