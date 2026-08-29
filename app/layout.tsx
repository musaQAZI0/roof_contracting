import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
 title: 'Y&B Roofing Inc. | Professional Roofing Contractor Chicago',
 description: 'Y&B Roofing Inc. provides professional roof repair, replacement and roofing services in Chicago, IL.',
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body>{children}</body></html>
}
