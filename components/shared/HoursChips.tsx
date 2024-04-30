interface HoursChipsProps {
  hours: string;
}

const HoursChips = ({ hours }: HoursChipsProps) => {
  return (
    <button className="flex flex-row items-center justify-center rounded-xl bg-primary px-3 py-1 text-primary-foreground hover:bg-accent hover:text-foreground">
      {hours}
    </button>
  );
};

export default HoursChips;
