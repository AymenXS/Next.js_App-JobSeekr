import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import LandingImage from '@/assets/main.svg';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <Image src={Logo} alt="logo" width={200} height={200} />
      </header>
      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Effortlessly search and apply for jobs, track your applications, and get personalized career advice. Jobseekr is your one-stop
            shop for finding your next career move.
          </p>
          <Button asChild className="mt-4">
            <Link href={'/add-job'}>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImage} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
