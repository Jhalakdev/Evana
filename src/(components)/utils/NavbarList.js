import { usePathname } from "next/navigation"
import navcss from '../Navbar/Navbar.module.css'
import Link from "next/link";
export default function CreateNavbarList(listitem, index) {

    const path = usePathname();
    return <li key={index}>
        <Link className={path === listitem.path ? navcss.active : ''} href={listitem.path}>{listitem.pathName}</Link>
    </li>

}
