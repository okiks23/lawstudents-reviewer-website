import { CaseRecord } from "@/lib/cases";

export default function MindMap({ record }: { record: CaseRecord }) {
  const cx = 260;
  const cy = 200;
  const radius = 140;
  const n = record.concepts.length;

  const nodes = record.concepts.map((label, i) => {
    const angle = (i / n) * 2 * Math.PI - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    return { label, x, y };
  });

  return (
    <div className="bg-paperDark/70 border border-line p-4 overflow-x-auto">
      <svg viewBox="0 0 520 400" className="w-full min-w-[420px] h-auto">
        {nodes.map((node, i) => (
          <line
            key={`line-${i}`}
            x1={cx}
            y1={cy}
            x2={node.x}
            y2={node.y}
            stroke="#B9AE8D"
            strokeWidth={1.5}
          />
        ))}

        <circle cx={cx} cy={cy} r={70} fill="#1D2340" />
        <foreignObject x={cx - 65} y={cy - 40} width={130} height={80}>
          <div className="flex h-full w-full items-center justify-center text-center">
            <p className="text-[12px] leading-tight text-paper font-medium">
              {record.title}
            </p>
          </div>
        </foreignObject>

        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <circle cx={node.x} cy={node.y} r={44} fill="#C9A66B" stroke="#B08F55" />
            <foreignObject x={node.x - 42} y={node.y - 30} width={84} height={60}>
              <div className="flex h-full w-full items-center justify-center text-center">
                <p className="text-[11px] leading-tight text-ink font-medium">
                  {node.label}
                </p>
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
      <p className="mt-3 text-sm text-charcoal/80">
        {record.doctrine}
      </p>
    </div>
  );
}