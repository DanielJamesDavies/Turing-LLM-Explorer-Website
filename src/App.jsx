// Packages
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

// Components
import { NavigationBar } from "./components/navigation-bar/NavigationBar";
import { HomePage } from "./pages/home/HomePage";
import { DownloadPage } from "./pages/download/DownloadPage";
import { TechnicalReportsPage } from "./pages/technical-reports/TechnicalReportsPage";
import { TechnicalReportPage } from "./pages/technical-report/TechnicalReportPage";
import { AuthorPage } from "./pages/author/AuthorPage";
import { NeuralNetBackground } from "./components/neural-net-background/NeuralNetBackground";

// Logic

// Context

// Services

// Styles

// Assets

function App() {
	const location = useLocation();
	const [pageName, setPageName] = useState(window.location?.pathname?.split("/")?.filter((e) => e?.length !== 0)?.[0] || "home");

	useEffect(() => {
		setPageName(window.location?.pathname?.split("/")?.filter((e) => e?.length !== 0)?.[0] || "home");
	}, [location]);

	return (
		<div className={"app app-page-" + pageName}>
			<NeuralNetBackground />
			<NavigationBar />
			<Routes>
				<Route path='' element={<HomePage />} />
				<Route path='/' element={<HomePage />} />
				<Route path='/download' element={<DownloadPage />} />
				<Route path='/research/:id' element={<TechnicalReportPage />} />
				<Route path='/research' element={<TechnicalReportsPage />} />
				<Route path='/author' element={<AuthorPage />} />
				<Route path='*' element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
