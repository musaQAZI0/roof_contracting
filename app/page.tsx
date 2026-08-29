import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';

export default function Home(){
return <><Navbar/><Hero/><Services/><Reviews/><section className="container py-16"><h2 className="text-3xl font-bold">Contact Y&B Roofing Inc.</h2><p className="mt-4">3314 S Leavitt St, Chicago, IL 60608</p><p>+1 773-495-2021</p><a className="btn mt-6" href="tel:+17734952021">Free Roof Inspection</a></section></>
}
