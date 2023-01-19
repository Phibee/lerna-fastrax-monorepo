import Head from 'next/head';

interface IProps {
  children: React.ReactNode;
  className?: string | undefined;
}

const Page = ({ children, ...props }: IProps) => (
  <div {...props}>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {children}
  </div>
);

export default Page;
