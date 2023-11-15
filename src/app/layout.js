
import Head from "next/head"

export const metadata = {
  title: 'Countries',
  description: 'The REST Countries API Frontend Mentor project invites you to create a responsive web application that engages with the REST Countries API. The aim is to build a user-friendly interface for exploring country information. Key features include a country list, search functionality, and detailed views for each country. This project offers a practical application of frontend development skills, providing hands-on experience and encouraging collaboration within the Frontend Mentor community for feedback and support.',
  icons:{
    icon: "./icons/favicon.ico?v=4",
    apple: "./icons/apple-touch-icon.png?v=4",
    shortcut: "./icons/apple-touch-icon.png?v=4"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
