/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer( {markdown}: {markdown: string} ) {

  return (
    <div className="prose min-w-full">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ node, ...props }) => (
            <a
              {...props}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            />
          ),
        }}      
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
