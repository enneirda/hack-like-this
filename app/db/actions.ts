'use server'
import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';

export const incrementViews =async  (slug: string) => {
    await sql `
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1
    `;
}