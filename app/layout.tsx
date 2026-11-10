import type {Metadata} from 'next';
import {Be_Vietnam_Pro,Space_Grotesk} from 'next/font/google';
import './globals.css';
const vietnam=Be_Vietnam_Pro({weight:['400','500','600','700','800'],subsets:['latin','vietnamese'],variable:'--font-body',display:'swap'});
const space=Space_Grotesk({weight:['600','700'],subsets:['latin'],variable:'--font-mark',display:'swap'});
export const metadata:Metadata={
  title:'ZLAB — Học hết mình. Bật chất riêng bạn.',
  description:'IELTS, Cambridge KET, tiếng Anh, Toán và Văn tại Nhà Bè. Tìm lớp phù hợp cùng ZLAB.',
  icons:{icon:[{url:'/icon.png',type:'image/png',sizes:'64x64'}],apple:[{url:'/apple-icon.png',sizes:'180x180'}]},
  openGraph:{title:'ZLAB — Học hết mình. Bật chất riêng bạn.',description:'IELTS, Cambridge KET, tiếng Anh, Toán và Văn tại Nhà Bè. Tìm lớp phù hợp cùng ZLAB.',images:[{url:'/assets/logo.png',width:512,height:512,alt:'Logo ZLAB'}]},
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi"><body className={`${vietnam.variable} ${space.variable}`}>{children}</body></html>}
