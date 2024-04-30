interface HoursChipsProps {
  hours: string;
}

const HoursChips = ({ hours }: HoursChipsProps) => {
  return <div className="rounded-xl bg-primary text-primary">{hours}</div>;
};

export default HoursChips;
