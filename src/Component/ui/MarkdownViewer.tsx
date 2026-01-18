/* eslint-disable @typescript-eslint/no-unused-vars */
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer({ markdown }: { markdown: string }) {

  return (
    <div className="w-full">
      <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-100 prose-p:text-gray-300 prose-strong:text-white prose-a:text-blue-400 prose-img:rounded-xl prose-pre:bg-[#161b22] prose-pre:border prose-pre:border-white/10">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => (
              <a
                {...props}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-500/30 hover:decoration-blue-500"
              />
            ),
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
}
