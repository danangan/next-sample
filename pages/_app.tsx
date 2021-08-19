import type { AppProps } from 'next/app';
import {
  Content,
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem
} from 'carbon-components-react/lib/components/UIShell';
import Link from 'next/link';
import '../styles/externals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    <Header aria-label="IBM Platform Name">
      <HeaderName href="#" prefix="">
        Danang Nur
      </HeaderName>
      <HeaderNavigation>
        <Link href="/"><HeaderMenuItem>Home</HeaderMenuItem></Link>
        <Link href="/blog"><HeaderMenuItem>Blog</HeaderMenuItem></Link>
      </HeaderNavigation>
    </Header>
    <Content>
      <Component {...pageProps} />
    </Content>
  </div>
}
export default MyApp
