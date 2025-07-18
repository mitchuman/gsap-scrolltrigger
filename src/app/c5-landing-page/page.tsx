import HeaderNav from './header-nav'
import Hero from './hero'
import ParallaxCards from './parallax-cards'
import HeroWithMaskedImage from './hero-with-masked-image'
import TiltingSection from './tilting-section'

export default function () {
	return (
		<>
			<HeaderNav />

			<main className="bg-c5-sage text-c5-darkgreen overflow-x-hidden">
				<Hero />

				<section id="headline">
					<h2 className="section max-w-3xl text-center text-3xl text-balance">
						Discover the magic of scroll-driven animations and GSAP plugins to
						create immersive storytelling experiences on the web.
					</h2>
				</section>

				<ParallaxCards />
				<HeroWithMaskedImage />
				<TiltingSection />
			</main>
		</>
	)
}
