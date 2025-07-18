'use client'

import { useEffect } from 'react'
import Image from 'next/image'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function () {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#working-with-us',
				start: 'top bottom',
				end: 'bottom top',
				scrub: true,
			},
		})

		tl.fromTo(
			'#working-with-us img',
			{
				rotate: '-8deg',
			},
			{
				rotate: '8deg',
			},
		)
	})

	return (
		<section id="working-with-us" className="section text-c5-sage text-center">
			<div className="relative grid *:col-span-full *:row-span-full *:m-auto">
				<Image
					className=""
					src="/c5/tilt-bg.svg"
					alt=""
					width={1349}
					height={633}
					unoptimized
				/>

				<div className="relative space-y-12">
					<h2 className="text-3xl">Working With Us</h2>

					<div>
						<p>
							<b>Access to</b> our global ecosystem of customers and partners
						</p>
						<p>
							Integration and App Marketplace <b>support</b>
						</p>
						<p>
							<b>Direct access</b> to seasoned operators and domain experts
						</p>
						<p>
							<b>Lorem, ipsum dolor.</b> that share insights and opens doors
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
