import Header from "./Header";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            {/* Add footer, sidebar, or other layout components here */}
        </>
    );
};

export default Layout;
