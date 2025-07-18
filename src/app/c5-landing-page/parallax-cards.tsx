'use client'

import { useEffect } from 'react'
import { cn } from '@/lib/utils'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function () {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#how-we-invest',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
				markers: true,
			},
		})

		tl.from('#focus-area', {
			translateY: '8rem',
			duration: 3,
		})
	})

	return (
		<section id="how-we-invest" className="section space-y-12 py-24">
			<h2 className="text-center text-3xl">How We Invest</h2>

			<div className="grid gap-1 md:grid-cols-2">
				<Card>
					<ul>
						<li>$500K - $5M initial investments</li>
						<li>Independent investment team with fast decision making</li>
						<li>Seed through Series B</li>
						<li>Geography lorem ipsum dolor </li>
					</ul>
				</Card>
				<Card id="focus-area">
					<p>
						<b>Focus Areas</b>
					</p>
					<ul>
						<li>Intelligent Apps for SMBs</li>
						<li>FinTech</li>
						<li>AI & Agent Development</li>
						<li>Data Infrastructure </li>
					</ul>
				</Card>
			</div>
		</section>
	)
}

function Card({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'flex flex-col justify-center rounded-xl bg-[#A9C1AF] px-8 py-6',
				className,
			)}
			{...props}
		/>
	)
}
