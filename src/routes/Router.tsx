import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LanguageWrapper } from "../layouts/LanguageWrapper";
import Index from "../layouts/Index";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:lang" element={<LanguageWrapper />}>
					<Route path="" element={<Index />} />
				</Route>
				<Route path="*" element={<Navigate replace to="/en-us" />} />
				<Route path="/" element={<Navigate replace to="/en-us" />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
