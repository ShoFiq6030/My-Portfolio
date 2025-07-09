import localFont from "next/font/local";
import "./globals.css";
import Squares from './../components/common/Squares';
import { ToastContainer, toast } from 'react-toastify';



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Shofiq's Portfolio",
  description: "Welcome to my portfolio! Explore my projects and skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 bg-opacity-50 min-h[100vh]`}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            backgroundColor: "#222",
            color: "#fff",
            fontFamily: "var(--font-geist-sans)",
          }}
        />
        <Squares

          speed={0.1}
          squareSize={20}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#000'
          hoverFillColor='#222'
        >


          {children}
        </Squares>
      </body>
    </html>
  );
}
