export function limitTextLenght(text: string, limit: number = 90) {
  if (text.length <= limit) {
    return text;
  }

  const clip = '...';
  const originalText = text.trim().split('').slice(0, limit);
  originalText.push(clip);
  const textClipped = originalText.join('');

  return textClipped;
}
