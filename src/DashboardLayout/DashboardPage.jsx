import { Outlet } from "react-router";
import SidebarDasboard from "./SidebarDasboard";



export default function DashboardLayout() {
  return (
  <div>
       <div className="grid grid-cols-2 justify-be">
      <SidebarDasboard/>
     
    </div>
     <Outlet/>
  </div>
  )
}
