export function removeEmailHost(email: string): string {
  if (!email) return '';
  return email.split('@')[0];
}