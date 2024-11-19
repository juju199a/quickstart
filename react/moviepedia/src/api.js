export async function getReviews({order='createdAt', offset=0, limit=0}) {
    const query = `order=${order}&offset=${offset}&limit=${limit}`;
    const response = await fetch(`https://learn.codeit.kr/2557/film-reviews?${query}`);
    const body = await response.json();
    return body;
}