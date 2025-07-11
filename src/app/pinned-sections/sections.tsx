'use client'

import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

export default function () {
	const ref = useRef<HTMLDivElement>(null)
	const [activeSection, setActiveSection] = useState(0)
	const timelineRef = useRef<gsap.core.Timeline | null>(null)

	useLayoutEffect(() => {
		if (!ref.current) return

		gsap.registerPlugin(ScrollTrigger)

		const sections = gsap.utils.toArray('.section') as HTMLElement[]

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.sections',
				start: 'center center',
				end: () => `+=${sections.length * window.innerHeight * 0.5}`,
				scrub: 2,
				pin: true,
				pinSpacing: true,
				markers: true,
			},
		})

		timelineRef.current = tl

		sections.forEach((section, index) => {
			if (index > 0) {
				tl.fromTo(
					section,
					{ opacity: 0, y: 100, pointerEvents: 'none' },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						pointerEvents: 'auto',
						onStart: () => setActiveSection(index),
						onReverseComplete: () => setActiveSection(index - 1),
					},
					index,
				).to(
					sections[index - 1],
					{
						opacity: 0,
						duration: 1,
						onReverseComplete: () => setActiveSection(index - 1),
					},
					index,
				)
			}
		})

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
			timelineRef.current = null
		}
	}, [])

	const scrollToSection = (sectionIndex: number) => {
		const trigger = ScrollTrigger.getById('sections-trigger')
		if (!trigger) return

		let targetScroll
		if (sectionIndex === 0) {
			targetScroll = trigger.start
		} else {
			const sectionHeight = window.innerHeight * 0.5
			targetScroll = trigger.start + (sectionIndex + 1) * sectionHeight
		}

		window.scrollTo({
			top: targetScroll,
			behavior: 'smooth',
		})
	}

	return (
		<>
			<div ref={ref} className="sections relative h-screen overflow-hidden">
				{Array.from({ length: 6 }).map((_, index) => (
					<section
						id={`section-${index + 1}`}
						className={cn(
							'section bg-background absolute inset-0 mx-auto grid max-w-7xl items-center gap-8 text-center md:grid-cols-2',
							index > 0 && 'opacity-0',
						)}
						key={index}
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

			<nav className="fixed top-1/2 left-4 z-10 flex -translate-y-1/2 flex-col gap-3">
				{Array.from({ length: 6 }).map((_, index) => (
					<button
						onClick={() => scrollToSection(index)}
						className={cn(
							'h-3 w-3 rounded-full border transition-colors duration-300',
							activeSection === index
								? 'border-black bg-black'
								: 'border-gray-300 bg-gray-300 hover:border-gray-400 hover:bg-gray-400',
						)}
						aria-label={`Go to section ${index + 1}`}
						key={index}
					/>
				))}
			</nav>
		</>
	)
}
