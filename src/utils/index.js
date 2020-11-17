/**
 * Format date into MMMM DD, YYYY
 */
export function formatDate(date) {
  const formattedDate = new window.Date(date);

  const month = formattedDate?.toLocaleString('default', { month: 'long' });
  const day = formattedDate && formattedDate.getDay();
  const year = formattedDate && formattedDate.getFullYear();

  return `${month} ${day}, ${year}`;
}
