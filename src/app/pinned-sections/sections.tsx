'use client'

import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

export default function () {
	const ref = useRef<HTMLDivElement>(null)

	useLayoutEffect(() => {
		if (!ref.current) return

		gsap.registerPlugin(ScrollTrigger)

		const sections = gsap.utils.toArray('.section') as HTMLElement[]

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.sections',
				start: 'center center',
				end: () => `+=${sections.length * window.innerHeight * 0.5}`,
				scrub: 3,
				pin: true,
				pinSpacing: true,
				markers: true,
			},
		})

		sections.forEach((section, index) => {
			if (index > 0) {
				tl.fromTo(
					section,
					{ opacity: 0, y: 100 },
					{ opacity: 1, y: 0, duration: 1 },
					index,
				).to(sections[index - 1], { opacity: 0, duration: 1 }, index)
			}
		})

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
		}
	}, [])

	return (
		<div ref={ref} className="sections relative h-screen overflow-hidden">
			{Array.from({ length: 6 }).map((_, index) => (
				<section
					key={index}
					className={cn(
						'section bg-background absolute inset-0 mx-auto grid max-w-7xl items-center gap-8 text-center md:grid-cols-2',
						index > 0 && 'opacity-0',
					)}
				>
					<div>
						<h2 className="font-bold">Section {index + 1}</h2>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>

					<figure className={cn(index % 2 > 0 && 'md:order-first')}>
						<img
							className="w-full"
							src={`https://placedog.net/800/800?random=${index + 1}`}
							alt=""
							width={800}
							height={800}
							loading="lazy"
						/>
					</figure>
				</section>
			))}
		</div>
	)
}
