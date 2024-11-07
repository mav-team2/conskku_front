export enum LineDirection {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

type LineProps = {
  dir: LineDirection;
  length: number | string;
  size: number;
  className?: string;
};

const Line: React.FC<LineProps> = ({ dir, length, size = 1, className }) => {
  const isFull = length === "full";

  const border =
    (dir === LineDirection.Horizontal ? "border-t" : "border-r") + `-${size}`;

  return (
    <>
      <div
        className={`${
          dir === LineDirection.Horizontal
            ? isFull
              ? "w-full"
              : `w-${length}`
            : isFull
            ? "h-full"
            : `h-${length}`
        } ${border} ${className}`}
      ></div>
    </>
  );
};

export default Line;
