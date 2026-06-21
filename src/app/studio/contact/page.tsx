import { redirect } from 'next/navigation';

export default function ContactRedirect({
    searchParams,
}: {
    searchParams: Record<string, string | string[]>;
}) {
    const params = new URLSearchParams();
    Object.entries(searchParams).forEach(([key, value]) => {
        params.set(key, Array.isArray(value) ? value[0] : value);
    });
    const queryString = params.toString();
    redirect(`/studio/work${queryString ? `?${queryString}` : ''}#contact`);
}
