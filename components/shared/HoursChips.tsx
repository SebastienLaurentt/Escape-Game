interface HoursChipsProps {
  hours: string;
}

const HoursChips = ({ hours }: HoursChipsProps) => {
  return (
    <div className="flex flex-row items-center justify-center rounded-xl bg-primary px-2 py-1 text-primary-foreground">
      {hours}
    </div>
  );
};

export default HoursChips;
