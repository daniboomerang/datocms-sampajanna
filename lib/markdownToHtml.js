import remark from 'remark';
import html from 'remark-html';

const markdownToHtml = async (markdown) => {
  const result = await remark()
    .use(html)
    .processSync(markdown);

  return result.toString();
};

export default markdownToHtml;
