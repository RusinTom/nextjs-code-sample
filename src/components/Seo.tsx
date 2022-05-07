import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title: 'Code sample - Next.js + Tailwind CSS + TypeScript',
  siteName: 'Code sample - Next.js + Tailwind CSS + TypeScript',
  description: 'Code sample',
  url: '',
  robots: 'follow, index',
};

type SeoProps = {
  templateTitle?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
    </Head>
  );
}
