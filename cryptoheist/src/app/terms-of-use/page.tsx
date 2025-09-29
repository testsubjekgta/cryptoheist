"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Twitter, Youtube, MessageCircle } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TermsOfUsePage() {
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

  // --- STYLES FOR CONTENT ---
  const headingStyle =
    "font-dd text-2xl md:text-3xl text-white font-bold mb-4 mt-8";
  const paragraphStyle =
    "font-pp text-base md:text-lg text-gray-300 leading-relaxed mb-4";
  const listStyle = "list-disc list-inside space-y-2 pl-4 " + paragraphStyle;
  const linkStyle = "text-primary hover:underline";
  const uppercaseParagraphStyle = paragraphStyle + " uppercase";

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

      {/* --- TERMS OF USE CONTENT SECTION --- */}
      <div className="bg-gradient-to-b from-[#1e151c] to-black">
        <section className="policy-content container mx-auto px-4 lg:px-24 py-32 md:py-40">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-dd text-5xl md:text-7xl font-bold text-white uppercase text-center">
              TERM OF USE
            </h1>
            <p className="font-pp text-lg text-gray-400 mt-4 text-center">
              Last Updated: July 25, 2025
            </p>

            <div className="mt-12 md:mt-16">
              <h2 className={headingStyle}>ACCEPTANCE OF THE TERMS OF USE</h2>
              <p className={paragraphStyle}>
                These terms of use are entered into by and between You and
                Crypto Heist: Solana Beach (“Company”, “we” or “us”). The
                following terms and conditions, together with any documents they
                expressly incorporate by reference (collectively, these “Terms
                of Use”), govern your access to and use of the website and
                associated applications located at or linked to from (the
                “Website”), as well as any white label solutions, applications,
                content, functionality, and services offered on or through
                Crypto Heist: Solana Beach, PC platform versions of the game
                “Crypto Heist: Solana Beach” (collectively, the “Platform”)
                along with any other games and platform versions as Crypto
                Heist: Solana Beach may make available to you from time to time.
              </p>
              <p className={paragraphStyle}>
                Please read the Terms of Use carefully before you start to use
                the Platform. By using the Platform, or by clicking to accept
                the Terms of Use when this option is made available to you, you
                agree to be bound and abide by these Terms of Use and our
                Privacy Policy, found at Privacy Policy incorporated herein by
                reference. If you do not want to agree to these Terms of Use or
                the Privacy Policy, you must not access or use the Platform.
              </p>
              <p className={paragraphStyle}>
                All information we collect on this Platform is subject to our
                Privacy Policy. By using the Platform, you consent to all
                actions taken by us with respect to your information in
                compliance with the Privacy Policy.The Platform is an online
                gaming ecosystem that includes (i) a cryptographic wallet
                software used in and part of (ii) one or more interactive games.
                Broadly speaking, each game or application within the Platform
                is a distributed application that is running on the Solana
                Network, using specially-developed blockchain programs which
                enable users to interact with digitally rendered assets and
                items within the Platform. The Platform’s distributed technology
                also enables users to own and transfer other digital assets
                within each game. These assets can then be visualized on a
                website that the user can interact with or bought and sold among
                users.
              </p>
              <p className={paragraphStyle}>
                Any information we provide on the Platform, such as pricing,
                listing, and sourcing is for informational purposes. Also,
                Crypto Heist: Solana Beach has no control over and provides no
                guarantees related to: the existence, accuracy, quality, safety
                or legality of items advertised or user content; the ability or
                legal standing of sellers to sell items; the ability of buyers
                to pay for items; or that any user will complete a transaction
                or return an item. Items for sale can include physical goods and
                services, as well as digital items such as non-fungible tokens
                (“NFTs”), blockchain programs, cryptocurrencies, and other
                digital-based goods (collectively, “Digital Assets”). Some
                Digital Assets may relate or interface with decentralized
                applications (“Dapps”) and the Solana blockchain.
              </p>
              <p className={paragraphStyle}>
                The Platform is offered and available to authorized users who
                are 18 years of age or older who are acting in compliance with
                applicable law and who are not in breach of this agreement or
                legal obligations to third parties. The Platform is unavailable
                to users who have previously had their account disabled by
                Crypto Heist: Solana Beach for violations of these Terms of Use
                or other applicable policies. If the user is an organization,
                you affirm you have the right, power, and authority to enter
                into this agreement on behalf of, and to bind, said
                organization. If you do not agree to the provisions of these
                Terms of Use, you must not use the Platform or any of our
                services. By using this Platform, you represent and warrant that
                you are of legal age to form a binding contract with Crypto
                Heist: Solana Beach and meet the foregoing eligibility
                requirements. You represent that you are legally permitted to
                use the Platform in your jurisdiction including owning, buying,
                selling or other transacting in Digital Assets and interacting
                with the Platform in any reasonably foreseeable way. If you do
                not meet all of these requirements, you must not access or use
                the Platform.
              </p>
              <p className={paragraphStyle}>
                Without limiting the foregoing, by using our Platform, you
                acknowledge and understand that laws regarding Digital Assets
                may vary from jurisdiction to jurisdiction, and it is your
                obligation alone to ensure that you fully comply with any law,
                regulation or directive, relevant to your jurisdiction with
                regard to the use of our Platform. You further represent and
                warrant that you will not use the Platform if the laws of your
                country of residency prohibit you from doing so in accordance
                with these Terms of Use. For the avoidance of doubt, the ability
                to access our Platform does not necessarily mean that the
                Platform, or your activities through it, are legal under the
                laws, regulations or directives relevant to your jurisdiction.
                All aspects of the Platform, or the services made available
                through our Platform, may not be available to all users, and we
                reserve the right to assess or reassess at any time your
                eligibility to use all or part of our Platform. The availability
                of our Platform does not constitute, and may not be used for the
                purposes of, an offer or solicitation to anyone in any
                jurisdiction in which such offer or solicitation is not
                authorized, or to any person to whom it is unlawful to make such
                an offer or solicitation.
              </p>
              <p className={paragraphStyle}>
                By accessing or using the Platform, you acknowledge that the
                game is still in open beta, and thus is subject to changes
                without prior notice and explicitly agree that the blockchain
                programs built into the Dapps that reside on the Platform and
                services are legally binding and enforceable upon you and the
                contract counterparty.
              </p>

              <h2 className={headingStyle}>LICENSE AND ACCESS</h2>
              <p className={paragraphStyle}>
                Subject to your compliance with any terms required to access
                particular functionality or third-party offerings (“Service
                Terms”) these Terms of Use, and your payment of any applicable
                fees, we grant you a limited, non-exclusive, non-transferable,
                non-sublicensable license to access and make personal use of the
                Platform and related services. This license does not include any
                resale or commercial use of the Platform data, or its contents;
                any collection and use of any software information,
                descriptions, or prices; any derivative use of any service or
                its contents; any downloading, copying, or other use of account
                information for the benefit of any third party; or any use of
                framing, data mining, robots, or similar data gathering,
                viewing, and extraction tools. All rights not expressly granted
                to you in these Terms of Use or any Service Terms are reserved
                and retained by Crypto Heist: Solana Beach or its licensors,
                suppliers, publishers, rightsholders, or other content
                providers. No portion of the Platform may be reproduced,
                duplicated, copied, sold, resold, visited, or otherwise
                exploited for any commercial purpose without Crypto Heist:
                Solana Beach’s express written consent. You may not frame or
                utilize framing techniques to enclose any trademark, logo, or
                other proprietary information (including images, text, page
                layout, or form) of the Platform without Crypto Heist: Solana
                Beach’s express written consent. You may not use any meta tags
                or any other “hidden text” utilizing our name or trademarks
                without our express written consent. You may use the Platform
                only as permitted by law. The licenses granted by us terminate
                if you do not comply with these Terms of Use or any Service
                Terms.
              </p>

              <h2 className={headingStyle}>NFT LICENSE</h2>
              <p className={paragraphStyle}>
                Some Digital Assets sold or created on the Platform may include
                NFTs. When obtaining, selling, or purchasing an NFT, you agree
                and understand what characteristics NFTs have and how the
                following terms apply to their sale. An NFT is a digital tool
                that can, but does not always, represent real-world objects such
                as photographs, videos, writings, or music. NFTs are usually
                built using similar technology to digital currencies. But, while
                digital currencies are usually fungible, NFTs usually are not.
                Each NFT is coded into a blockchain and contains built-in
                methods for evidence of authentication and proof of ownership.
                You further understand that blockchain transactions are usually
                not reversible. You understand that NFTs and other Digital
                Assets may only exist by virtue of the ownership record
                maintained on a blockchain, and further that blockchain programs
                are conducted and occur on decentralized ledgers. Crypto Heist:
                Solana Beach has no control over and makes no guarantees or
                promises with respect to such blockchain programs or the
                functioning of such blockchain or the persistence, or lack
                thereof, of the NFT or related content. In cases where a
                transaction involving a Digital Asset is revealed to be
                fraudulent or illegal or an infringement, or a buyer or seller
                acts fraudulently or illegally or in an infringing manner, then
                the defrauded or injured buyer/seller shall have no recourse
                against Crypto Heist: Solana Beach, but solely against the
                respective seller/buyer. Sellers of Digital Assets are
                responsible for providing all necessary information in
                compliance with all applicable law and regulations regarding
                such Digital Assets in applicable listings on the Platform.
              </p>
              <h3 className="font-dd text-xl md:text-2xl text-white font-bold mb-3 mt-6">
                Crypto Heist: Solana Beach NFT Usage Rights
              </h3>
              <p className={paragraphStyle}>
                When you purchase an Crypto Heist: Solana Beach NFT on the
                Solana blockchain, you gain license to use the underlying
                artwork as you see fit. The ownership of this license is
                facilitated and managed on the Solana blockchain. By owning an
                Crypto Heist: Solana Beach NFT, Crypto Heist: Solana Beach
                grants you a worldwide, royalty-free license to use, copy, and
                display the purchased Crypto Heist: Solana Beach artwork for
                personal use, or as part of a marketplace or third-party
                website/application that cryptographically verifies ownership
                and ensures that only the actual owner can display the art. As
                long as you comply with these Terms, Crypto Heist: Solana Beach
                grants you a worldwide, unrestricted license to use, copy and
                display purchased Crypto Heist: Solana Beach NFT artwork for
                creating derivative works (such as producing and selling
                merchandise with copies of the art) under the term of
                “Commercial Use”. It is important to note that this section does
                not restrict you from owning or operating a marketplace that
                allows for the use and sale of Crypto Heist: Solana Beach
                derived artwork, as long as the marketplace verifies the owner’s
                rights to display their art for their Crypto Heist: Solana
                Beach. Additionally, you may own or operate a third-party
                website or application that allows for the inclusion,
                involvement, or participation of Crypto Heist: Solana Beach, as
                long as the website or application verifies the owner’s rights
                to display the art, and the art is no longer visible once the
                owner of the purchased Crypto Heist: Solana Beach leaves the
                website/application. Lastly, you are allowed to earn revenue
                from any of the aforementioned activities.
              </p>
              <h3 className="font-dd text-xl md:text-2xl text-white font-bold mb-3 mt-6">
                All Other Crypto Heist: Solana Beach NFT and Asset Usage Rights
              </h3>
              <p className={paragraphStyle}>
                Creating original fanart without monetizing it is acceptable
                without any license or ownership. Creating derivative
                non-commercial fanart using official Crypto Heist: Solana Beach
                -assets as inspiration is also acceptable. Provided that you own
                said asset being used as inspiration, and receive written
                permission from Crypto Heist: Solana Beach, you are also granted
                a limited license to create derivative fan-art which can be used
                commercially given that you follow the terms set here in:
                Derivative commercial fan artwork must not use official Crypto
                Heist: Solana Beach assets (the Crypto Heist: Solana Beach logo,
                $ Crypto Heist: Solana Beach token logo) For derivative
                commercial fan artwork, the artist must clearly state that it is
                “Crypto Heist: Solana Beach Fanart”, link to Crypto Heist:
                Solana Beach website, and link directly to the Solscan token
                address of the asset that is being used for inspiration. An
                Crypto Heist: Solana Beach asset can be used to generate a
                maximum of $10,000 in revenue before an official license
                agreement has to be signed. The revenue can come from either
                fanart (tokenized or physical) or merchandise (t-shirts, mugs,
                hoodies, etc).
              </p>

              <h2 className={headingStyle}>ELECTRONIC COMMUNICATIONS</h2>
              <p className={paragraphStyle}>
                When you use our services or send emails, text messages and
                other communications from your desktop or mobile device to us,
                you will be communicating with us electronically. You consent to
                receive communications from us electronically via emails, texts,
                mobile push notices, or notices and messages on this site, and
                you can retain copies of these communications for your records.
                You agree that all agreements, notices, disclosures and other
                communications that we provide to you electronically satisfy any
                legal requirement that such communications be in writing.
              </p>

              <h2 className={headingStyle}>CHANGES TO THE TERMS OF USE</h2>
              <p className={paragraphStyle}>
                We may revise and update these Terms of Use at our sole
                discretion. Except when required by law, we will provide
                notification of updates to the Terms of Use and give users an
                opportunity to review them before they go into effect. Once the
                updated Terms of Use are in effect, you will be bound by the
                updated Terms of Use if you continue to use the Platform. Any
                changes to the dispute resolution provisions will not apply to
                any disputes for which the parties have actual notice on or
                prior to the effective date of any updated Terms of Use.
              </p>

              <h2 className={headingStyle}>
                ACCESSING THE PLATFORM AND ACCOUNT SECURITY
              </h2>
              <p className={paragraphStyle}>
                To access the Platform or some of the resources it offers, you
                may be asked to provide login information, including username
                and password or social media account (“Login Info”) and may
                include a Solana (or other blockchain’s) wallet or similar
                address or credit card / debit card or other banking information
                (“Wallet”) to access, fund or receive disbursements from your
                account. It is your sole responsibility to maintain the security
                of your Login Info and your Wallet and to ensure that your use
                of the Wallet, including, for example, your use of credit and/or
                debit cards, is in compliance with your cardholder and other
                agreements. If you lose access to your Wallet, a private key,
                password, or other method of securing your Wallet, any funds may
                be irretrievable, and we will be unable to assist you in any
                way. You hereby irrevocably waive, release and discharge all
                claims, whether known or unknown to you, against us, our
                affiliates and their respective shareholders, members,
                directors, officers, employees, agents and representatives
                related to your use of any Wallet technology or software,
                associated loss of funds, transaction failures, or any other
                defects that arise in the course of your use of your Wallet,
                including any losses that may obtain as a result of any failure
                in blockchain programs made available on the Platform. You
                hereby accept responsibility for any activity transacted on the
                Platform through or using your Wallet or its associated data.
                Additionally, you hereby irrevocably waive, release and
                discharge all claims, whether known or unknown to you, against
                us, our affiliates and their respective shareholders, members,
                directors, officers, employees, agents and representatives
                related to any defects that arise in the course of your use of
                your Login Info and account. By using the Platform, you agree to
                be fully, independently and personally liable for each
                transaction made on the Platform by you, and you must make sure
                that you are the only person with access to your Login Info at
                all times. You hereby accept responsibility for any activity
                transacted on the Platform through your account (including the
                activities of all persons who use your password to gain access
                to your Account or who use the device on which Crypto Heist:
                Solana Beach products or related software is accessed and for
                complying with any licenses granted in these Terms of Use and
                for any software. You are expressly prohibited from allowing
                anyone else to use your account or to play or access any Company
                product on your behalf.
              </p>
              <p className={paragraphStyle}>
                We will use commercially reasonable technical and physical
                safeguards to make the Platform securely available to its users.
                However, given the inherent risk of transmitting information
                over the internet, we will not be liable if for any reason all
                or any part of the Platform is unavailable at any time or for
                any period. From time to time, we may restrict access to some
                parts of the Platform, or the entire Platform, to users. You are
                responsible for making all arrangements necessary for you to
                have access to the Platform. It is a condition of your use of
                the Platform that all the information you provide on the
                Platform is authorized, correct, current, lawful, and complete.
                You agree that all information you provide to the Platform or
                otherwise, including through the use of any interactive features
                on the Platform, is governed by our Privacy Policy, and you
                consent to all actions we take with respect to your information
                that are consistent with our Privacy Policy.
              </p>

              <h2 className={headingStyle}>FEES</h2>
              <p className={paragraphStyle}>
                Crypto Heist: Solana Beach reserves the right to implement fees
                associated with the use and participation in the Platform. In
                the event users are charged fees, they may utilize payment
                methods such as the following (depending on availability):
                credit cards, debit cards, certain cryptocurrencies, and USDC.
                Crypto Heist: Solana Beach may modify the type of payment
                methods available to you at its own discretion. Any contract for
                the purchase of goods/services between a buyer and seller in the
                Platform will be directly concluded by that buyer and seller,
                even if Crypto Heist: Solana Beach provides payment-related
                services to assist in concluding the purchase. Users wishing to
                receive funds as part of any Platform transaction must have a
                financial account on file that is operable to receive funds.
                Financial accounts include (depending on availability): bank
                accounts, blockchain addresses, and similar methods of receiving
                payment. Crypto Heist: Solana Beach may modify the type of
                financial accounts available to you at its own discretion.
              </p>
              <p className={paragraphStyle}>
                In order to transact with or within the Platform, you may be
                required to provide us with all necessary information for the
                purposes of: verifying your identity, complying with applicable
                laws, managing settlements of your purchases, and assessing
                fraud and risk. For individuals, this information may include
                your full name, address, phone number, date of birth, taxpayer
                identification number, bank account information, and a form of
                government-issued identification, among other points of
                verification. For businesses, this information may include full
                business name, address, phone number, entity type, bank account
                information, tax identification number, and formation documents,
                among other points of verification. In addition, businesses may
                be required to provide details regarding your beneficial
                owner(s), director(s), officer(s), authorized representative,
                and/or primary contact, such as name, contact information,
                nationality, title, and government-issued identification, among
                other points of verification.
              </p>
              <p className={paragraphStyle}>
                We may use third-party payment services providers to assist us
                in providing payment capabilities, and we may process your data
                and transfer it to these third parties. You hereby explicitly
                consent to: our use of such third-party service providers, the
                outsourcing of services to them, and the related transfer and
                processing of your data. You authorize Crypto Heist: Solana
                Beach and our affiliates to verify information you provide to
                us, such as by verifying the existence of your bank account and
                obtaining reports from third-party sources, such as anti-money
                laundering, know-your-customer service providers. We reserve the
                right to close, suspend, or limit your account or rescind your
                access to the Platform in the event we are unable to obtain or
                verify any of this information. You agree that Crypto Heist:
                Solana Beach is not responsible for any losses suffered by you
                as a result of incomplete or inaccurate information you provide.
              </p>
              <p className={paragraphStyle}>
                You agree to comply with all applicable laws, regulations, rules
                and terms and conditions in connection with your payment
                methods. You understand that some third parties, including
                payment services providers and others, may have their own
                applicable terms and conditions for the payment methods you
                choose to use. Failure to follow such third-party terms and
                conditions may result in fees assessed to you (for example,
                credit card currency conversion fees) or other actions taken by
                such third parties, and you agree that Crypto Heist: Solana
                Beach has no control over, or responsibility or liability for,
                such fees or actions.
              </p>
              <p className={paragraphStyle}>
                In any jurisdiction where Crypto Heist: Solana Beach has an
                obligation to collect sales taxes on sales you make using our
                Platform, we may collect such sales taxes from you via the
                payment method on file under the terms of the Billing Agreement
                or via any other means available to us. We may display
                third-party advertisements (including links and references
                thereto) or other content in any part of our Platform, in our
                sole discretion and without consent from, or payment, fee
                reduction, or other credit to, sellers.
              </p>
              <p className={paragraphStyle}>
                Due to the nature of NFTs and the blockchain, no refunds are
                guaranteed. In order to manage risk or secure your obligations
                under these Terms of Use, we reserve the right at our reasonable
                discretion to require that you maintain a minimum reserve of
                transaction proceeds not available for disbursement (in the form
                of a fixed or rolling reserve) as a means of security. We will
                notify you of any reserves we require of you. Depending on your
                performance and the risk associated with your use of the
                Platform, a reserve may be raised, lowered, or removed at any
                time; if required by law, we will give you prior notice of such
                changes.
              </p>

              <h2 className={headingStyle}>REFERRAL PROGRAM</h2>
              <p className={paragraphStyle}>
                Participation in the referral program is subject to the
                following terms and conditions. By participating in the referral
                program, you agree to be bound by these terms and conditions.
                The referral program allows eligible participants to earn
                bonuses by referring new users to Crypto Heist: Solana Beach.
                Eligible participants are defined as individuals who have a
                valid account with Crypto Heist: Solana Beach and have agreed to
                our terms and conditions. A valid referral is defined as an
                individual who creates a new account with Crypto Heist: Solana
                Beach using a referral link provided by an eligible referrer.
                The referral must be a new user to Crypto Heist: Solana Beach,
                meaning they must not have had an existing account with Crypto
                Heist: Solana Beach prior to the referral. Referrers will earn a
                referral bonus of 10% of their referees’ weekly in-game rewards
                for a period of 180 days starting from the date of the referred
                user’s account creation. The referral bonus will be calculated
                based on the total weekly rewards earned by the referred
                individual and will be paid out to the referrer on a weekly
                basis. Referrers are prohibited from offering incentives or
                rewards to individuals in exchange for creating an account using
                their invite link. Any referrer found to be participating in
                this behavior will be disqualified from the referral program.
                The referral bonus is non-transferable. The referral bonus will
                be subject to the same terms and conditions as the referred
                individual’s weekly rewards, including any sanctions or
                restrictions on use.
              </p>
              <p className={paragraphStyle}>
                Crypto Heist: Solana Beach reserves the right to change the
                referral bonus percentage at any time and without notice. The
                current referral bonus percentage can be found on
                app.cryptoheistsb.com/profile. Crypto Heist: Solana Beach also
                reserves the right to terminate the referral program or change
                the length of the bonus at any time and without notice. Crypto
                Heist: Solana Beach is not responsible for lost, late,
                misdirected, or undeliverable referrals or communications, or
                for any computer, online, telephone, or technical malfunctions
                that may occur. Crypto Heist: Solana Beach reserves the right to
                disqualify any participant from the referral program at any
                time, for any reason, including but not limited to, violation of
                these terms and conditions.
              </p>
              <p className={paragraphStyle}>
                These terms and conditions are governed by and construed in
                accordance with the laws of the jurisdiction in which Crypto
                Heist: Solana Beach is headquartered, and any disputes arising
                out of or relating to these terms and conditions will be
                resolved exclusively by the courts located in that jurisdiction.
                These terms and conditions constitute the entire agreement
                between you and Crypto Heist: Solana Beach regarding the
                referral program, and supersede any prior agreements or
                understandings, whether written or oral.
              </p>

              <h2 className={headingStyle}>RISKS</h2>
              <p className={paragraphStyle}>
                Use of the Platform may carry financial and legal risk. Digital
                Assets, such as tokens, cryptocurrencies, and NFTs, are a novel
                and relatively experimental technology. Their value, if any, can
                fluctuate with great volatility, and transactions conducted with
                Digital Assets are irreversible. Digital Assets and blockchain
                programs are typically described using extremely technical
                language that is difficult to understand and requires a deep
                knowledge of cryptography and computer science. Functionality
                made available on the Platform may have inherent design flaws
                that have not been detected in testing or may not perform as
                expected in conjunction with third-party technology or
                high-volume use. You should carefully consider whether you have
                sufficient understanding of the technology and the applicable
                law before accessing or using the Platform.
              </p>
              <p className={paragraphStyle}>
                The Platform uses gossip, virtual voting and hashgraph
                mechanisms to measure consensus. These technologies and
                platforms may have unique benefits, limitations, advantages and
                disadvantages. It is up to you to understand these factors. By
                accessing or using the Platform, you hereby represent that you
                have the requisite knowledge and experience to evaluate the risk
                of the technology you are using and any transactions you
                undertake, and you accept the risk that the Platform might not
                function as anticipated and that you might lose access to your
                Digital Assets temporarily or permanently.
              </p>
              <p className={paragraphStyle}>
                You acknowledge the importance of the security measures we put
                in place with regards to purchases, payment methods, and
                financial accounts, and agree to comply with them. If you become
                aware of an unauthorized payment transaction or of a delayed or
                incorrectly executed transaction, you must notify us
                immediately.
              </p>

              <h2 className={headingStyle}>INTELLECTUAL PROPERTY RIGHTS</h2>
              <p className={paragraphStyle}>
                “Intellectual Property Rights” include copyrights, trademarks,
                trade names, trade dress, service marks, patents, patent
                applications, provisionals, continuations,
                continuations-in-part, trade secrets and any similar
                intellectual property, creator or moral rights in any applicable
                jurisdiction. The Crypto Heist: Solana Beach name, logo, and
                other related trademarks or service marks are the exclusive
                property of Crypto Heist: Solana Beach and may not be used
                without our prior written consent. If you breach these Terms of
                Use, your right to use the Platform will cease immediately and
                you must, at our option, return or destroy any copies of the
                materials you have made. No right, title or interest in or to
                the Platform or any content on the Platform is transferred to
                you, and all rights not expressly granted are reserved by Crypto
                Heist: Solana Beach. Any use of the Platform not expressly
                permitted by these Terms of Use is a breach of these Terms of
                Use and may violate copyright, trademark and other laws.
              </p>
              <p className={paragraphStyle}>
                From time to time, we may allow you to use our Intellectual
                Property Rights (such as images, videos, or sounds) in User
                Contributions. We retain all ownership and rights in such
                content (but not yours). You can only use our copyrights or
                trademarks (or any similar marks) as expressly permitted. You
                must not delete or alter any copyright, trademark or other
                proprietary rights notices from copies of materials from the
                Platform.
              </p>
              <p className={paragraphStyle}>
                The Platform and its entire contents, features and functionality
                (including all information, trademarks, service marks, software,
                text, displays, images, video and audio, and the design,
                selection and arrangement thereof), are provided by Crypto
                Heist: Solana Beach, its licensors or other third-party
                providers of such material, some of which may be protected by
                United States and international copyright, trademark, patent,
                trade secret and other intellectual property rights laws.
                Third-party technology may be provided to the Platform that is
                owned by the third-party provider of such technology and is made
                available subject to these Terms of Use as well as any
                additional applicable license related to such technology.
                Without our written permission, you may not modify, create
                derivative works of, decompile, or otherwise attempt to extract
                source code from the Platform.
              </p>
              <p className={paragraphStyle}>
                When you provide User Contributions using our Platform (directly
                or indirectly), you grant us a non-exclusive, worldwide,
                perpetual, irrevocable, royalty-free, transferrable,
                sublicensable (through multiple tiers) right to use, modify,
                copy, publicly perform, publicly display, reformat, translate,
                excerpt (in whole or in part), publish and distribute your User
                Content and otherwise exercise any and all Intellectual Property
                Rights you have in your User Content in connection with our
                provision, expansion, and promotion of the Platform, in any
                media known now or developed in the future. You agree to waive
                any moral rights to the extent permitted by law and that you
                will not withdraw such User Content or attempt to make a charge
                for the use of such User content. You warrant and represent that
                you are the exclusive copyright and holder of all Intellectual
                Property Rights in relation to the submission and that the
                submission in no way breaches the rights of any other person or
                entity. To the fullest extent permitted under applicable law,
                you waive your right to enforce your Intellectual Property
                Rights in that content against Crypto Heist: Solana Beach, our
                assignees, our sublicensees, and their assignees and
                sublicensees’ use of that content in connection with our
                provision, expansion, and promotion of the Platform.
              </p>

              <h2 className={headingStyle}>PROHIBITED USES</h2>
              <p className={paragraphStyle}>
                You may use the Platform only for lawful purposes and in
                accordance with these Terms of Use. You agree not to use the
                Platform:
              </p>
              <ul className={listStyle}>
                <li>
                  in any way that violates any applicable federal, state, local
                  or international law or regulation (including, without
                  limitation, any laws regarding the export of data or software
                  to and from the US or other countries);
                </li>
                <li>
                  for the purpose of exploiting, harming or attempting to
                  exploit or harm minors in any way by exposing them to
                  inappropriate content, asking for personally identifiable
                  information or otherwise;
                </li>
                <li>
                  to attempt to circumvent any Platform security or access
                  controls or to interfere with the operation of the Platform;
                </li>
                <li>
                  to impersonate or attempt to impersonate Crypto Heist: Solana
                  Beach, a Company employee, another user or any other person or
                  entity (including, without limitation, by using e-mail
                  addresses or screen names associated with any of the
                  foregoing);
                </li>
                <li>
                  to transmit or exchange goods, services, or payments or
                  Digital Assets that are the direct or indirect proceeds of any
                  illegal, criminal or fraudulent behavior;
                </li>
                <li>
                  in any manner that could disable, overburden, damage, or
                  impair the Platform or interfere with any other party’s use of
                  the Platform, including their ability to engage in real time
                  activities through the Platform;
                </li>
                <li>
                  in combination with any robot, spider or other automatic
                  device, process or means to access the Platform for any
                  purpose, including monitoring or copying any of the material
                  on the Platform;
                </li>
                <li>
                  in combination with any manual process to monitor or copy any
                  material on the Platform or for any other unauthorized purpose
                  without our prior written consent;
                </li>
                <li>
                  in combination with any device, software or routine that
                  interferes with the proper working of the Platform;
                </li>
                <li>
                  to introduce any viruses, trojan horses, worms, logic bombs or
                  other material which is malicious or technologically harmful;
                </li>
                <li>
                  to infringe the patent, trademark, copyright, moral, database,
                  publicity and/or other intellectual property rights of third
                  parties or that belong to or are licensed to Crypto Heist:
                  Solana Beach;
                </li>
                <li>
                  to persuade or attempt to persuade (including procuring others
                  to persuade) other users to share any account information;
                </li>
                <li>
                  to run or attempt to run any types of games of chance whether
                  in the Platform or in the real world using any part of the
                  Platform (including any in-game currencies associated with the
                  Platform);
                </li>
                <li>
                  to obtain information about another user and use such
                  information for any purpose other than the intended uses of
                  the Platform, unless given consent by said user;
                </li>
                <li>
                  or to otherwise attempt to interfere with the proper working
                  of the Platform.
                </li>
                <li>
                  to engage in any practice that aims to manipulate the outcome
                  of any Crypto Heist: Solana Beach match, including, but not
                  limited to; match-fixing, win-trading, or collusion between
                  players.
                </li>
              </ul>
              <p className={paragraphStyle}>
                In the event of a Terms of Use and/or Code of Conduct violation,
                disciplinary action may be taken. This could be in the form of a
                loss of rewards, or permanent ban on your Crypto Heist: Solana
                Beach account. Actual disciplinary action is dependent upon the
                severity and/or number of instances of the offences and shall be
                decided at Crypto Heist: Solana Beach ‘sdiscretion, on a
                case-by-case basis. In line with the Terms of Use, Crypto Heist:
                Solana Beach may issue a warning, suspend or close your account,
                reset your in game-rewards and/or suspend or close your ability
                to use one or more services, or part of the services, at any
                time based on prohibited conduct. The following list gives
                examples of forbidden conduct that may lead to investigation by
                Crypto Heist: Solana Beach and may result in disciplinary
                actions. It should not be considered as exhaustive. Any
                activity, such as cheating, hacking, botting, stream
                manipulation or tampering that gives the account owner an unfair
                advantage or causes detriment to other players’ experience in an
                online multiplayer game. In general, if you want to play on a
                different account using 1 device, you must wait 24 hours between
                logging into the game application on the new account after
                logging out of the old account. Exploitation of any new or known
                glitches/bugs that provide an unfair advantage over other
                players in online play.
              </p>
              <p className={paragraphStyle}>
                When setting up an account for a Platform service or
                application, you may be asked to choose a username that will be
                used to identify you to other users. For example, an Crypto
                Heist: Solana Beach character name. You must not choose a
                username that infringes the rights of any third party,
                impersonates Company staff or other users, which is deliberately
                confusing, offensive, racist, obscene, hurtful, unlawful or
                otherwise inappropriate or which breaches the username
                requirements specified in the applicable rules relating to
                Crypto Heist: Solana Beach products. We reserve the right (at
                our sole and absolute discretion), to change any username for
                any reason or take such other action as we believe appropriate.
              </p>

              <h2 className={headingStyle}>MONITORING AND ENFORCEMENT</h2>
              <p className={paragraphStyle}>We reserve the right to:</p>
              <ul className={listStyle}>
                <li>
                  take appropriate legal action, including without limitation,
                  referral to law enforcement, for any illegal or unauthorized
                  use of the Platform;
                </li>
                <li>or</li>
                <li>
                  terminate or suspend your access to all or part of the
                  Platform for any or no reason, including without limitation,
                  any violation of these Terms of Use.
                </li>
                <li>
                  remove your in-game rewards for any or no reason, including
                  without limitation, any violation of these Terms of Use.
                </li>
              </ul>
              <p className={paragraphStyle}>
                We assume no obligation to provide evidence of violation to
                users in the case of a disciplinary action. Without limiting the
                foregoing, we have the right to fully cooperate with any law
                enforcement authorities or court order requesting or directing
                us to disclose the identity or other information of anyone using
                or posting any materials on or through the Platform.
              </p>
              <p className={uppercaseParagraphStyle}>
                YOU WAIVE AND HOLD HARMLESS Crypto Heist: Solana Beach AND ITS
                AFFILIATES, LICENSEES AND SERVICE PROVIDERS FROM ANY CLAIMS
                RESULTING FROM ANY ACTION TAKEN BY ANY OF THE FOREGOING PARTIES
                DURING OR AS A RESULT OF ITS INVESTIGATIONS AND FROM ANY ACTIONS
                TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY SUCH PARTIES OR LAW
                ENFORCEMENT AUTHORITIES.
              </p>
              <p className={paragraphStyle}>
                We do not review all material before it is posted on or through
                the Platform and cannot ensure prompt removal of objectionable
                material after it has been posted. We assume no liability for
                any action or inaction regarding transmissions, communications
                or content provided by any user or third party. We have no
                liability or responsibility to anyone for performance or
                nonperformance of the activities described in this section. If a
                Platform user issue arises, we may consider a variety of
                factors, including specific circumstances regarding the issue,
                or a user’s performance history, in applying our policies. In
                our effort to do the best thing for Platform users, we may
                decide to be more lenient with policy enforcement. The foregoing
                does not limit our right to refuse, modify, or terminate all or
                part of our services to anyone, or to terminate this agreement
                with any user, for any reason at our sole discretion.
              </p>

              <h2 className={headingStyle}>RELIANCE ON INFORMATION POSTED</h2>
              <p className={paragraphStyle}>
                The information presented on or through the Platform is made
                available solely for general information purposes. We do not
                warrant the accuracy, completeness or usefulness of this
                information. We do not warrant that product descriptions or
                other content on the Platform are accurate, complete, reliable,
                current or error-free. Any reliance you place on such
                information is strictly at your own risk. We disclaim all
                liability and responsibility arising from any reliance placed on
                such materials by you or any other user of the Platform, or by
                anyone who may be informed of any of its contents.
              </p>
              <p className={paragraphStyle}>
                This Platform may include, or link to, content provided by third
                parties, including materials provided by other users,
                third-party licensors, syndicators, or aggregators. All
                statements and/or opinions expressed in such materials, and all
                articles and responses to questions and other content, other
                than the content provided by Crypto Heist: Solana Beach, are
                solely the opinions and the responsibility of the person or
                entity providing those materials. These materials do not
                necessarily reflect the opinion of Crypto Heist: Solana Beach.
                We are not responsible, or liable to you or any third party, for
                the content or accuracy of any materials provided by any third
                parties.
              </p>

              <h2 className={headingStyle}>CHANGES TO THE PLATFORM</h2>
              <p className={paragraphStyle}>
                We may update the content on this Platform from time to time,
                but its content is not necessarily complete or up-to-date. We
                reserve the right to withdraw or amend this Platform, and any
                service or functionality, including blockchain program
                functionality, we provide on the Platform, in our sole
                discretion without notice. Any of the material on the Platform
                may be out of date at any given time, and we are under no
                obligation to update such material. In the event of a change in
                the operation of the Platform, you agree we may temporarily or
                permanently suspend our operations without liability to you.
              </p>

              <h2 className={headingStyle}>DATA PRIVACY</h2>
              <p className={paragraphStyle}>
                Our performance under these Terms of Use, including in
                facilitating processing of payments, entails the processing of
                your personal data when a transaction occurs with our
                assistance. With respect to such data processing, you and the
                payment method or financial account each act as a separate data
                controller/business under applicable data protection laws (which
                may without limitation include, the General Data Protection
                Regulation, the California Consumer Privacy Act, or other data
                protection laws to which you are subject). You agree to: comply
                with your obligations as a data controller/business pursuant to
                the applicable data protection laws, and provide us with all
                such reasonable cooperation, information, and assistance as
                necessary for us to meet our requirements as a data
                controller/business.
              </p>

              <h2 className={headingStyle}>ADDITIONAL TERMS AND CONDITIONS</h2>
              <p className={paragraphStyle}>
                Additional terms and conditions may apply to specific portions,
                services or features of the Platform provided by Crypto Heist:
                Solana Beach or third parties, including any consumer offers,
                event competitions, or sweepstakes made available through the
                Platform, either alone or in conjunction with the functionality
                provided by us. The use of such services or features shall be
                governed by the terms of use associated with them, and all such
                additional terms of use are hereby incorporated by this
                reference into these Terms of Use. We accept no liability or
                responsibility for any third-party functionality or any of our
                open-source functionality that has been modified by third
                parties.
              </p>

              <h2 className={headingStyle}>LINKING TO THE PLATFORM</h2>
              <p className={paragraphStyle}>
                You may link to our Platform, provided you do so in a way that
                is fair and legal and does not damage our reputation or take
                advantage of it, but you must not establish a link in such a way
                as to suggest any form of association, approval or endorsement
                on our part without our express written consent. This Platform
                may provide certain features that enable you to: link from your
                own or certain third-party Platforms to certain content on this
                Platform; or cause limited portions of content on this Platform
                to be displayed or appear to be displayed on your own or certain
                third-party Platforms. You may use these features solely as they
                are provided by us and solely with respect to the content they
                are displayed with and otherwise in accordance with any
                additional terms and conditions we provide with respect to such
                features. Subject to the foregoing, you must not: establish a
                link from any Platform that is not owned by you; otherwise take
                any action with respect to the materials on this Platform that
                is inconsistent with any other provision of these Terms of Use.
                The Platform from which you are linking, or on which you make
                certain content accessible, must comply in all respects with the
                Content Standards set out in these Terms of Use. You agree to
                cooperate with us in causing any unauthorized framing or linking
                immediately to cease. We reserve the right to withdraw linking
                permission without notice. We may disable all or any social
                media features and any links at any time without notice at our
                discretion.
              </p>

              <h2 className={headingStyle}>LINKS FROM THE PLATFORM</h2>
              <p className={paragraphStyle}>
                The Platform may contain links to other sites and resources
                provided by third parties, such as advertisements and sponsored
                links. These links are provided for your convenience only. We
                have no control over the contents of those sites or resources
                and accept no responsibility for them or for any loss or damage
                that may arise from your use of them. If you decide to access
                any of the third-party sites linked to this Platform, you do so
                entirely at your own risk and subject to the terms and
                conditions of use for such Platforms.
              </p>

              <h2 className={headingStyle}>DISCLAIMER OF WARRANTIES</h2>
              <p className={uppercaseParagraphStyle}>
                WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A
                DISTRIBUTED DENIAL-OF-SERVICE ATTACK, HACKS, VIRUSES OR OTHER
                TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER
                EQUIPMENT, COMPUTER PROGRAMS, DATA OR OTHER PROPRIETARY MATERIAL
                DUE TO YOUR USE OF THE PLATFORM OR ANY SERVICES OR ITEMS
                OBTAINED THROUGH THE PLATFORM, ANY THIRD-PARTY LINKS ACCESSED
                THROUGH OR IN CONJUNCTION WITH THE PLATFORM, OR ON ANY PLATFORM
                LINKED TO IT. YOUR USE OF THE PLATFORM, ITS CONTENT AND ANY
                SERVICES OR ITEMS OBTAINED THROUGH THE PLATFORM IS AT YOUR OWN
                RISK. THE PLATFORM, ITS CONTENT AND ANY SERVICES OR ITEMS
                OBTAINED THROUGH THE PLATFORM ARE PROVIDED ON AN “AS IS” AND “AS
                AVAILABLE” BASIS. Crypto Heist: Solana Beach HEREBY DISCLAIMS
                ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                STATUTORY OR OTHERWISE, INCLUDING ANY WARRANTIES OF
                MERCHANTABILITY, NON-INFRINGEMENT AND FITNESS FOR PARTICULAR
                PURPOSE. THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH
                CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>

              <h2 className={headingStyle}>LIMITATION ON LIABILITY</h2>
              <p className={uppercaseParagraphStyle}>
                IN NO EVENT WILL Crypto Heist: Solana Beach, ITS AFFILIATES OR
                THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS
                OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL
                THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR
                INABILITY TO USE, THE PLATFORM, ANY PLATFORMS LINKED TO IT, ANY
                BLOCKCHAIN PROGRAMS OR DISTRIBUTED APPLICATIONS EXISTING ON OR
                CONNECTING TO THE PLATFORM, ANY LOSS OF FUNDS OR COLLATERAL, ANY
                CONTENT ON THE PLATFORM OR SUCH OTHER PLATFORMS OR ANY SERVICES
                OR ITEMS OBTAINED THROUGH THE PLATFORM OR SUCH OTHER PLATFORMS,
                INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
                CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING, PERSONAL INJURY,
                PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF
                PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE,
                LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT
                (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF
                FORESEEABLE. UNDER NO CIRCUMSTANCES WILL WE BE RESPONSIBLE FOR
                ANY DAMAGES, LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR
                OTHER UNAUTHORIZED ACCESS OR USE OF THE PLATFORM OR ITS
                CONTENTS. THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH
                CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
              </p>

              <h2 className={headingStyle}>INDEMNIFICATION</h2>
              <p className={paragraphStyle}>
                You agree to pay the costs of defense and indemnify and hold
                harmless Crypto Heist: Solana Beach, its affiliates, licensors
                and service providers, and its and their respective officers,
                directors, employees, contractors, agents, licensors, successors
                and assigns, from and against any claims, liabilities, damages,
                judgments, losses, costs, debts and fees (including reasonable
                attorneys’ fees) arising out of or relating to: your violation
                of any third-party right; your provision of false or misleading
                information; your violation of any law or regulation; your
                violation of the Terms of Use; your breach of any representation
                or warranty; your negligent or willful misconduct; or your use
                of or access to the Platform, including, your User
                Contributions, any use of the Platform other than as expressly
                authorized in these Terms of Use, or your use of information
                obtained from the Platform.
              </p>
              <p className={paragraphStyle}>
                If you have a dispute with one or more users, you release Crypto
                Heist: Solana Beach (and our affiliates and subsidiaries, and
                our and their respective officers, directors, employees and
                agents) from claims, demands and damages (actual and
                consequential) of every kind and nature, known and unknown,
                arising out of or in any way connected with such disputes. By
                entering into this release, you expressly waive any protections
                (whether statutory or otherwise) that would otherwise limit the
                coverage of this release to include only those claims which you
                may know or suspect to exist in your favor at the time of
                agreeing to this release.
              </p>

              <h2 className={headingStyle}>DISPUTE RESOLUTION</h2>
              <h3 className="font-dd text-xl md:text-2xl text-white font-bold mb-3 mt-6">
                11.1 Informal negotiations
              </h3>
              <p className={paragraphStyle}>
                To expedite resolution and control the cost of any dispute,
                controversy, or claim related to these Terms of Use (each a
                “Dispute” and collectively, the “Disputes”) brought by either
                you or us (individually, a “Party” and collectively, the
                “Parties”), the Parties agree to first attempt to negotiate any
                Dispute (except those Disputes expressly provided below)
                informally for at least thirty (30) days before initiating the
                arbitration. Such informal negotiations commence upon written
                notice from one Party to the other Party.
              </p>
              <h3 className="font-dd text-xl md:text-2xl text-white font-bold mb-3 mt-6">
                11.2 Binding Arbitration
              </h3>
              <p className={paragraphStyle}>
                If a Party is unable to resolve a Dispute through informal
                negotiations, the Disputes (except those Disputes expressly
                excluded below) will be finally and exclusively resolved by
                binding arbitration.
              </p>
              <p className={uppercaseParagraphStyle}>
                YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE
                RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
              </p>
              <p className={paragraphStyle}>
                The arbitration shall be commenced and conducted under the
                Commercial Arbitration Rules of the American Arbitration
                Association (“AAA”) and, where appropriate, the AAA’s
                Supplementary Procedures for Consumer-Related Disputes (“AAA
                Consumer Rules”), both of which are available at the AAA website
                www.adr.org. Your arbitration fees and your share of arbitration
                compensation shall be governed by the AAA Consumer Rules and,
                where appropriate, limited by the AAA Consumer Rules. If such
                costs are determined by the arbitrator to be excessive, we will
                pay all the arbitration fees and expenses. Except where
                otherwise required by the applicable AAA rules or applicable
                law, the arbitration can take place in the British Virgin
                Islands. Except as otherwise provided herein, the Parties may
                litigate in court to compel arbitration, stay proceedings
                pending arbitration, or to confirm, modify, vacate, or enter
                judgement on the award entered by the arbitrator.
              </p>
              <p className={paragraphStyle}>
                If for any reason, a Dispute proceeds in court rather than
                arbitration, the Dispute shall be commenced or prosecuted in the
                state and federal courts located in the British Virgin Islands,
                and the Parties hereby consent to and waive all defenses of lack
                of personal jurisdiction, and forum non-conveniens with respect
                to venue and jurisdiction in such state and federal courts. In
                no event shall any Dispute brought by either Party related in
                any way to the Site, the App and the blockchain programs be
                commenced more than one (1) year after the cause of the action
                arose. If this provision is found to be illegal or
                unenforceable, then neither Party will elect to arbitrate any
                Dispute falling within that portion of this provision found to
                be illegal or unenforceable and such Dispute shall be decided by
                a court of competent jurisdiction within the courts listed or
                jurisdiction above, and the Parties agree to submit to the
                personal jurisdiction of that court.
              </p>
              <h3 className="font-dd text-xl md:text-2xl text-white font-bold mb-3 mt-6">
                11.3 Exceptions to the Informal Negotiations and Arbitration
              </h3>
              <p className={paragraphStyle}>
                The Parties agree that the following Disputes are not subject to
                the above provision concerning informal negotiations and binding
                arbitration: (a) any Dispute seeking to enforce or protect, or
                concerning the validity of, and of the intellectual property
                rights of a Party, (b) any Dispute related to, or arising from,
                allegations of theft, piracy, invasion of privacy, or
                unauthorized use; and (c) any claim for injunctive relief. If
                this provision is found to be illegal and unenforceable, then
                neither Party will elect to arbitrate any Dispute falling within
                that portion of this provision found to be illegal or
                unenforceable, and such Dispute shall be decided by a court of
                competent jurisdiction within the courts listed or jurisdiction
                above, and the Parties agree to submit to the personal
                jurisdiction of that court.
              </p>

              <h2 className={headingStyle}>
                LIMITATION ON TIME TO FILE CLAIMS
              </h2>
              <p className={uppercaseParagraphStyle}>
                ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR
                RELATING TO THESE TERMS OF USE OR THE PLATFORM MUST BE COMMENCED
                WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES,
                OTHERWISE, SUCH CAUSE OF ACTION OR THE CLAIM IS PERMANENTLY
                BARRED.
              </p>

              <h2 className={headingStyle}>WAIVER AND SEVERABILITY</h2>
              <p className={paragraphStyle}>
                No waiver by Crypto Heist: Solana Beach of any term or condition
                set forth in these Terms of Use shall be deemed a further or
                continuing waiver of such term or condition or a waiver of any
                other term or condition, and any failure of Crypto Heist: Solana
                Beach to assert a right or provision under these Terms of Use
                shall not constitute a waiver of such right or provision. If any
                provision of these Terms of Use is held by a court or other
                tribunal of competent jurisdiction to be invalid, illegal or
                unenforceable for any reason, such provision shall be eliminated
                or limited to the minimum extent such that the remaining
                provisions of the Terms of Use will continue in full force and
                effect.
              </p>

              <h2 className={headingStyle}>ENTIRE AGREEMENT</h2>
              <p className={paragraphStyle}>
                The Terms of Use, the Privacy Policy, and any applicable terms
                governing the use of third-party functionality or additional
                functionality provided by Crypto Heist: Solana Beach, constitute
                the sole and entire agreement between you and Crypto Heist:
                Solana Beach with respect to the Platform and supersede all
                prior and contemporaneous understandings, agreements,
                representations and warranties, both written and oral, with
                respect to the Platform.
              </p>

              <h2 className={headingStyle}>ASSIGNMENT</h2>
              <p className={paragraphStyle}>
                At our sole discretion, we may assign our rights and obligations
                under these Terms of Use. In cases of such assignment, we will
                notify you accordingly.
              </p>

              <h2 className={headingStyle}>FORCE MAJEURE</h2>
              <p className={paragraphStyle}>
                We will not be liable or responsible to you, nor be deemed to
                have defaulted under or breached these Terms of Use, for any
                failure or delay in performance, when and to the extent such
                failure or delay is caused by or results from force majeure
                events (“Force Majeure Event”), including: acts of God, flood,
                fire, epidemics, pandemics, natural disasters, explosion, war,
                hostilities, civil unrest, government action, industrial
                disturbances, shortage of adequate Internet connectivity,
                telecommunication or utilities breakdown, and other similar
                events beyond our control. If we suffer a Force Majeure Event,
                we will use reasonable efforts to promptly notify you of such,
                stating the period of time the occurrence is expected to
                continue. We will use diligent efforts to end the failure or
                delay and ensure the effects of such Force Majeure Event are
                minimized. We will resume the performance of our obligations as
                soon as reasonably practicable after the removal of the cause.
                In the event that our failure or delay remains uncured for a
                period of forty-five (45) consecutive days following written
                notice given by us under this section, we may thereafter
                terminate these Terms of Use upon fifteen (15) days’ written
                notice.
              </p>

              <h2 className={headingStyle}>TERMINATION</h2>
              <p className={paragraphStyle}>
                These Terms of Use are effective indefinitely, unless terminated
                in accordance with the below. We may terminate these Terms of
                Use by giving written notice fourteen (14) days prior via email
                to your registered email address. However, we may also terminate
                these Terms of Use on less notice or with immediate effect in
                the following scenarios: We are required to do so by law or a
                court order; a governmental authority requires us to do so to
                comply with anti-money laundering or counter-terrorism financing
                obligations; we have reasonable grounds to believe you are
                carrying out a prohibited or illegal activity; we are unable to
                verify your or your business’s identity, or any other
                information regarding your account; or you are otherwise in
                breach of a material contractual obligation, or seriously or
                persistently violating any provisions of these terms in any
                other way.
              </p>
              <p className={paragraphStyle}>
                Termination of these Terms of Use shall not affect the rights or
                liabilities of either party accrued until termination and/or any
                terms intended (expressly or implicitly) to survive termination.
                If there are pending payment transactions at the time the
                termination takes effect, they will be processed pursuant to
                these terms unless prohibited by law.
              </p>
              <p className={uppercaseParagraphStyle}>
                IN THE EVENT OF TERMINATION OF YOUR Crypto Heist: Solana Beach
                ACCOUNT, YOU MAY BE NOTIFIED TO WITHDRAW ANY CHARACTERS, IN-GAME
                ITEMS, AND CURRENCY PRIOR TO THE TERMINATION.
              </p>

              <h2 className={headingStyle}>DIGITAL MILLENNIUM COPYRIGHT ACT</h2>
              <p className={paragraphStyle}>
                <strong>DMCA Notice:</strong> We strive to comply with the
                Digital Millennium Copyright Act of 1998, as amended (“DMCA”),
                at all times and maintain a repeat offender policy which may
                result in the termination of your right to use the Platform if
                you violate such policy. If you believe that your work has been
                copied, posted or otherwise made available through the Platform
                in a way that constitutes copyright infringement, please notify
                our DMCA Copyright Agent of your complaint, as set forth in the
                DMCA. Please consult the DMCA to confirm these requirements. You
                must provide our DMCA Copyright Agent with the following
                information in writing, to the extent required by the DMCA: (a)
                an electronic or physical signature of the person authorized to
                act on behalf of the copyright owner that is allegedly
                infringed; (b) a description of the copyrighted work that you
                claim has been infringed (or, if multiple copyrighted works on a
                site are covered by a single complaint, a representative list of
                the allegedly infringing works on the site); (c) identification
                of the material that is claimed to be infringing and to be
                removed, and information reasonably sufficient to permit us to
                locate the material; (d) information reasonably sufficient to
                permit us to contact you, such as your address, telephone number
                and e-mail address; (e) a written statement by you that you have
                a good faith belief that use of the material in the manner
                complained of is not authorized by the copyright owner, its
                agent or the law; and (f) a statement by you, made under penalty
                of perjury, that the above information in your notice and
                complaint is accurate and that you are the copyright owner or
                authorized to act on the copyright owner’s behalf.
              </p>
              <p className={paragraphStyle}>
                Please be aware that the foregoing information in your complaint
                may be forwarded to the person who provided the allegedly
                infringing content. Pursuant to Section 512(f) of the DMCA, any
                person who knowingly materially misrepresents that material or
                activity is infringing may be subject to liability.
              </p>
              <p className={paragraphStyle}>
                If you believe that your material has been mistakenly removed or
                disabled, you may submit a counter notice by notifying our DMCA
                Copyright Agent at the address provided above. Pursuant to
                Section 512(f) of the DMCA, any person who knowingly materially
                misrepresents that material or activity was removed or disabled
                by mistake or misidentification may be subject to liability.
              </p>

              <h2 className={headingStyle}>YOUR COMMENTS AND CONCERNS</h2>
              <p className={paragraphStyle}>
                All feedback, comments, requests for technical support and other
                communications relating to the Platform should be directed to:{" "}
                <a href="mailto:cryptoheistsb@gmail.com" className={linkStyle}>
                  cryptoheistsb@gmail.com
                </a>
              </p>
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
