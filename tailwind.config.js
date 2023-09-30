/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/*.html"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#290190",
					light: "#110011",
					dark: "#89aa88",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
