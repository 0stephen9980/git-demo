
import { ChakraProviders } from '../chakraProvider'
import './authpage.css'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProviders>
          {children}
        </ChakraProviders>
      </body>
    </html>
  )
}
