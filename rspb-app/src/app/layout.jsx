import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}



// import '../styles/globals.css';

// export default function RootLayout({ children }) {
//   return (
//     <html lang="id">
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }