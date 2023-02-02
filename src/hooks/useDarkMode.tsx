import { useEffect, useState } from 'react'

const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(() => {
		if (localStorage.getItem('theme')) {
			if (localStorage.getItem('theme') === 'dark') {
				return true
			} else {
				return false
			}
		} else {
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				return true
			} else {
				return false
			}
		}
	})

	const toggleDarkMode = (): void => setDarkMode(!darkMode)

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [darkMode])

	return [darkMode, toggleDarkMode] as const
}

export default useDarkMode
