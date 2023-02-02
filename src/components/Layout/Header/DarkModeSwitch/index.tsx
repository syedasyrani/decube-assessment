import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ReactElement } from 'react'
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri'
import useDarkMode from '../../../../hooks/useDarkMode'

const DarkModeSwitch = (): ReactElement => {
	const [darkMode, toggleDarkMode] = useDarkMode()

	const spring = {
		type: 'spring',
		stiffness: 700,
		damping: 30,
	}

	return (
		<div
			className={clsx(
				'flex-start flex h-[25px] w-[50px] rounded-[25px] bg-zinc-100 p-[2.5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700',
				{
					'place-content-end': darkMode,
				}
			)}
			onClick={toggleDarkMode}
		>
			<motion.div
				className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-black/90"
				layout
				transition={spring}
			>
				<motion.div whileTap={{ rotate: 360 }}>
					{darkMode ? (
						<RiMoonClearFill className="w-3 h-3 text-slate-200" />
					) : (
						<RiSunFill className="w-3 h-3 text-yellow-300" />
					)}
				</motion.div>
			</motion.div>
		</div>
	)
}

export default DarkModeSwitch
