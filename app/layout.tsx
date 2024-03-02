import { ThemeProvider } from '@/components/providers/theme-provides'
import type { Metadata } from 'next'
import { Crete_Round, Inter, Work_Sans } from 'next/font/google'
import { ChildProps } from '../types'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const createRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-createRound',
})
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
})
export const metadata: Metadata = {
	title: 'Sammi  dasturlashga oid maqolalar ',
	description:
		'Dasturlash haqida yangiliklar, maslathatlar, va dasturlash sohasidagi eng songgi xabarlar. Bizing blogda dasturlashni organish va rivojlanish uchun qollanma topinshingiz mumkin.',
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${createRound.variable} ${workSans.variable} overflow-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
