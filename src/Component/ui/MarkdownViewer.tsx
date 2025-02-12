import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer( {markdown}: {markdown: string} ) {

  return (
    <div className="prose w-full">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
}
