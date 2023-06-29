import Link from "next/link";

export default function Header() {
  return (
    <header>
      <h1>Hi Company</h1>
      <p>I wanted to demonstrate how much I'd love to work at the company in my own way. This is my "cover letter" but on a webpage so it's not boring. Hope you enjoy!</p>
      <Link href="#about">Get to know Daniel</Link>
    </header>
  );
}
