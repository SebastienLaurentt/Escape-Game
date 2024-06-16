import React from 'react';
import { dotPulse } from "ldrs";

dotPulse.register();

interface LoaderProps {
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ color = "black" }) => {
  return <l-dot-pulse size="20" color={color} />;
};

export default Loader;
