import { Button } from '@/components/dynamic';
import Page from '@/components/page';
import { GetServerSideProps } from 'next';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { requireAuthentication } from '@/utils/authentication/requireAuthentication';
import { Icons } from 'shared';

const {
  Coding: { Cod001 },
} = Icons;

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  console.log({ session });

  function handleSignOut() {
    signOut();
    window.localStorage.clear();
    window.sessionStorage.clear();
  }

  return <Page>{session ? User({ session, handleSignOut }) : Guest()}</Page>;
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50" href={'/login'}>
          Sign In
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User({ session, handleSignOut }: any) {
  console.log({ session });
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user?.name}</h5>
        <h5>{session.user?.email}</h5>
      </div>

      <div className="flex justify-center">
        <button onClick={handleSignOut} className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50">
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50" href={'/profile'}>
          Profile Page
        </Link>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  return requireAuthentication(context, ({ session }: any) => {
    return { props: { session } };
  });
};
