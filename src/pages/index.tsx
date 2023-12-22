import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@/components/form/button';

export default function Home() {
    const router = useRouter();
    return (
        <main className='flex flex-col items-center justify-between p-24'>
            <Image
                className='my-4'
                src='/images/mazaady-logo.png'
                alt='mazaady-logo'
                width={180}
                height={37}
                priority
            />
            <div className='flex justify-center py-8'>
                <Button onClick={() => router.push('/form-task')}>
                    Form Task
                </Button>
                <Button onClick={() => router.push('/static-page-task')}>
                    Static Page Task
                </Button>
            </div>
        </main>
    );
}
