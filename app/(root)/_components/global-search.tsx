import { Badge } from '@/components/ui/badge'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { popularCategories, popularTags } from '@/constants'
import { getSearchBlogs } from '@/service/blog.service'
import { IBlog } from '@/types'
import { Loader2, Minus, Search } from 'lucide-react'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { debounce } from 'lodash'
import SearchCard from '@/components/cards/search'
import { Separator } from '@/components/ui/separator'

function GlobalSearch() {
	const [isLoading, setIsloading] = useState(false)
	const [blogs, setBlogs] = useState<IBlog[]>([])

	const handleSearch = async (e: ChangeEvent<HTMLInputElement>) => {
		const text = e.target.value.toLocaleLowerCase()

		if (text && text.length > 2) {
			setIsloading(true)
			const data = await getSearchBlogs(text)
			setBlogs(data)
			setIsloading(false)
		} else {
			setBlogs([])
			setIsloading(false)
		}
	}

	const debounceSearch = debounce(handleSearch, 500)

	return (
		<Drawer>
			<DrawerTrigger>
				{' '}
				<div className='flex items-center gap-1 px-3  hover:bg-blue-400/20 py-1 px3 cursor-pointer rounded-sm transition-colors'>
					<span className='hidden md:flex'>Search </span>
					<Search className='w-4 h-4' />
				</div>
			</DrawerTrigger>
			<DrawerContent>
				<div className='container max-w-6xl mx-auto py-12'>
					<Input
						className='bg-secondary '
						placeholder='Type to search blog...'
						onChange={debounceSearch}
						disabled={isLoading}
					/>
					{isLoading && <Loader2 className='animate-spin mt-4 mx-auto' />}
					{blogs.length ? (
						<div className='text-2xl font-createRound mt-8'>
							{blogs.length} Result found
						</div>
					) : null}
					<div className='grid grid-cols-2 md:grid-cols-4  lg:grid-cols-6 mt-2 '>
						{blogs &&
							blogs.map(blog => <SearchCard key={blog.slug} {...blog} />)}
					</div>
					{blogs.length ? <Separator className='mt-3' /> : null}
					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex items-center gap-2'>
							<p className='font-createRound text-2xl  '>
								See posts by categories{' '}
							</p>
							<Minus />
							<Link href={'/category'}>
								<DrawerClose className='text-blue-500 underline hover:opacity-90 '>
									See all
								</DrawerClose>
							</Link>
						</div>
						<div className='flex flex-wrap gap-2'>
							{popularCategories.map(item => (
								<Badge key={item.slug} variant={'secondary'}>
									<Link key={item.slug} href={`/category/${item.slug}`}>
										<DrawerClose>{item.name}</DrawerClose>
									</Link>
								</Badge>
							))}
						</div>
					</div>
					<div className='flex flex-col space-y-2 mt-4'>
						<div className='flex items-center gap-2'>
							<p className='font-createRound text-2xl  '>See posts by tag </p>
							<Minus />
							<Link href={'/tags'}>
								{' '}
								<DrawerClose className='text-blue-500 underline hover:opacity-90 '>
									See all
								</DrawerClose>
							</Link>
						</div>{' '}
						<div className='flex flex-wrap gap-2'>
							{popularTags.map(item => (
								<Link key={item.slug} href={`/tags/${item.slug}`}>
									<Badge key={item.slug} variant={'secondary'}>
										<DrawerClose>{item.name}</DrawerClose>
									</Badge>
								</Link>
							))}
						</div>
					</div>{' '}
				</div>
			</DrawerContent>
		</Drawer>
	)
}

export default GlobalSearch
