import type {Metadata} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: 'Dev Dental Clinic & Health Care',
  description: 'Modern, professional website for a dental clinic featuring services, appointment booking, and more.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              const originalDefineProperty = Object.defineProperty;
              Object.defineProperty = function(obj, prop, descriptor) {
                if (obj === window && prop === 'fetch') {
                  descriptor.configurable = true;
                  if (descriptor.get && !descriptor.set) {
                    let override = null;
                    const originalGet = descriptor.get;
                    descriptor.get = function() {
                      return override || originalGet.call(this);
                    };
                    descriptor.set = function(v) {
                      override = v;
                    };
                  } else if (descriptor.value) {
                    descriptor.writable = true;
                  }
                }
                return originalDefineProperty(obj, prop, descriptor);
              };
            `,
          }}
        />
      </head>
      <body className="font-sans bg-[#050505] text-gray-200 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
