import ReactHTMLParse from 'react-html-parser';

export default function translateToHTML(t: Function, html?: boolean) {
  if (!html) {
    return t;
  }

  return ReactHTMLParse(t);
}
