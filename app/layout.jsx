import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import AuthContext from "./context/authContext";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Open Table",
  description: "Open Table | Book your table",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster
          toastOptions={{ className: "text-[12px]" }}
          position="top-center"
          reverseOrder={false}
        />
        <AuthContext>
          <main className="bg-gray-100 min-h-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
              <Navbar />
              {children}
            </main>
          </main>
        </AuthContext>
      </body>
    </html>
  );
}
