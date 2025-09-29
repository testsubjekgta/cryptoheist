"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Twitter, Youtube, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPolicyPage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const showNav = gsap
			.from(".site-header", {
				yPercent: -110,
				paused: true,
				duration: 0.3,
				ease: "power1.inOut",
			})
			.progress(1);

		ScrollTrigger.create({
			start: "top top",
			end: "max",
			onUpdate: (self) => {
				self.direction === -1 ? showNav.play() : showNav.reverse();
			},
		});

		gsap.fromTo(
			".policy-content",
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	const navLinks = [
		{ href: "/#home", label: "Home" },
		{ href: "/#about", label: "About" },
		{ href: "/#online", label: "CryptoHeist Online" },
		{ href: "/#community", label: "Community" },
		{ href: "#market", label: "Marketplace" },
	];

	const otherLinks = [
		{ href: "#whitepaper", label: "Whitepaper" },
		{ href: "/privacy-policy", label: "Privacy Policy" },
		{ href: "/terms-of-use", label: "Terms of Use" },
	];

	const socialLinks = [
		{ href: "https://x.com/cryptoheistsb", icon: X }, // Changed to X icon and placeholder link
		{ href: "#", icon: MessageCircle },
		{ href: "https://www.youtube.com/watch?v=fvt75IM0_xU", icon: Youtube },
	];

	const buyNowLink = { href: "#buy", label: "BUY $HEIST" };

	// --- STYLES FOR POLICY CONTENT ---
	const headingStyle =
		"font-dd text-2xl md:text-3xl text-white font-bold mb-4 mt-8";
	const paragraphStyle =
		"font-pp text-base md:text-lg text-gray-300 leading-relaxed mb-4";
	const listStyle = "list-disc list-inside space-y-2 pl-4 " + paragraphStyle;
	const linkStyle = "text-primary hover:underline";

	return (
		<main className="bg-black text-white">
			{/* --- NAVBAR --- */}
			<header className="site-header fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm z-50 border-b border-white/10">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-24 lg:px-24">
						<div className="flex items-center space-x-10">
							<Link href="/#home" className="flex-shrink-0">
								<Image
									src="/logo.png"
									alt="Crypto Heist Logo"
									width={56}
									height={56}
									className="h-14 w-auto"
								/>
							</Link>
							<nav className="hidden lg:flex items-center space-x-8">
								{navLinks.map((link) => (
									<Link
										key={link.label}
										href={link.href}
										className="font-pp text-base text-gray-300 hover:text-white transition-colors duration-300 relative group"
									>
										{link.label}
										<span className="animated-underline absolute bottom-[-6px] left-0 w-full h-0.5 bg-white"></span>
									</Link>
								))}
							</nav>
						</div>
						<div className="flex items-center space-x-4">
							<a
								href={buyNowLink.href}
								className="hidden lg:block bg-primary text-white border-white border-2 font-pp font-bold px-8 py-3 rounded-md hover:text-gray-300 hover:border-gray-300 transition-colors duration-300 text-base"
							>
								{buyNowLink.label}
							</a>
							<button
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="lg:hidden p-2 text-gray-300 hover:text-white focus:outline-none relative h-8 w-8"
								aria-label="Toggle menu"
							>
								<X
									size={28}
									className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
										isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
									}`}
								/>
								<Menu
									size={28}
									className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out ${
										isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
									}`}
								/>
							</button>
						</div>
					</div>
				</div>
				<div
					className={`lg:hidden absolute top-24 left-0 w-full bg-black/95 backdrop-blur-md transition-transform duration-500 ease-in-out ${
						isMenuOpen
							? "transform translate-x-0"
							: "transform -translate-x-full"
					}`}
				>
					<nav className="flex flex-col items-center p-8">
						{navLinks.map((link) => (
							<Link
								key={link.label}
								href={link.href}
								onClick={() => setIsMenuOpen(false)}
								className="font-pp text-xl text-gray-200 hover:text-primary transition-colors duration-300 py-4 w-full text-center"
							>
								{link.label}
							</Link>
						))}
						<a
							href={buyNowLink.href}
							onClick={() => setIsMenuOpen(false)}
							className="w-full text-center bg-primary text-white border-white border-2 font-pp font-bold mt-4 px-6 py-4 rounded-md hover:text-gray-300 hover:border-gray-300 transition-colors duration-300"
						>
							{buyNowLink.label}
						</a>
					</nav>
				</div>
			</header>

			{/* --- PRIVACY POLICY CONTENT SECTION --- */}
			<div className="bg-gradient-to-b from-[#1e151c] to-black">
				<section className="policy-content container mx-auto px-4 lg:px-24 py-32 md:py-40">
					<div className="max-w-4xl mx-auto">
						<h1 className="font-dd text-5xl md:text-7xl font-bold text-white uppercase text-center">
							PRIVACY POLICY
						</h1>
						<p className="font-pp text-lg text-gray-400 mt-4 text-center">
							Effective date: July 25, 2025
						</p>

						<div className="mt-12 md:mt-16">
							<p className={paragraphStyle}>
								Crypto Heist: Solana Beach ("us", "we", or "our") operates the
								website. This page informs you of our policies regarding the
								collection, use, and disclosure of personal data when you use
								our Service and the choices you have associated with that data.
								We use your data to provide and improve the Service. By using
								the Service, you agree to the collection and use of information
								in accordance with this policy. Unless otherwise defined in this
								Privacy Policy, terms used in this Privacy Policy have the same
								meanings as in our Terms and Conditions.
							</p>

							<h2 className={headingStyle}>
								I. INFORMATION COLLECTION AND USE
							</h2>
							<p className={paragraphStyle}>
								We collect several different types of information for various
								purposes to provide and improve our Service to you. If you do
								not use (log in to) the service for two years all your personal
								data will be deleted.
							</p>
							<h3 className="font-dd text-xl md:text-2xl text-white font-bold mb-3 mt-6">
								Types of Data Collected
							</h3>

							<h4 className="font-pp text-lg font-bold text-gray-200 mt-4 mb-2">
								1. Personal Data
							</h4>
							<p className={paragraphStyle}>
								While using our Service, we may ask you to provide us with
								certain personally identifiable information that can be used to
								contact or identify you ("Personal Data"). Personally
								identifiable information may include, but is not limited to:
							</p>
							<ul className={listStyle}>
								<li>Email address Cookies and Usage Data</li>
							</ul>

							<h4 className="font-pp text-lg font-bold text-gray-200 mt-4 mb-2">
								2. Usage Data
							</h4>
							<p className={paragraphStyle}>
								We may also collect information that your browser sends whenever
								you visit our Service or when you access the Service by or
								through a mobile device ("Usage Data"). This Usage Data may
								include information such as your computer's Internet Protocol
								address (e.g. IP address), browser type, browser version, the
								pages of our Service that you visit, the time and date of your
								visit, the time spent on those pages, unique device identifiers
								and other diagnostic data. When you access the Service by or
								through a mobile device, this Usage Data may include information
								such as the type of mobile device you use, your mobile device
								unique ID, the IP address of your mobile device, your mobile
								operating system, the type of mobile Internet browser you use,
								unique device identifiers and other diagnostic data.
							</p>

							<h4 className="font-pp text-lg font-bold text-gray-200 mt-4 mb-2">
								3. Tracking Cookies Data
							</h4>
							<p className={paragraphStyle}>
								We use cookies and similar tracking technologies to track the
								activity on our Service and hold certain information. Cookies
								are files with small amount of data which may include an
								anonymous unique identifier. Cookies are sent to your browser
								from a website and stored on your device. Tracking technologies
								also used are beacons, tags, and scripts to collect and track
								information and to improve and analyze our Service. You can
								instruct your browser to refuse all cookies or to indicate when
								a cookie is being sent. However, if you do not accept cookies,
								you may not be able to use some portions of our Service.
							</p>
							<p className={paragraphStyle}>Examples of Cookies we use:</p>
							<ul className={listStyle}>
								<li>
									<strong>Session Cookies.</strong> We use Session Cookies to
									operate our Service.
								</li>
								<li>
									<strong>Preference Cookies.</strong> We use Preference Cookies
									to remember your preferences and various settings.
								</li>
								<li>
									<strong>Security Cookies.</strong> We use Security Cookies for
									security purposes.
								</li>
							</ul>

							<h2 className={headingStyle}>II. USE OF DATA</h2>
							<p className={paragraphStyle}>
								Crypto Heist: Solana Beach uses the collected data for various
								purposes:
							</p>
							<ul className={listStyle}>
								<li>To provide and maintain the Service</li>
								<li>To notify you about changes to our Service</li>
								<li>
									To allow you to participate in interactive features of our
									Service when you choose to do so
								</li>
								<li>To provide customer care and support</li>
								<li>
									To provide analysis or valuable information so that we can
									improve the Service
								</li>
								<li>To monitor the usage of the Service</li>
								<li>To detect, prevent and address technical issues</li>
							</ul>

							<h2 className={headingStyle}>III. TRANSFER OF DATA</h2>
							<p className={paragraphStyle}>
								Your information, including Personal Data, may be transferred to
								— and maintained on — computers located outside of your state,
								province, country or other governmental jurisdiction where the
								data protection laws may differ than those from your
								jurisdiction. If you are located outside United States and
								choose to provide information to us, please note that we
								transfer the data, including Personal Data, to United States and
								process it there. Your consent to this Privacy Policy followed
								by your submission of such information represents your agreement
								to that transfer. Crypto Heist: Solana Beach will take all steps
								reasonably necessary to ensure that your data is treated
								securely and in accordance with this Privacy Policy and no
								transfer of your Personal Data will take place to an
								organization or a country unless there are adequate controls in
								place including the security of your data and other personal
								information.
							</p>

							<h2 className={headingStyle}>IV. DISCLOSURE OF DATA</h2>
							<h3 className="font-dd text-xl md:text-2xl text-white font-bold mb-3 mt-6">
								Legal Requirements
							</h3>
							<p className={paragraphStyle}>
								Crypto Heist: Solana Beach may disclose your Personal Data in
								the good faith belief that such action is necessary to:
							</p>
							<ul className={listStyle}>
								<li>To comply with a legal obligation</li>
								<li>
									To protect and defend the rights or property of Crypto Heist:
									Solana Beach
								</li>
								<li>
									To prevent or investigate possible wrongdoing in connection
									with the Service
								</li>
								<li>
									To protect the personal safety of users of the Service or the
									public
								</li>
								<li>To protect against legal liability</li>
							</ul>

							<h2 className={headingStyle}>V. SECURITY OF DATA</h2>
							<p className={paragraphStyle}>
								The security of your data is important to us, but remember that
								no method of transmission over the Internet, or method of
								electronic storage is 100% secure. While we strive to use
								commercially acceptable means to protect your Personal Data, we
								cannot guarantee its absolute security.
							</p>

							<h2 className={headingStyle}>VI. SERVICE PROVIDERS</h2>
							<p className={paragraphStyle}>
								We may employ third party companies and individuals to
								facilitate our Service ("Service Providers"), to provide the
								Service on our behalf, to perform Service-related services or to
								assist us in analyzing how our Service is used. These third
								parties have access to your Personal Data only to perform these
								tasks on our behalf and are obligated not to disclose or use it
								for any other purpose.
							</p>
							<h3 className="font-dd text-xl md:text-2xl text-white font-bold mb-3 mt-6">
								Analytics
							</h3>
							<p className={paragraphStyle}>
								We may use third-party Service Providers to monitor and analyze
								the use of our Service.
							</p>

							<h2 className={headingStyle}>VII. LINKS TO OTHER SITES</h2>
							<p className={paragraphStyle}>
								Our Service may contain links to other sites that are not
								operated by us. If you click on a third party link, you will be
								directed to that third party's site. We strongly advise you to
								review the Privacy Policy of every site you visit. We have no
								control over and assume no responsibility for the content,
								privacy policies or practices of any third party sites or
								services.
							</p>

							<h2 className={headingStyle}>VIII. CHILDREN'S PRIVACY</h2>
							<p className={paragraphStyle}>
								Our Service does not address anyone under the age of 18
								("Children"). We do not knowingly collect personally
								identifiable information from anyone under the age of 18. If you
								are a parent or guardian and you are aware that your Children
								has provided us with Personal Data, please contact us. If we
								become aware that we have collected Personal Data from children
								without verification of parental consent, we take steps to
								remove that information from our servers.
							</p>

							<h2 className={headingStyle}>
								IX. CHANGES TO THIS PRIVACY POLICY
							</h2>
							<p className={paragraphStyle}>
								We may update our Privacy Policy from time to time. We will
								notify you of any changes by posting the new Privacy Policy on
								this page. We will let you know via email and/or a prominent
								notice on our Service, prior to the change becoming effective
								and update the "effective date" at the top of this Privacy
								Policy. You are advised to review this Privacy Policy
								periodically for any changes. Changes to this Privacy Policy are
								effective when they are posted on this page.
							</p>

							<h2 className={headingStyle}>X. CONTACT US</h2>
							<p className={paragraphStyle}>
								If you have any questions about this Privacy Policy, please
								contact us:
							</p>
							<ul className={listStyle}>
								<li>
									Email:{" "}
									<a
										href="mailto:cryptoheistsb@gmail.com"
										className={linkStyle}
									>
										cryptoheistsb@gmail.com
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</div>

			{/* --- FOOTER --- */}
			<footer className="site-footer border-t border-white/10 py-12 md:py-20 lg:px-24">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
						<div className="col-span-1 md:col-span-3 lg:col-span-1">
							<Link href="/#home" className="inline-block">
								<Image
									src="/logo.png"
									alt="Crypto Heist Logo"
									width={120}
									height={120}
								/>
							</Link>
						</div>
						<div className="col-span-1">
							<h4 className="font-dd text-lg text-white mb-4">QUICK LINKS</h4>
							<ul className="space-y-3">
								{navLinks.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="font-pp text-gray-400 hover:text-white transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="col-span-1">
							<h4 className="font-dd text-lg text-white mb-4">OTHER</h4>
							<ul className="space-y-3">
								{otherLinks.map((link) => (
									<li key={link.label}>
										<Link
											href={link.href}
											className="font-pp text-gray-400 hover:text-white transition-colors"
										>
											{link.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
						<div className="col-span-1">
							<h4 className="font-dd text-lg text-white mb-4">SOCIAL MEDIA</h4>
							<div className="flex flex-col">
								<div className="flex items-center space-x-4 mb-8">
									{socialLinks.map((link, index) => (
										<a
											key={index}
											href={link.href}
											className="text-gray-400 hover:text-white transition-colors"
										>
											<link.icon size={24} />
										</a>
									))}
								</div>
								<img src="/solana.svg" alt="Solana Logo" className="w-36" />
							</div>
						</div>
					</div>
					<div className="text-center text-gray-500 font-pp text-sm mt-16 border-t border-white/10 pt-8">
						&copy; {new Date().getFullYear()} Crypto Heist. All rights reserved.
					</div>
				</div>
			</footer>
		</main>
	);
}
