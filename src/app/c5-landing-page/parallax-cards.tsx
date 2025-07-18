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
			},
		})

		tl.fromTo(
			'#focus-area',
			{
				translateY: '10rem',
				duration: 3,
			},
			{
				translateY: '-2rem',
				duration: 3,
			},
		)
	})

	return (
		<section id="how-we-invest" className="section space-y-12 py-24">
			<h2 className="text-center text-3xl">Lorem ipsum dolor</h2>

			<div className="grid gap-1 md:grid-cols-2">
				<Card>
					<ul>
						<li>Dynamic, interactive stories powered by scrolly-telling</li>
						<li>Seamless animations using GSAP and ScrollTrigger</li>
						<li>Engaging user experiences across web platforms</li>
						<li>Flexible integration for diverse creative projects</li>
					</ul>
				</Card>
				<Card id="focus-area">
					<p>
						<b>Focus Areas</b>
					</p>
					<ul>
						<li>Immersive Scrolly-Telling Experiences</li>
						<li>Advanced Animation with GSAP Plugins</li>
						<li>Interactive Storytelling for the Web</li>
						<li>Seamless Integration of Motion and Content</li>
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
				'prose flex flex-col justify-center rounded-xl bg-[#A9C1AF] px-8 py-6',
				className,
			)}
			{...props}
		/>
	)
}
