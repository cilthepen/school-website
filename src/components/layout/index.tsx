import { cn } from ".../lib/utils";
import TailwindIndicator from "../common/tailwind-indicator";
import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={cn("flex h-screen flex-col")}>
			<header
				id="header"
				className={cn("absolute top-0 z-30 flex h-24 w-full items-center justify-center px-5 lg:px-10 ")}>
				<Header />
			</header>
			<main className={cn("flex-grow sm:p-6")}>
				<div className="container flex h-full w-full flex-col items-center justify-center">{children}</div>
			</main>
			<footer className={cn("bottom-0 z-50")}>
				<Footer />
			</footer>
			<TailwindIndicator />
		</div>
	);
};

export default Layout;
