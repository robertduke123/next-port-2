"use client";
import React, { useContext, useEffect, useState } from "react";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
	const [scroll, setScroll] = useState(0);

	const value = {
		scroll,
		setScroll,
	};

	useEffect(() => {
		window.addEventListener("scroll", () => setScroll(window.scrollY));
	});
	useEffect(() => {
		setScroll(window.scrollY);
	}, [scroll]);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
