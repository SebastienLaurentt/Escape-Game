interface HoursChipsProps {
  hours: string;
  onClick?: (hours: string) => void;
}

const HoursChips = ({ hours, onClick }: HoursChipsProps) => (
  <span
    onClick={(e) => {
      if (onClick) {
        onClick(hours);
      }
    }}
    className="flex flex-row items-center justify-center rounded-xl bg-secondary px-3 py-1 text-foreground hover:bg-primary"
  >
    {hours}
  </span>
);

export default HoursChips;
