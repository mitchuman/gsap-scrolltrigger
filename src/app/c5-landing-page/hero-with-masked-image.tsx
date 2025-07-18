'use client'

import { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function () {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#hero-with-masked-image',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			},
		})

		tl.to('img', {
			opacity: 0,
			duration: 1,
		})
	}, [])

	return (
		<section id="hero-with-masked-image" className="section py-24">
			<div className="grid items-center gap-8 md:grid-cols-2">
				<div>
					<h2 className="text-2xl">Our Approach</h2>
					<p>
						Our philosophy centers on building relationships, not just
						completing rounds. We remain aligned with your interests and provide
						support throughout your journey.
					</p>
					<p>
						Our commitment extends beyond capital to help you navigate our
						ecosystem, surface new opportunities, and create lasting
						partnerships that drive real business outcomes.
					</p>
					<p>
						When you partner with us, you join a selective portfolio of
						innovative companies who actively support each other's growth
						journey.
					</p>
				</div>

				<figure>
					<img
						className="w-full"
						style={{
							mask: `url('/c5/hero-shape.svg') center/contain no-repeat`,
						}}
						src={`https://placedog.net/800/800?random`}
						alt=""
						width={800}
						height={800}
						loading="lazy"
					/>
				</figure>
			</div>
		</section>
	)
}
