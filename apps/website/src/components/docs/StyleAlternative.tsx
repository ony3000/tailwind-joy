import { useEffect } from 'react';

export function StyleAlternative() {
  useEffect(() => {
    const element = document.querySelector('.theme-doc-markdown.markdown');

    if (element) {
      element.classList.add('markdown-alt');
      element.classList.remove('markdown');
    }
  }, []);

  return null;
}
