'use client'

import ModeTogle from '@/components/shared/mode-togle'
import Link from 'next/link'
import GlobalSearch from './global-search'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Mobile from './mobile'
import { navLinks } from '@/constants'

function Navbar() {
	const pathname = usePathname()
	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background '>
			<div className='container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* logo */}
				<Link href={'/'}>
					<h1 className='text-4xl font-createRound '>My blog </h1>
				</Link>
				{/* links  */}
				<div className='gap-2 hidden md:flex'>
					{navLinks.map(nav => (
						<Link
							key={nav.route}
							href={nav.route}
							className={cn(
								'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
								pathname === nav.route && 'text-blue-400'
							)}
						>
							{nav.name}
						</Link>
					))}
				</div>
				{/* search */}
				<div className='flex items-center gap-1'>
					<GlobalSearch />
					<ModeTogle />
					<Mobile />
				</div>
			</div>
		</div>
	)
}

export default Navbar
