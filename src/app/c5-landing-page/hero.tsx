'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function () {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		// TODO
	}, [])

	return (
		<section className="text-c5-sage grid min-h-dvh place-content-center text-center *:col-span-full *:row-span-full *:m-auto">
			<Image
				src="/c5/hero-shape.svg"
				alt=""
				width={698}
				height={659}
				unoptimized
			/>

			<div className="relative flex items-center">
				<Letter className="rounded">H</Letter>
				<span className="stretching-line h-[2px] min-w-8 bg-current"></span>
				<Letter className="rounded-full">V</Letter>
				<b className="ml-4 max-w-min leading-none">HubSpot Ventures</b>
			</div>
		</section>
	)
}

function Letter({ children, className }: React.ComponentProps<'b'>) {
	return (
		<b
			className={cn(
				'grid size-[1.5lh] place-content-center border-3 p-2',
				className,
			)}
		>
			{children}
		</b>
	)
}
