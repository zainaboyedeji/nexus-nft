import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-20">
            <h6>Lanfty</h6>

            <div className="flex mt-10 justify-between">
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

            <div className="flex justify-between mt-10">
                <p>Privacy Policy & Terms Conditions</p>
                <p>All credits own by respective owner</p>
            </div>
        </div>
    );
};

export default Footer;
