import HeaderNav from './header-nav'
import Hero from './hero'
import ParallaxCards from './parallax-cards'
import HeroWithMaskedImage from './hero-with-masked-image'

export default function () {
	return (
		<>
			<HeaderNav />

			<main className="bg-c5-sage text-c5-darkgreen overflow-x-hidden">
				<Hero />

				<section id="headline">
					<h2 className="section max-w-3xl text-center text-3xl text-balance">
						HubSpot Ventures partners with ambitious entrepreneurs who are
						redefining how businesses grow and operate.
					</h2>
				</section>

				<ParallaxCards />
				<HeroWithMaskedImage />
			</main>
		</>
	)
}
