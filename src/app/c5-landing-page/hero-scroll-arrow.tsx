import { HiMiniChevronDown } from 'react-icons/hi2'
import { cn } from '@/lib/utils'
import css from './hero-scroll-arrow.module.css'

export default function () {
	return (
		<a
			href="#headline"
			id="hero-scroll-arrow"
			className="absolute top-full left-1/2 mt-12 -translate-x-1/2"
		>
			<HiMiniChevronDown className={cn(css.arrow, 'text-3xl text-[#FF4800]')} />
		</a>
	)
}
