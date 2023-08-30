import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <h6>Lanfty</h6>

            <div className="flex">
                <div>
                    <Link href="/">Artwork</Link>
                    <Link href="/">Discover</Link>
                    <Link href="/">Articles</Link>
                    <Link href="/">Create</Link>
                </div>

                <div>
                    <Link href="/">Community</Link>
                    <Link href="/">Careers</Link>
                    <Link href="/">Newsletter</Link>
                </div>

                <div>
                    <Link href="/">FAQs</Link>
                    <Link href="/">Customer Support</Link>
                    <Link href="/">Contacts</Link>
                </div>
            </div>

            <div className="flex">
                <p>Privacy Policy & Terms Conditions</p>
                <p>All credits own by respective owner</p>
            </div>
        </div>
    );
};

export default Footer;
