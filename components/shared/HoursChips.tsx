interface HoursChipsProps {
  hours: string;
  onClick?: (hours: string) => void;
  isSelected?: boolean; 
}

const HoursChips = ({ hours, onClick, isSelected }: HoursChipsProps) => (
  <span
    onClick={(e) => {
      if (onClick) {
        onClick(hours);
      }
    }}
    className={`flex cursor-pointer flex-row items-center justify-center rounded-xl px-3 py-1 text-foreground hover:bg-primary ${isSelected ? 'bg-primary' : 'bg-secondary'}`} // Ajoutez cette ligne pour le style conditionnel
  >
    {hours}
  </span>
);

export default HoursChips;
