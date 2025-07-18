'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import HeroScrollArrow from './hero-scroll-arrow'
import { cn } from '@/lib/utils'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function () {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#hero',
				start: 'top top',
				end: 'bottom top',
				scrub: true,
				pin: true,
				anticipatePin: 1,
			},
		})

		// Set initial opacity to 0 for header elements
		gsap.set('.header-link', { opacity: 0 })
		gsap.set('#header-logo', { opacity: 0 })

		tl.to('#hero img', {
			scale: 1,
			rotate: '0deg',
			duration: 5,
		})
			.to(
				'.stretching-line',
				{
					width: '4ch',
					duration: 4,
				},
				'<',
			)
			.to(
				'#hero-scroll-arrow',
				{
					opacity: 0,
					duration: 2,
				},
				3,
			)

		// Separate non-scrubbed animations for header elements
		ScrollTrigger.create({
			trigger: '#hero',
			start: 'top top',
			toggleActions: 'play none none reverse',
			animation: gsap.to('.header-link', { opacity: 1, duration: 0.5 }),
		})

		ScrollTrigger.create({
			trigger: '#hero',
			start: '50% top',
			toggleActions: 'play none none reverse',
			animation: gsap.to('#header-logo', { opacity: 1, duration: 0.5 }),
		})

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	return (
		<section
			id="hero"
			className="text-c5-sage grid min-h-dvh place-content-center text-center *:col-span-full *:row-span-full *:m-auto"
		>
			<Image
				style={{ scale: 4, rotate: '15deg' }} // initial state
				src="/c5/hero-shape.svg"
				alt=""
				width={698}
				height={659}
				draggable={false}
				unoptimized
			/>

			<div className="relative">
				<div className="flex items-center">
					<Letter className="rounded">A</Letter>
					<span
						className="stretching-line h-[2px] origin-center bg-current"
						style={{ width: '50vw' }} // initial state
					></span>
					<Letter className="rounded-full">B</Letter>
					<b className="ml-4 max-w-min text-left leading-none">
						Scroll Adventures
					</b>
				</div>

				<HeroScrollArrow />
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
