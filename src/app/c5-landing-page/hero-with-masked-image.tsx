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

		tl.to('#hero-with-masked-image figure', {
			rotation: 90,
			duration: 1,
			transformOrigin: 'center center',
		}).to(
			'#hero-with-masked-image figure img',
			{
				rotate: -90,
				duration: 1,
			},
			'<',
		)
	}, [])

	return (
		<section id="hero-with-masked-image" className="section py-24">
			<div className="grid items-center gap-8 md:grid-cols-2">
				<div className="prose mx-auto max-w-lg text-xl">
					<h2 className="text-3xl">Our Approach</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iste
						obcaecati labore ipsum eos aliquid laudantium autem sunt ad! Eaque,
						quae corrupti numquam illo ullam et dolore nostrum neque esse
						quibusdam saepe doloremque quidem sint atque quasi ut cum natus.
					</p>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa rem
						sed minus nobis sequi, reiciendis modi quam sit id debitis!
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
						nobis atque placeat dolores numquam mollitia, quae vitae error illo
						autem. Ex molestias aperiam in explicabo excepturi dolores vitae
						sapiente ipsam!
					</p>
				</div>

				<figure
					className="relative overflow-hidden"
					style={{
						mask: `url('/c5/hero-shape.svg') center/contain no-repeat`,
					}}
				>
					<img
						className="w-full scale-110"
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
