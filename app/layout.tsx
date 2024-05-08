import { ThemeProvider } from '@/components/providers/theme-provides'
import type { Metadata } from 'next'
import { Crete_Round, Inter, Work_Sans } from 'next/font/google'
import { ChildProps } from '../types'
import './globals.css'
import { Toaster } from 'sonner'
import NextTopLoader from 'nextjs-toploader'
import { url } from 'inspector'

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
	metadataBase: new URL('https://test-blog.com'),
	title: 'Dasturlashga oid maqolalar',
	description:
		'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
	authors: [
		{
			name: 'Nadirov Abdulhaq',
			url: 'https://portfolio-abdulhaqdev-1nbb.vercel.app',
		},
	],
	icons: { icon: '/public/author//images.pngx' },
	keywords:
		" dasturlash, dasturlashga oid darslar, reactjs uzbek tilida, vuejs uzbek tilida, redux uzbek tilida,  academy, bepul dasturlash, rezyume yozish, portfolio,  javascript,  raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari, vuejs darslari, dasturlash darslari, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Dasturlashga oid maqolalar',
		description:
			'Dasturlash haqida yangiliklar, maslahatlar, va dasturlash sohasidagi eng soʻnggi xabarlar. Bizning blogda dasturlashni oʻrganish va rivojlantirish uchun qoʻllanma topishingiz mumkin.',
		type: 'website',
		url: 'https://test-blog.com',
		locale: 'en_EN',
		images: [
			{
				url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq22kijz_4_RbxKO_SQzW5oL9rsux7F0Mbtiv94XIjTDkcveCu-WoJ3K0OrpwW2yMLIc4&usqp=CAU',
			},
		],
		countryName: 'Uzbekistan',
		siteName: 'My blog',
		emails: 'nadirovabdulhaq@gmail.com',
	},
}

export default function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${createRound.variable} ${workSans.variable} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<NextTopLoader />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	)
}
