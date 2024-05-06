interface HoursChipsProps {
  hours: string;
}

const HoursChips = ({ hours }: HoursChipsProps) => {
  return (
    <button className="flex flex-row items-center justify-center rounded-xl bg-secondary px-3 py-1 text-foreground hover:bg-primary">
      {hours}
    </button>
  );
};

export default HoursChips;
