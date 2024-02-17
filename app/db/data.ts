import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';


export const fetchViewsBySlug =async (slug: string) => {
    unstable_noStore();

    const data = await sql<{count: number}>`SELECT count FROM views WHERE slug=${slug}`
    console.log(data);

    return data.rows[0]?.count || 0

}

