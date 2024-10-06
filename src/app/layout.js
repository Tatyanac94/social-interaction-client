import "../globals.css";
import { ThemeProvider } from '../app/themeContext';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <header className="flex justify-between items-center p-4 bg-gray-200">
            <h1 className="text-xl font-bold">True Social Interaction App</h1>
          </header>
          <main className="p-4">{children}</main>
          <footer className="text-center p-4">
            <p>&copy; {new Date().getFullYear()} True Social Interaction App</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
