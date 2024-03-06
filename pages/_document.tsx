import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';
import Nav from "./Nav";
import Footer from "./Footer";



export default function Document() {



const urls = "https://www.service-ads.com";

  return (
    <Html lang="en">
    
    <Head>
 <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16457513085"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16457513085');
          `,
        }}
      />   
   <meta name="google-site-verification" content="g_4hsj1TVTqA-qt5kENBFgo24afTX6HFTUUoJw-K2v0" />      

<meta name="keywords" content="ยิงads,facebook,สายเทา,โฆษณา,ยิงads facebook สายเทา,รับยิงads,รับยิงแอด สายเทา,facebook ads,google ads,google,รับยิงแอด,ads,รับทำโฆษณา,รับโฆษณา,Facebook,การตลาด,โฆษณาออนไลน์,เว็บไซต์,ตลาดเป้าหมาย,โฆษณาบนโซเชียลมีเดีย,Google Ads,การโฆษณาบน Facebook,การโฆษณาออนไลน์บนสื่อต่าง ๆ,การตลาดออนไลน์,การโปรโมท,โฆษณา Facebook,การโฆษณา Google,การโฆษณาสินค้า,การโฆษณาโปรโมชั่น,วิธีการโฆษณา,ความสำเร็จในการตลาด,บริการโฆษณา,การตลาดออนไลน์บน Facebook,การโฆษณาบนเว็บ,การวางแผนโฆษณา,รับจ้างโฆษณา" />
<meta name="keywords" content="รับทำ seo สายเทา, รับทำ seo สายดำ, แอดสายเทา, รับยิงแอดสายเทา, กูเกิ้ลแอดสายเทา, รับทํา google ads, สายเทา seo สายเทา, รับทำโฆษณาสายเทา, ทำการตลาดสายเทา, ads สายเทา, รับทํา seo สายเทา, ยิงแอดสายเทา, โปรโมทสายเทา, facebook ads, สายเทา, การตลาดสายเทา, ยิงadsสายเทา, ยิงแอด google สายเทา, รับทำการตลาดสายเทา, รับจ้างยิงแอดสายเทา, โฆษณาสายเทา, ตลาดสายเทา, ads, สายเทา, แอดสายเทา, ยิงแอดสายเทา, pantip ยิงแอดสายเทาfacebook, ทําseoสายเทา, ยิงadsfacebookสายเทา, ยิงแอดสายเทาเฮียบอย, รับทำเว็บสายเทา, การทำseoสายเทา, ทำseoสายเทา, ยิงแอดyoutubeสายเทา, ยิงแอดสายเทาราคา, ยิงแอดสายเทา2022, ยิงแอดสายดำ, รับจ้างแอดสายเทา, ยิงแอดสายเทาgoogle, ตลาดสีเทา, แอดสีเทา, adsสีเทา, กราฟฟิกสายเทา, ยิงแอดเทา, รับยิงแอดfacebookสายเทา, รูปยิงแอดสายเทา, รับจ้างสายเทา, รับโฆษณาสายเทา " />

<link rel="canonical" href="https://www.servermanagerads.com/" />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="รับทำโฆษณาออนไลน์สายเทา" />
<meta property="og:description" content="รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook" />
<meta property="og:url" content="https://www.servermanagerads.com/" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="https://www.servermanagerads.com/img/logo.png" />


<meta property="og:image" content="https://www.servermanagerads.com/img/logo.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content={urls} />

<meta name="twitter:card" content="https://www.servermanagerads.com/img/logo.png" />
<meta name="twitter:image" content="https://www.servermanagerads.com/img/logo.png" />
<meta name="twitter:title" content="Tiรับทำโฆษณาออนไลน์สายเทา" />
<meta name="twitter:description" content="รับทำโฆษณาออนไลน์สายเทา ผู้เชี่ยวชาญด้านการตลาดบน Google, YouTube และ Facebook" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

<meta name="google-site-verification" content="PbQl1IGdzrIFiFnnE39varHoAFip5AIAk4QLxK-Nyto" />
 <meta property="og:image" content={`${urls}/favicon.ico`} />


          

      </Head>


      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
      <Nav />
      <body>

        
 

   



        



     <Main />
        <NextScript />


        < Footer />
       
      
      </body>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" async ></script>
    </Html>
  );
}
