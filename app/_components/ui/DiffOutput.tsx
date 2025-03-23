import { Diff } from "diff-match-patch";
import LineNumber from "@/app/_components/ui/LineNumber";

export default function DiffOutput(props: {
  diffs: Diff[];
  isInsertion?: boolean;
}) {
  const insertionIndex = props.isInsertion ? 1 : -1;
  return (
    <div className="flex">
      <LineNumber
        className="py-2"
        lineNumbers={props.diffs.join("").split("\n").length}
      />
      <div className="p-2 border border-gray-500 whitespace-pre font-mono text-sm w-full leading-5 overflow-x-auto no-scrollbar">
        {props.diffs.map((diff, i) => (
          <span
            key={i}
            className={`${diff[0] !== 0 ? (diff[0] === insertionIndex ? "bg-green-600/50" : "bg-red-600/50 line-through") : ""}`}
          >
            {diff[1]}
          </span>
        ))}
      </div>
    </div>
  );
}
